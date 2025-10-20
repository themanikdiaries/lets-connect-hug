import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          {/* Badge */}
          

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Bridges between juniors and seniors — where{" "}
            <span className="text-primary">friendships</span>,{" "}
            <span className="text-secondary">guidance</span>, and{" "}
            <span className="text-accent">projects</span> begin.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A student-led space to belong, learn, and build together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" onClick={onJoinClick} className="text-lg px-8 py-6 pulse-glow rounded-2xl shadow-warm hover:shadow-hover transition-smooth group">
              Join Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={onStoryClick} className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-primary/10 hover:border-primary transition-smooth">
              Read the Story
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gradient-warm border-2 border-background" />)}
              </div>
              <span>20+ students connected</span>
            </div>
            <div>✨ 1 gathering held</div>
            <div>🎯 Weekly meetups</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};