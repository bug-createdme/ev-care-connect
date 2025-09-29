

const Footer = () => {
  return (
    <footer className="bg-[#1a2233] text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chủ đề */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Tư Tưởng Hồ Chí Minh</h3>
            <p className="text-base opacity-80">Về Đại Đoàn Kết Toàn Dân Tộc</p>
            <blockquote className="italic text-sm text-cyan-300 border-l-4 border-cyan-400 pl-4 mt-2">
              “Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”
            </blockquote>
          </div>

          {/* Ý nghĩa */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ý nghĩa đại đoàn kết</h4>
            <ul className="space-y-2 text-sm opacity-80 list-disc list-inside">
              <li>Tăng cường sức mạnh dân tộc</li>
              <li>Phát huy truyền thống yêu nước</li>
              <li>Gắn kết mọi tầng lớp nhân dân</li>
              <li>Động lực phát triển đất nước</li>
            </ul>
          </div>

          {/* Liên hệ & thông tin nhóm */}
          <div className="space-y-4">
            <h4 className="font-semibold">Thông tin nhóm thực hiện</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Môn học - HCM202</li>
              <li>GVHD: Nguyễn Trung Hiếu</li>
              <li>Sinh viên: Nhóm 4</li>
              <li>Email: nhom4.hcm202@example.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2025 Chủ đề: Tư Tưởng Hồ Chí Minh về Đại Đoàn Kết Toàn Dân Tộc. Nhóm 4 - HCM202.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;