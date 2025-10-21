import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FounderStory } from "@/components/FounderStory";
import { ConnectFormats } from "@/components/ConnectFormats";
import { JoinUs } from "@/components/JoinUs";
import { WallOfMembers } from "@/components/WallOfMembers";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CodeOfConduct } from "@/components/CodeOfConduct";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="smooth-scroll">
      <Navigation onJoinClick={() => scrollToSection("join")} />
      
      <main>
        <div id="hero">
          <Hero
            onJoinClick={() => scrollToSection("join")}
            onStoryClick={() => scrollToSection("movement")}
          />
        </div>
        
        <FounderStory />
        
        <Gallery />
        
        <ConnectFormats onJoinClick={() => scrollToSection("join")} />
        
        <JoinUs />
        
        <WallOfMembers />
        
        <Testimonials />
        
        <CodeOfConduct />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
