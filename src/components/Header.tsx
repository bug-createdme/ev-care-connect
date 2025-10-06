
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const navItems = [
    { label: "Trang chủ", href: "/home", type: "link" },
    { label: "Mục lục", href: "#veduan", type: "anchor" },
    { label: "Podcast", href: "#podcast", type: "anchor" },
    { label: "Liên hệ", href: "/lien-he", type: "link" },
    { label: "Quiz", href: "https://quiz.com/f9ab97cc-832b-4a86-8f48-a7f7a023764e/", type: "external" },
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
          if (item.type === "external") {
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  baseClass,
                  "text-white ml-2",
                  "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:shadow-md"
                )}
                style={{ minWidth: 120, textAlign: 'center' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            );
          }
          if (item.type === "link") {
            const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (item.href === "/home") {
                e.preventDefault();
                navigate("/home");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }
            };
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(baseClass, activeClass)}
                style={{ minWidth: 100, textAlign: 'center' }}
                onClick={item.href === "/home" ? handleHomeClick : undefined}
              >
                {item.label}
              </Link>
            );
          } else {
            // Anchor luôn về /home#id để không quay lại intro
            const isHome = location.pathname === "/home";
            const anchorHref = isHome ? item.href : `/home${item.href}`;
            const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!isHome) {
                e.preventDefault();
                navigate(`/home${item.href}`);
                setTimeout(() => {
                  const id = item.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
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
