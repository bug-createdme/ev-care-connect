import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const RoleDetail6ChienLuoc = () => {
 return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
              <span className="inline-block">Chiến lược lâu dài.</span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
              <span className="inline-block">Đại đoàn kết xuyên suốt, nhất quán, không thay đổi chủ trương</span>
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
              src="https://vcdn1-vnexpress.vnecdn.net/2024/08/26/05-1724667584.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=Ipl40cJbK2cI4phzgW3IyQ"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Tư tưởng chủ trương nhất quán</h3>
              <p className="text-gray-700 text-lg mb-0">
                Đại đoàn kết luôn là chủ trương xuyên suốt của cách mạng Việt Nam, không chỉ là ứng phó tạm thời.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://vannghedanang.org.vn/app/upload/post/2019-12-09/20191209130750_bai_23_phong_cach_ho_chi_minh_ve_ton_trong_nhan_dan_hinh_anh0991.jpg"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://images.baodantoc.vn/thumbs/600x315/uploads/2024/Thang-1/Ngay-31/Anh/untitled%20folder/1.jpg"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Không thay đổi qua các giai đoạn</h3>
              <p className="text-gray-700 text-lg mb-0">
                Ở mọi thời kỳ, đại đoàn kết là yếu tố quyết định thắng lợi, không bị thay đổi bởi hoàn cảnh.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Chiến lược vì phát triển bền vững</h3>
              <p className="text-gray-700 text-lg mb-0">
                Việc đoàn kết toàn dân vừa đảm bảo sự vững mạnh, vừa là nền tảng cho phát triển lâu dài.
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUAuKVpzTFUtVivwIM3pgjzbgZ55jtkFwTP8pLFpm44M2Smev"
                alt="Ảnh mục 3"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl mt-24 text-sm text-gray-400 text-center">
          </div>
          {/* Only up arrow for navigation on last page */}
          <div className="flex flex-col items-center gap-4 mt-12 mb-2">
            {/* Up arrow: back to previous role */}
            <button
              onClick={() => window.location.href = '/phuong-thuc-xay-dung'}
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
            <style>{`
              @keyframes bounce-up {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-16px); }
              }
              .animate-bounce-up {
                animation: bounce-up 1.2s infinite cubic-bezier(.4,0,.2,1);
              }
            `}</style>
          </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default RoleDetail6ChienLuoc;
