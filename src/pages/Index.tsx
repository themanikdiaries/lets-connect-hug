import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FounderStory } from "@/components/FounderStory";
import { ConnectFormats } from "@/components/ConnectFormats";
import { JoinModal } from "@/components/JoinModal";
import { WallOfStories } from "@/components/WallOfStories";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="smooth-scroll">
      <Navigation onJoinClick={() => setIsJoinModalOpen(true)} />
      
      <main>
        <div id="hero">
          <Hero
            onJoinClick={() => setIsJoinModalOpen(true)}
            onStoryClick={() => scrollToSection("movement")}
          />
        </div>
        
        <FounderStory />
        
        <ConnectFormats onJoinClick={() => setIsJoinModalOpen(true)} />
        
        <WallOfStories />
        
        <Gallery />
      </main>
      
      <Footer />
      
      <JoinModal
        open={isJoinModalOpen}
        onOpenChange={setIsJoinModalOpen}
      />
    </div>
  );
};

export default Index;
