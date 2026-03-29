import { Navigation } from "@/components/Navigation";
import { Hero, HeroStats } from "@/components/Hero";
import { FounderStory } from "@/components/FounderStory";
import { ConnectFormats } from "@/components/ConnectFormats";
import { Achievements } from "@/components/Achievements";
import { JoinUs } from "@/components/JoinUs";
import { CodeOfConduct } from "@/components/CodeOfConduct";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { MembersPreview } from "@/components/MembersPreview";
import { Timeline } from "@/components/Timeline";
import { GallerySlideshow } from "@/components/GallerySlideshow";
import { EventPartner } from "@/components/EventPartner";

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
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero
            onJoinClick={() => scrollToSection("join")}
            onStoryClick={() => scrollToSection("movement")}
          />
        </div>

        {/* Stats Section - separate so user scrolls to see it */}
        <HeroStats />
        
        {/* Gallery Slideshow */}
        <GallerySlideshow />
        
        <FounderStory />
        
        <ConnectFormats onJoinClick={() => scrollToSection("join")} />
        
        <Timeline />
        
        <div id="join">
          <JoinUs />
        </div>
        
        <MembersPreview />
        
        <TestimonialsCarousel />
        
        <Achievements />
        
        <CodeOfConduct />

        <EventPartner />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
