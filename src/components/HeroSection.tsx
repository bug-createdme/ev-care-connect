
import heroImage from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
  <section className="relative min-h-screen flex items-end justify-center overflow-hidden pt-12 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Ho Chi Minh" 
          className="w-full h-full object-cover brightness-150 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pb-2">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[60vh]">
          {/* Left: Logo + Title + Menu */}
          <div className="space-y-8 flex flex-col justify-end items-start">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-800 text-sm font-medium shadow-md">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block"></span>
                HCM202 - FA25 - SE1741
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#5b8cff] drop-shadow-lg uppercase">
              KHÔNG CÓ GÌ QUÝ HƠN<br />
              ĐỘC LẬP, TỰ DO
            </h1>
          </div>

          {/* Right: CTA + Info Box */}
          <div className="flex flex-col items-end gap-6 justify-end">
            <div className="bg-white/80 rounded-2xl p-6 max-w-md shadow-xl text-black text-base">
              <div className="text-sm">Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc là một trong những di sản tư tưởng quý báu nhất của Người, có ý nghĩa chiến lược trong sự nghiệp cách mạng của dân tộc Việt Nam.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;