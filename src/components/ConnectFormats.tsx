import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, MessageCircle, Zap, Users } from "lucide-react";
import coffeeIcon from "@/assets/icon-coffee.png";
import chatIcon from "@/assets/icon-chat.png";
import buildIcon from "@/assets/icon-build.png";

interface ConnectFormatsProps {
  onJoinClick: () => void;
}

export const ConnectFormats = ({ onJoinClick }: ConnectFormatsProps) => {
  const formats = [
    {
      icon: coffeeIcon,
      title: "Coffee Connects",
      description: "15 minutes, once a month. Quick chats, big comfort.",
      color: "primary",
      details: "One-on-one meetups over coffee. Share experiences, ask questions, or just chat about life on campus.",
    },
    {
      icon: chatIcon,
      title: "Unfiltered Fridays",
      description: "No agenda. Just stories, chai, and company.",
      color: "secondary",
      details: "Weekly casual hangouts where we gather, share stories, and connect without pressure or expectations.",
    },
    {
      icon: buildIcon,
      title: "Build Sprints",
      description: "1-week crash projects to learn with friends.",
      color: "accent",
      details: "Collaborative mini-projects where you team up, build something real, and learn by doing together.",
    },
    {
      icon: null,
      title: "Micro Mentorship Circles",
      description: "Small cohorts that meet twice a month.",
      color: "primary",
      details: "Intimate groups of 4-6 students for deeper conversations, ongoing support, and lasting friendships.",
      lucideIcon: Users,
    },
  ];

  return (
    <section id="formats" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What we do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple ways to connect, learn, and grow together
            </p>
          </div>

          {/* Format cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((format, index) => {
              const LucideIcon = format.lucideIcon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift cursor-pointer shadow-card bg-card"
                >
                  <div className="p-8 space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      {format.icon ? (
                        <img
                          src={format.icon}
                          alt={format.title}
                          className="w-10 h-10"
                        />
                      ) : LucideIcon ? (
                        <LucideIcon className="w-10 h-10 text-primary" />
                      ) : null}
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-semibold">
                        {format.title}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {format.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {format.details}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      onClick={onJoinClick}
                      className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    >
                      Join this format
                    </Button>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
