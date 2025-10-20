import { Quote } from "lucide-react";
import bridgeIcon from "@/assets/icon-bridge.png";
export const FounderStory = () => {
  const timelineSteps = [{
    title: "The Interview",
    description: "Met a first-year with honesty and loyalty, but no guidance",
    year: "22 Aug 2025"
  }, {
    title: "The Planning",
    description: "Started planning informal gatherings to help students connect",
    year: "Sept 2025"
  }, {
    title: "First Meetup",
    description: "Students gathered for the first time together",
    year: "17 Oct 2025"
  }];
  return <section id="movement" className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4">
            <img src={bridgeIcon} alt="Bridge" className="w-16 h-16 mx-auto opacity-80" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              How it started
            </h2>
            <p className="text-lg text-muted-foreground">
              Every movement begins with a moment
            </p>
          </div>

          {/* Founder quote */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <blockquote className="relative space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">"One day I interviewed a hopeful third-year girl. She had honesty and loyalty written all over her smile, but she'd never been guided into events or leadership — she didn't even know they mattered. That moment stayed with me. I started Letz Connect so no student starts alone."</p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-warm" />
                <div>
                  <div className="font-semibold text-foreground">Manik</div>
                  <div className="text-sm text-muted-foreground">Builder, Letz Connect</div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-center">
              The Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timelineSteps.map((step, index) => <div key={index} className="relative group">
                  <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-hover transition-smooth hover-lift cursor-pointer">
                    <div className="text-4xl font-display font-bold text-primary mb-3">
                      {step.year}
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < timelineSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />}
                </div>)}
              
              {/* Future Vision - Adjacent to timeline */}
              <div className="relative group">
                <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-hover transition-smooth hover-lift">
                  <div className="text-4xl font-display font-bold text-primary mb-3">
                    →
                  </div>
                  <h4 className="font-semibold mb-2">The Future</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A place where every student get the guidance and help selflessly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};