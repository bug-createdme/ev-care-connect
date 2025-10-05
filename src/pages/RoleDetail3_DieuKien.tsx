
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RoleDetail3DieuKien = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
              <span className="inline-block">Điều kiện xây dựng</span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
              <span className="inline-block">Khối đại đoàn kết vững mạnh</span>
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
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTNJOanjnDvnRpf9JpG64bZW2prmV7Il6WerH8qWnpVlgsmnA_"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Lấy lợi ích chung làm điểm quy tụ, tôn trọng lợi ích khác biệt chính đáng</h3>
              <p className="text-gray-700 text-lg mb-0">
                Lấy lợi ích toàn dân tộc làm điểm quy tụ; tôn trọng quyền lợi hợp pháp của mọi tầng lớp nhân dân.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://baotuyenquang.com.vn/media/images/2021/07/img_20210709085730.jpg"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlU9rrkSWewuo7CbCBZZZdNsoUeMU6EeNo44CWzGCM4YM2-jjJ"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Kế thừa truyền thống yêu nước – nhân nghĩa – đoàn kết</h3>
              <p className="text-gray-700 text-lg mb-0">
                Phát huy truyền thống đoàn kết, tinh thần yêu nước, nhân nghĩa là nền tảng cho khối đại đoàn kết.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Có lòng khoan dung, độ lượng với con người và có niềm tin vào nhân dân</h3>
              <p className="text-gray-700 text-lg mb-0">
                Thực hành khoan dung với sai lầm, xây dựng niềm tin vào sức mạnh nhân dân, đoàn kết bền vững.
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/012023/anh-7-desktop_20230126071119.jpg"
                alt="Ảnh mục 3"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl mt-24 text-sm text-gray-400 text-center">
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default RoleDetail3DieuKien;
