import chatIcon from "@/assets/icon-chat.webp";
import coffeeIcon from "@/assets/icon-coffee.webp";
import { Clock } from "lucide-react";

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
            
            {/* Contact for meetup location */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">1:20pm to 1:50pm</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="text-sm font-medium">💬 Join our WhatsApp group and tag an admin to enquire about the meetup location</span>

            </div>
          </div>

          {/* Format cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formats.map((format, index) => {
              return (
                <div
                  key={index}
                  className="relative glass-card rounded-2xl p-6 md:p-8 overflow-hidden card-3d group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <img
                      src={format.icon}
                      alt={format.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {format.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {format.details}
                  </p>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer rounded-2xl pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
