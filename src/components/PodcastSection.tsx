import podcastBg from "@/assets/hero-section.jpg";
import anhPodcast from "@/assets/anhpodcast.jpg";

const FeaturesSection = () => {
  return (
    <section id="podcast" className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden" style={{background: '#fff'}}>
          <img src={podcastBg} alt="bg" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90" />
          <div className="relative z-10 flex justify-center items-center min-h-[350px] py-12">
            <div className="bg-gradient-to-r from-gray-200/80 to-gray-400/80 rounded-2xl shadow-xl flex items-center gap-8 px-8 py-8 w-full max-w-2xl mx-auto">
              <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 rounded-full bg-gray-300 border-8 border-gray-300 shadow-lg overflow-hidden">
                <img src={anhPodcast} alt="Podcast" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">PODCAST</h2>
                <div className="text-gray-700 mb-2">Tư Tưởng Hồ Chí Minh Về Đại Đoàn Kết Dân Tộc</div>
                <div className="flex gap-2 mb-4">
                  <button className="px-4 py-1 rounded-full bg-white text-gray-800 font-medium shadow border border-gray-300">Tư tưởng Hồ Chí Minh</button>
                  <button className="px-4 py-1 rounded-full bg-white text-gray-800 font-medium shadow border border-gray-300">Tóm tắt</button>
                </div>
                <div className="bg-white rounded-xl shadow flex items-center px-4 py-2">
                  <audio controls className="w-full">
                    <source src="/Tư_Tưởng_Hồ_Chí_Minh_Về_Đại_Đoàn_Kết_Dân_Tộc__Kim_Chỉ_Nam_Sống_.mp3" type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ phát audio.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;