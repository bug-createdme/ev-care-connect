import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoleSelection from "@/components/RoleSelection";
import PodcastSection from "@/components/PodcastSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Index = () => {
  const heroRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const roleRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const podcastRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div ref={podcastRef}>
          <PodcastSection />
        </div>
        <div ref={roleRef}>
          <RoleSelection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
