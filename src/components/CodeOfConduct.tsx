import { Card } from "@/components/ui/card";
import { Shield, Heart, Users, MessageCircle, Lock, AlertCircle } from "lucide-react";

export const CodeOfConduct = () => {
  const principles = [
    {
      icon: Heart,
      title: "Respect & Kindness",
      description: "Treat every member with respect, empathy, and kindness. We celebrate diversity and create a welcoming space for all."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Make everyone feel welcome regardless of their background, year, branch, or experience level. No one should feel left out."
    },
    {
      icon: MessageCircle,
      title: "Constructive Communication",
      description: "Share ideas openly and listen actively. Disagreements are fine, but always communicate with respect and understanding."
    },
    {
      icon: Lock,
      title: "Privacy & Confidentiality",
      description: "What's shared in the community stays in the community. Respect each other's privacy and personal boundaries."
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Zero tolerance for harassment, bullying, discrimination, or any behavior that makes others uncomfortable."
    },
    {
      icon: AlertCircle,
      title: "Active Participation",
      description: "Engage genuinely with the community. Attend gatherings when possible, contribute to discussions, and support fellow members."
    }
  ];

  return (
    <section id="conduct" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Code of Conduct
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community values and guidelines that help us create a safe, supportive, and inspiring space for everyone
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift shadow-card bg-card"
                >
                  <div className="p-6 space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-semibold">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
                </Card>
              );
            })}
          </div>

          {/* Additional note */}
          <Card className="bg-primary/5 border-primary/20 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-display font-semibold">
                Together We Grow
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                By being part of Letz Connect, you agree to uphold these values. If you witness or experience any violations, please reach out to the community builders. Let's create a space where everyone can thrive.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
