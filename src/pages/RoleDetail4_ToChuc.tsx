
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RoleDetail4ToChuc = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
            <div className="mb-10">
              <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
                <span className="inline-block">Hình thức khối đoàn kết</span>
              </h1>
              <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
                <span className="inline-block">Đổi mới, hiện đại, nhất quán</span>
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
              src="https://media.baothaibinh.com.vn/upload/news/2_2022/xay_dung_cung_co_va_phat_huy_suc_manh_tong_hop_cua_khoi_dai_doan_ket_toan_dan_toc_theo_tu_tuong_ho_chi_minh_07144804022022.jpg"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Mặt trận dân tộc thống nhất</h3>
              <p className="text-gray-700 text-lg mb-0">
                Mặt trận dân tộc thống nhất là hình thức tổ chức chủ yếu của khối đại đoàn kết toàn dân tộc, nhằm biến sức mạnh tiềm tàng của quần chúng thành lực lượng chính trị vững chắc. Việc tập hợp phải gắn với đặc điểm từng giai đoạn, tầng lớp, tôn giáo, nhằm quy tụ mọi tổ chức và cá nhân yêu nước ở trong và ngoài nước. Qua các thời kỳ lịch sử, mặt trận có nhiều tên gọi khác nhau nhưng bản chất không đổi: là tổ chức chính trị - xã hội rộng lớn, nơi tập hợp mọi lực lượng vì mục tiêu chung.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://suckhoedoisong.qltns.mediacdn.vn/Images/Uploaded/Share/2009/11/20/dba2.JPG"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://file3.qdnd.vn/data/images/0/2022/10/25/minhanh/anh%203%201.jpg?dpi=150&quality=100&w=870"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Nguyên tắc xây dựng và hoạt động của Mặt trận</h3>
              <p className="text-gray-700 text-lg mb-0">
                Về nguyên tắc hoạt động, mặt trận phải xây dựng trên nền tảng liên minh công – nông – trí thức, dưới sự lãnh đạo của Đảng, đảm bảo nguyên tắc hiệp thương dân chủ. Liên minh công nông là lực lượng nòng cốt nhờ vị trí kinh tế – xã hội và tinh thần cách mạng kiên định. Sự đoàn kết phải chân thành, bền chặt và gắn liền với đấu tranh nhằm tăng cường thống nhất nội bộ.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Những trích dẫn quan trọng</h3>
              <p className="text-gray-700 text-lg mb-0">
                “Đoàn kết là sức mạnh” – Hồ Chí Minh. “Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác ngoài con đường đoàn kết.”
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://quizizz.com/_media/quizzes/7b637bc6-07fb-4f41-a77f-fed7d8a246ee-v2_200_200"
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
              onClick={() => navigate('/dieu-kien-xay-dung')}
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
              onClick={() => navigate('/phuong-thuc-xay-dung')}
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


export default RoleDetail4ToChuc;
