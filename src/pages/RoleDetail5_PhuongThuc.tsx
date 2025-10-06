
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RoleDetail5PhuongThuc = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
              <span className="inline-block">Phương thức xây dựng đại đoàn kết</span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
              <span className="inline-block">Tích cực huy động quần chúng, tổ chức, hợp nhất</span>
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
              src="https://llct.1cdn.vn/2025/07/20/image(4).png"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Làm tốt công tác vận động quần chúng (Dân vận)</h3>
              <p className="text-gray-700 text-lg mb-0">
                Lấy dân làm gốc, lắng nghe và giải quyết các nguyện vọng chính đáng của nhân dân, hướng dẫn quần chúng tham gia các phong trào theo tinh thần đoàn kết.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQjnCbRbn4w_alpzWYZn1qqzWpOq9oa5E_gEQsvjkah8tW5QA"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjsKLogwQ2925gPKxNdHbnwPY3YizBXIZNWVFhJ8w95LGtbbS"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Thành lập các đoàn thể, tổ chức quần chúng phù hợp từng đối tượng</h3>
              <p className="text-gray-700 text-lg mb-0">
                Xây dựng các đoàn thể, hiệp hội, tổ chức phù hợp với từng nhóm xã hội, đảm bảo mọi tầng lớp đều được đại diện và gắn kết cùng mục tiêu.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Tập hợp các đoàn thể, tổ chức quần chúng vào Mặt trận dân tộc thống nhất</h3>
              <p className="text-gray-700 text-lg mb-0">
                Quy tụ các đoàn thể, tổ chức thành một khối vững mạnh — Mặt trận dân tộc thống nhất, tạo thành sức mạnh tổng hợp để phát triển và bảo vệ đất nước.
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://thanhphohaiphong.gov.vn/wp-content/uploads/2019/09/ttxvn_0909mattran21.jpg"
                alt="Ảnh mục 3"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl mt-24 text-sm text-gray-400 text-center"></div>
          {/* Arrow up and down for navigation */}
          <div className="flex flex-col items-center gap-4 mt-12 mb-2">
            {/* Up arrow: back to previous role */}
            <button
              onClick={() => navigate('/to-chuc-khoi-dai-doan-ket')}
              className="group flex flex-col items-center focus:outline-none"
              aria-label="Quay lại trang trước"
            >
              {/* <span className="text-gray-500 text-base mb-1">Quay lại</span> */}
              <span className="inline-block animate-bounce-up">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up drop-shadow-md">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </span>
            </button>
            {/* Down arrow: next role */}
            <button
              onClick={() => navigate('/chien-luoc-lau-dai')}
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
              @keyframes bounce-up {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-16px); }
              }
              .animate-bounce-up {
                animation: bounce-up 1.2s infinite cubic-bezier(.4,0,.2,1);
              }
            `}</style>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default RoleDetail5PhuongThuc;
