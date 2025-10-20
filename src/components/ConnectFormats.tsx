import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import chatIcon from "@/assets/icon-chat.png";

interface ConnectFormatsProps {
  onJoinClick: () => void;
}

export const ConnectFormats = ({ onJoinClick }: ConnectFormatsProps) => {
  const formats = [
    {
      icon: chatIcon,
      title: "Friday Gatherings",
      description: "1:20pm to 1:50pm at Parivartan backstage",
      color: "secondary",
      details: "Weekly casual hangouts where we gather, share stories, and connect without pressure or expectations.",
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
              Join us every Friday for casual conversations and meaningful connections
            </p>
          </div>

          {/* Format cards */}
          <div className="max-w-2xl mx-auto">
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
                      <p className="text-lg font-medium text-primary">
                        {format.description}
                      </p>
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
