import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';


const highlightBox = {
  background: '#FFFBEA',
  borderRadius: '8px',
  padding: '16px',
  borderLeft: '6px solid #FFD600',
  margin: '24px 0',
  fontWeight: 600,
  color: '#6D4C00',
};

const quoteBox = {
  background: '#FFF0F0',
  borderRadius: '8px',
  padding: '20px',
  borderLeft: '6px solid #FF5A5F',
  margin: '24px 0',
  fontStyle: 'italic',
  color: '#B71C1C',
};

const ContactMeaning: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pt-32 pb-8"> {/* pt-32 để tránh header che */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 drop-shadow-lg tracking-wide animate-colorful-title"
          style={{ letterSpacing: 2 }}
        >
          Thực tiễn
        </motion.h1>
        <style>{`
          @keyframes colorChange {
            0% { color: #e11d48; }
            20% { color: #f59e42; }
            40% { color: #22d3ee; }
            60% { color: #10b981; }
            80% { color: #6366f1; }
            100% { color: #e11d48; }
          }
          .animate-colorful-title {
            animation: colorChange 3.5s linear infinite;
          }
        `}</style>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.img
            src="https://t.ex-cdn.com/phatgiao.org.vn/560w/files/content/2019/07/26/giao-ly-phat-giao-qua-lang-kinh-chu-tich-ho-chi-minh-2220.jpg"
            alt="Đại đoàn kết toàn dân tộc"
            className="h-56 w-full max-w-xl object-cover rounded-2xl shadow-2xl border-4 border-red-200 hover:scale-105 hover:shadow-red-300 transition-transform duration-500"
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(255,0,0,0.15)' }}
          />
        </motion.div>
        <p className="text-base md:text-lg mb-4">
          Tư tưởng đại đoàn kết toàn dân tộc của Hồ Chí Minh có giá trị thực tiễn sâu sắc trong giai đoạn hiện nay.
        </p>
        <div style={highlightBox} className="text-base md:text-lg">
          <b>Đoàn kết nội bộ: Xây dựng khối đoàn kết thống nhất trong Đảng, trong hệ thống chính trị</b>
        </div>
        <ul className="list-disc pl-6 mb-6 text-base md:text-lg space-y-1">
          <li>Phòng chống chia rẽ, mất đoàn kết nội bộ</li>
          <li>Tập trung trí tuệ cho phát triển đất nước</li>
          <li>Bảo vệ vững chắc chủ quyền quốc gia</li>
          <li>Tạo sự đồng thuận xã hội cao</li>
        </ul>
  <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2 mt-8">Ý nghĩa trong phát triển bền vững</h2>
        <p className="text-base md:text-lg mb-4">
          Đại đoàn kết là cơ sở để huy động mọi nguồn lực cho phát triển kinh tế - xã hội, bảo đảm an sinh xã hội, thực hiện tiến bộ và công bằng xã hội.
        </p>
        <div style={quoteBox} className="text-lg md:text-xl flex flex-col items-start">
          <span className="text-2xl text-red-500 font-serif mb-2">❝</span>
          <span>"Đoàn kết là sức mạnh vô địch"</span>
          <span className="mt-2 font-semibold text-red-700">- Hồ Chí Minh -</span>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.img
            src="https://kimtuthap.vn/wp-content/uploads/2018/10/ho-chi-minh-hcm.jpg"
            alt="Đoàn kết hình ảnh"
            className="h-48 w-full max-w-lg object-cover rounded-2xl shadow-xl border-4 border-yellow-200 my-6 hover:scale-105 hover:-rotate-2 hover:shadow-yellow-300 transition-transform duration-500"
            whileHover={{ scale: 1.08, rotate: -2, boxShadow: '0 8px 32px 0 rgba(255,200,0,0.15)' }}
          />
        </motion.div>
        <p className="text-base md:text-lg mb-4">
          Trong bối cảnh hội nhập quốc tế, đại đoàn kết toàn dân tộc càng có ý nghĩa quan trọng trong việc giữ gìn bản sắc văn hóa, phát huy nội lực, tranh thủ ngoại lực để phát triển đất nước.
        </p>
        <div style={highlightBox} className="text-base md:text-lg">
          <b>Câu hỏi CQ: Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh — liệu đó chỉ là sách lược tạm thời để vượt qua khó khăn, hay là một chiến lược lâu dài, xuyên suốt của cách mạng Việt Nam?</b>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactMeaning;
