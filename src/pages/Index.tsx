import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoleSelection from "@/components/RoleSelection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RoleSelection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
