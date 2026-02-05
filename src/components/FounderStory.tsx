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
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              How it started
            </h2>
            <p className="text-lg text-muted-foreground">
              Every movement begins with a moment
            </p>
          </div>

          {/* Founder quote */}
          <div className="relative glass-card rounded-3xl p-6 md:p-10 shadow-card">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <blockquote className="relative space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-foreground/90">I was invited to conduct interviews for a new club being opened in another department, alongside Aashi, a friend of mine who is both talented and kind. There were several students, and we interviewed them one by one. When a girl's turn came, I can't recall her name or her college year, but what I do remember, and can't forget, was her innocent face, her pure smile, that spark of hope about being selected, and her honesty. I asked about her experience in management. She said she didn't have any. Then I asked about her strengths, and she replied, "Honesty and loyalty." It was one of the rarest answers I heard that day. I told her, "You don't have enough experience or skills that would make you a strong candidate for this role. There are already many candidates with more experience and a stronger skill set." Then I asked, "Why haven't you taken part in any event previously, and why do you want to join this club now?"</p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/90">She said she didn't know that events are important for building confidence and leadership skills, which are valuable later during interviews. No one had been there to guide her in the first place, and maybe she wasn't brave enough to seek guidance herself. I knew she wasn't the best candidate for the role, but she was a wonderful human being. That smile she gave when we concluded the interview stayed with me for a long time. I couldn't get over it. I thought, what if there was something that could help first-year students from the beginning, a place where people could connect, learn, and maybe build something together while making friends?</p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/90">
                And that's how it was born. Let's see how it goes.
              </p>
              <footer className="flex items-center gap-4 mt-8">
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
            <h3 className="text-xl font-display font-semibold text-center">
              The Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timelineSteps.map((step, index) => <div key={index} className="relative">
                  <div className="glass-card rounded-2xl p-5 h-full">
                    <div className="text-2xl font-display font-bold text-primary mb-2">
                      {step.year}
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < timelineSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />}
                </div>)}
              
              {/* Future Vision - Adjacent to timeline */}
              <div className="relative">
                <div className="glass-card rounded-2xl p-5 h-full">
                  <div className="text-2xl font-display font-bold text-primary mb-2">
                    →
                  </div>
                  <h4 className="font-semibold text-sm mb-1">The Future</h4>
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