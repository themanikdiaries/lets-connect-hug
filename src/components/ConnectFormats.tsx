import { Card } from "@/components/ui/card";
import chatIcon from "@/assets/icon-chat.png";
import coffeeIcon from "@/assets/icon-coffee.png";
import { MapPin, Clock } from "lucide-react";

interface ConnectFormatsProps {
  onJoinClick: () => void;
}

export const ConnectFormats = ({ onJoinClick }: ConnectFormatsProps) => {
  const formats = [
    {
      icon: chatIcon,
      title: "Friday Networking Gatherings",
      color: "secondary",
      details: "Weekly casual hangouts where we gather, share stories, and connect without pressure or expectations.",
    },
    {
      icon: coffeeIcon,
      title: "Public Speaking Circles",
      color: "primary",
      details: "We make you confident, a good speaker, teach you how to speak and turn yourself into a leader.",
    },
    {
      icon: chatIcon,
      title: "Weekly Wednesday Session",
      color: "accent",
      details: "A member of our community takes an informal session and guides others by sharing their experience, mistakes and learnings.",
    },
  ];

  return (
    <section id="formats" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What we do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for casual conversations and meaningful connections
            </p>
            
            {/* Common Location and Time */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">At Parivartan Ground in front of Basketball Court</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">1:20pm to 1:50pm</span>
              </div>
            </div>
          </div>

          {/* Format cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formats.map((format, index) => {
              return (
                <Card
                  key={index}
                  className="animate-card group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift cursor-pointer shadow-card bg-card"
                >
                  <div className="p-8 space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <img
                        src={format.icon}
                        alt={format.title}
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-semibold">
                        {format.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {format.details}
                      </p>
                    </div>

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
