import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
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
        
        <FounderStory />
        
        {/* What We Do Section - Before Journey */}
        <ConnectFormats onJoinClick={() => scrollToSection("join")} />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Timeline Section - Our Journey */}
        <Timeline />
        
        <div id="join">
          <JoinUs />
        </div>
        
        {/* Members Preview (4 members) on Homepage */}
        <MembersPreview />
        
        {/* Testimonials Carousel on Homepage */}
        <TestimonialsCarousel />
        
        <CodeOfConduct />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
