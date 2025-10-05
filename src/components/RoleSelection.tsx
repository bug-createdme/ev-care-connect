
import mucLucImg from "@/assets/muc-luc.jpg";
import { Link } from "react-router-dom";

const chapters = [
  {
    id: "vai-tro-dai-doan-ket",
    title: "Vai trò của đại đoàn kết toàn dân tộc",
    desc: "Tư tưởng đại đoàn kết toàn dân tộc của Hồ Chí Minh có vai trò đặc biệt quan trọng trong sự nghiệp cách mạng Việt Nam, thể hiện tầm nhìn chiến lược và sự sáng tạo của Người.",
  },
  {
    id: "luc-luong-cau-thanh",
    title: "Lực lượng cấu thành khối đại đoàn kết",
    desc: "Khối đại đoàn kết toàn dân tộc được hình thành từ sự thống nhất của các lực lượng xã hội trên cơ sở những nền tảng vững chắc.",
  },
  {
    id: "dieu-kien-xay-dung",
    title: "Điều kiện để xây dựng khối đại đoàn kết",
    desc: "Việc xây dựng khối đại đoàn kết toàn dân tộc đòi hỏi những điều kiện cơ bản về tư tưởng, tình cảm và tổ chức.",
  },
  {
    id: "to-chuc-khoi-dai-doan-ket",
    title: "Hình thức tổ chức của khối đại đoàn kết toàn dân tộc – Mặt trận dân tộc thống nhất",
    desc: "Mặt trận dân tộc thống nhất là hình thức tổ chức cao nhất của khối đại đoàn kết toàn dân tộc.",
  },
  {
    id: "phuong-thuc-xay-dung",
    title: "Phương thức xây dựng khối đại đoàn kết dân tộc",
    desc: "Phương thức xây dựng khối đại đoàn kết thể hiện tính khoa học và nghệ thuật trong công tác vận động quần chúng.",
  },
  {
    id: "chien-luoc-lau-dai",
    title: "Vì sao đại đoàn kết là chiến lược lâu dài, không chỉ sách lược",
    desc: "Đại đoàn kết toàn dân tộc không phải là sách lược tình thế mà là chiến lược lâu dài, xuyên suốt của cách mạng Việt Nam.",
  },
];

const RoleSelection = () => {
  return (
    <section className="py-0 relative" id="veduan">
      <div className="absolute inset-0 z-0">
        <img
          src={mucLucImg}
          alt="background"
          className="w-full h-full object-cover blur-sm brightness-75"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 w-full h-full bg-red-600 bg-opacity-90" style={{mixBlendMode: 'multiply', zIndex: 1}}></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white tracking-wide mb-4">Khám phá trọn vẹn Tư Tưởng Hồ Chí Minh Về Đại Đoàn Kết Toàn Dân Tộc.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {chapters.map((c, idx) => {
            // Map id to route path
            const to = "/" + c.id;
            return (
              <Link
                key={c.id}
                to={to}
                className={
                  "group block bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 transition-all hover:bg-white/20 hover:scale-[1.03] relative cursor-pointer"
                }
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-600 font-bold text-xl border-2 border-white">{idx + 1}</span>
                  <span className="text-lg font-bold text-white">{c.title}</span>
                  <span className="ml-auto text-white/70 group-hover:text-white text-xs transition-transform transform group-hover:scale-110">↗</span>
                </div>
                <div className="text-white text-base leading-relaxed">
                  {c.desc}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;