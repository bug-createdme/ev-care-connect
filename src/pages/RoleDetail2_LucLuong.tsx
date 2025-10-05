
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RoleDetail2LucLuong = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center py-16 px-2 md:px-0 pt-32 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight animate-waving-text">
              <span className="inline-block">Lực lượng cấu thành</span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-500 animate-waving-text">
              <span className="inline-block">Chủ thể & nền tảng đoàn kết</span>
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
              src="https://doanthanhnien.vn/Content/uploads/images/133896728817468759_464_1696721169_16976407108871099-1745198413636.jpg"
              alt="Ảnh chính"
              className="w-full max-w-5xl h-[320px] md:h-[400px] object-cover rounded-2xl border-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500"
            />
          </div>
          {/* Section 1: 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Chủ thể của khối đại đoàn kết toàn dân tộc</h3>
              <p className="text-gray-700 text-lg mb-0">
                Theo Hồ Chí Minh, toàn thể nhân dân Việt Nam – không phân biệt dân tộc, tôn giáo, giàu nghèo, già trẻ, trai gái – đều là chủ thể của khối đại đoàn kết dân tộc. “Dân” và “nhân dân” vừa mang nghĩa cộng đồng rộng lớn, vừa gắn với từng con người cụ thể, khẳng định vai trò bình đẳng và vị trí quan trọng của mỗi người trong sự nghiệp cách mạng.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://image.plo.vn/w1000/Uploaded/2025/xqeioxnsxr/2025_04_11/z6493721380955-ac00725509c4d44e4b46621a3e79f241-9468-543.jpg.webp"
                alt="Ảnh mục 1"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:-rotate-6"
              />
            </div>
          </div>

          {/* Section 2: ảnh trái, nội dung phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <img
                src="https://file3.qdnd.vn/data/images/3/2025/07/01/upload_2059/human%20right.jpg?dpi=150&quality=100&w=500"
                alt="Ảnh mục 2"
                className="w-full max-w-lg h-72 object-cover rounded-2xl border shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-red-500 hover:rotate-6"
              />
            </div>
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Nền tảng của khối đại đoàn kết toàn dân tộc</h3>
              <p className="text-gray-700 text-lg mb-0">
                Hồ Chí Minh xác định mục đích của đại đoàn kết là phụng sự Tổ quốc và Nhân dân. Chủ thể của đoàn kết là mọi người Việt Nam yêu nước, trong đó công nhân, nông dân và các tầng lớp lao động khác là nòng cốt. Khối đại đoàn kết phải đứng vững trên lập trường giai cấp công nhân, đồng thời giải quyết hài hòa mối quan hệ giữa giai cấp và dân tộc để bảo đảm tính rộng rãi, bền vững.
              </p>
            </div>
          </div>

          {/* Section 3: nội dung trái, ảnh phải */}
          <div className="w-full flex flex-col md:flex-row gap-12 items-center mt-2">
            <div className="flex-1 bg-white rounded-2xl flex flex-col h-full justify-between p-4 md:p-6 shadow order-2 md:order-1">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900">Trích dẫn Hồ Chí Minh</h3>
              <p className="text-gray-700 text-lg mb-0">
                “Không có việc gì khó, chỉ sợ lòng không bền, đào núi và lấp biển, quyết chí ắt làm nên.”
              </p>
            </div>
            <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOTKGFdz6hoW5G7HTFtCgj2wJwfCqHANsbR9gwz2gHNTMwAjJK"
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


export default RoleDetail2LucLuong;
