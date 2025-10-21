import { Button } from "@/components/ui/button";
import heroImage from "@/assets/first-gathering.jpg";
interface HeroProps {
  onJoinClick: () => void;
  onStoryClick: () => void;
}
export const Hero = ({
  onJoinClick,
  onStoryClick
}: HeroProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-foreground">
            Bridges between juniors and seniors
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-primary font-semibold">friendships</span>, <span className="text-secondary font-semibold">guidance</span>, and <span className="text-accent font-semibold">projects</span> begin. A student-led circle for honest conversations, tiny experiments, and lifelong bonds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" onClick={onJoinClick} className="text-lg px-8 py-6 rounded-xl shadow-warm hover:shadow-hover transition-smooth">
              Join Us
            </Button>
            <Button size="lg" variant="outline" onClick={onStoryClick} className="text-lg px-8 py-6 rounded-xl border-2 border-primary text-primary hover:bg-primary/10 transition-smooth">
              Read the Story
            </Button>
          </div>
        </div>
      </div>
    </section>;
};