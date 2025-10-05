
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const navItems = [
    { label: "Trang chủ", href: "/", type: "link" },
    { label: "Mục lục", href: "#veduan", type: "anchor" },
    { label: "Podcast", href: "#podcast", type: "anchor" },
    { label: "Liên hệ", href: "/lien-he", type: "link" },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 80) {
        setShow(false); // scroll down, hide
      } else {
        setShow(true); // scroll up, show
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "w-full flex justify-center items-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        show ? "translate-y-0" : "-translate-y-full"
      )}
      style={{ pointerEvents: 'none' }}
    >
      <nav
        className="bg-[#100f22] rounded-full px-4 py-2 flex gap-2 shadow-lg border border-[#232b3a] mt-6"
        style={{ pointerEvents: 'auto' }}
      >
        {navItems.map((item) => {
          let isActive = false;
          if (location.hash) {
            isActive = item.type === "anchor" && location.hash === item.href;
          } else {
            isActive = item.type === "link" && location.pathname === item.href;
          }
          const baseClass = "px-6 py-2 rounded-full font-medium text-base transition-all duration-200";
          const activeClass = isActive ? "bg-cyan-500 text-white shadow-md" : "text-gray-200 hover:bg-[#232b3a] hover:text-cyan-400";
          if (item.type === "link") {
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(baseClass, activeClass)}
                style={{ minWidth: 100, textAlign: 'center' }}
                onClick={item.href === "/" ? () => { window.scrollTo({ top: 0, behavior: "smooth" }); } : undefined}
              >
                {item.label}
              </Link>
            );
          } else {
            // Nếu không ở trang chủ, anchor sẽ chuyển về /#anchor để luôn hoạt động
            const isHome = location.pathname === "/";
            const anchorHref = isHome ? item.href : `/${item.href}`;
            const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!isHome) {
                e.preventDefault();
                // Dùng navigate để về trang chủ kèm hash
                navigate(`/${item.href}`);
                // Đợi trang chủ mount xong mới scroll
                setTimeout(() => {
                  const id = item.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Nếu chưa có, thử lại sau 1 chút (trường hợp DOM chưa render kịp)
                    setTimeout(() => {
                      const el2 = document.getElementById(id);
                      if (el2) el2.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }, 300);
              }
            };
            return (
              <a
                key={item.label}
                href={anchorHref}
                className={cn(baseClass, activeClass)}
                style={{ minWidth: 100, textAlign: 'center' }}
                onClick={handleAnchorClick}
              >
                {item.label}
              </a>
            );
          }
        })}
      </nav>
    </div>
  );
};

export default Header;
