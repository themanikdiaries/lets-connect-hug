import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingElements } from "@/components/FloatingElements";
import { Users, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/first-gathering.webp";

interface HeroProps {
  onJoinClick: () => void;
  onStoryClick: () => void;
}

export const Hero = ({ onJoinClick, onStoryClick }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1
            className="text-6xl md:text-8xl font-display font-bold leading-tight fade-in-up gradient-text"
            style={{ animationDelay: "0.1s" }}
          >
            Letz Connect
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl md:text-3xl font-display font-semibold text-foreground fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Bridges between{" "}
            <span className="text-primary">juniors</span> and{" "}
            <span className="text-secondary">seniors</span>
          </p>

          {/* Subtagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where <span className="text-primary font-semibold">friendships</span>,{" "}
            <span className="text-secondary font-semibold">guidance</span>, and{" "}
            <span className="text-accent font-semibold">projects</span> begin. A circle for honest conversations, tiny experiments, and lifelong bonds.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={onJoinClick}
              className="text-lg px-8 py-6 rounded-xl shadow-warm hover:shadow-glow transition-smooth pulse-glow"
            >
              Join Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onStoryClick}
              className="text-lg px-8 py-6 rounded-xl border-2 border-primary text-primary hover:bg-primary/10 transition-smooth glass"
            >
              Read the Story
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export const HeroStats = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-4 md:p-6 card-3d border border-border">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-6 h-6 text-primary mb-1" />
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                <AnimatedCounter end={150} suffix="+" />
              </span>
              <span className="text-xs md:text-sm text-foreground font-medium">Members</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 md:p-6 card-3d border border-border">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-6 h-6 text-secondary mb-1" />
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                <AnimatedCounter end={50} suffix="+" duration={2200} />
              </span>
              <span className="text-xs md:text-sm text-foreground font-medium">Meetups</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 md:p-6 card-3d border border-border">
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent mb-1" />
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                <AnimatedCounter end={6} duration={1500} />
              </span>
              <span className="text-xs md:text-sm text-foreground font-medium">Months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
