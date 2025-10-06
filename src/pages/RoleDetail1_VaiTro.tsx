
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RoleDetail1VaiTro = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
              <span className="inline-block">Vai trò của đại đoàn kết toàn dân tộc</span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
              <span className="inline-block">Tư tưởng Hồ Chí Minh về sức mạnh đoàn kết</span>
            </h2>
          </div>
          {/* Hiệu ứng sóng cuộn cho 2 dòng text */}
          <style>{`
            @keyframes wave {
              0% { transform: translateY(0); }
              10% { transform: translateY(-8px); }
              20% { transform: translateY(0); }
              30% { transform: translateY(8px); }
              40% { transform: translateY(0); }
              100% { transform: translateY(0); }
            }
            .animate-waving-text span {
              display: inline-block;
              animation: wave 2.2s infinite cubic-bezier(.4,0,.2,1);
            }
            .animate-waving-text:nth-child(1) span {
              animation-delay: 0s;
            }
            .animate-waving-text:nth-child(2) span {
              animation-delay: 0.5s;
            }
          `}</style>
          {/* Main top image */}
          <div className="w-full mb-12 flex justify-center">
            <img
              src="https://doanhnghiepkinhtexanh.vn/zoom/480x360/uploads/images/blog/NguyenVanTong/2024/09/10/m-1725937311.gif"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Quyết định thành công cách mạng</h3>
              <p className="text-gray-700 text-lg mb-0">
                Đại đoàn kết không phải là khẩu hiệu tạm thời mà là chiến lược lâu dài, mang tính quyết định. Hồ Chí Minh nhiều lần khẳng định đoàn kết chính là yếu tố tạo nên sức mạnh, bảo đảm cho thành công của cách mạng.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBm1vqJK3B8H4Bsd9RdNeRjT9ncSIGe8AaYuDuKqpteeKWKmnH"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://kenh14cdn.com/A3YmnWqkHeph7OwGyu6TwbX57tgTw/Image/2012/05/05B/120518kpsnbac13_a358c.jpg"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Mục tiêu, nhiệm vụ hàng đầu</h3>
              <p className="text-gray-700 text-lg mb-0">
                Đoàn kết vừa là phương tiện vừa là mục tiêu của cách mạng. Trong từng giai đoạn lịch sử, Hồ Chí Minh luôn đặt nhiệm vụ đoàn kết lên hàng đầu: từ giành độc lập, kháng chiến, đến xây dựng chủ nghĩa xã hội và thống nhất Tổ quốc.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Ý nghĩa thực tiễn sâu rộng</h3>
              <p className="text-gray-700 text-lg mb-0">
                Đại đoàn kết giúp tăng cường đồng lòng, phát huy truyền thống, vượt qua mọi thử thách, xây dựng đất nước đổi mới.
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://clu.1cdn.vn/2025/05/17/hinh-anh-bac-ho-voi-nguoi-nong-dan-1-04-13-05-16.jpg"
                alt="Ảnh mục 3"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl mt-24 text-sm text-gray-400 text-center"></div>
          {/* Arrow down touch effect to go to next role */}
          <div className="flex flex-col items-center gap-4 mt-12 mb-2">
            <button
              onClick={() => navigate('/luc-luong-cau-thanh')}
              className="group flex flex-col items-center focus:outline-none"
              aria-label="Chuyển sang trang tiếp theo"
            >
              {/* <span className="text-gray-500 text-base mb-1">Tiếp theo</span> */}
              <span className="inline-block animate-bounce">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down drop-shadow-md">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </span>
            </button>
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(16px); }
              }
              .animate-bounce {
                animation: bounce 1.2s infinite cubic-bezier(.4,0,.2,1);
              }
            `}</style>
          </div>
        </div>
  </main>
  <Footer />
    </div>
  );
};
export default RoleDetail1VaiTro;
