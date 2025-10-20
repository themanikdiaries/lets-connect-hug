import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, FileText, CheckCircle, AlertTriangle } from "lucide-react";

export const JoinUs = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Join the Waiting Area WhatsApp Group",
      description: "Connect with us and stay updated about upcoming gatherings",
      step: "Step 1"
    },
    {
      icon: Users,
      title: "Join one of our In-person gathering on Friday",
      description: "Experience the community firsthand at our weekly Friday gatherings",
      step: "Step 2"
    },
    {
      icon: FileText,
      title: "Fill the Airtable form to get featured in directory and website",
      description: "Share your details to become an official member of our community",
      step: "Step 3"
    },
    {
      icon: CheckCircle,
      title: "Welcome to Letz Connect",
      description: "You're now part of the community! Start connecting and growing together",
      step: "Step 4"
    }
  ];

  return (
    <section id="join" className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Join Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow these simple steps to become part of Letz Connect
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="animate-card group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift shadow-card bg-card"
                >
                  <div className="p-6 md:p-8 flex items-start gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="text-sm font-semibold text-primary">
                        {step.step}
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      {index === 0 && (
                        <Button 
                          asChild 
                          className="mt-4"
                        >
                          <a 
                            href="https://chat.whatsapp.com/Kk66jdyr6RI4zlRhgqcnbe?mode=wwt" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Join WhatsApp Group
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
                </Card>
              );
            })}
          </div>

          {/* Important note */}
          <Card className="bg-destructive/10 border-destructive/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-semibold text-destructive">Important Note</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  If any step is missed, that person would be removed from the community and would not be considered to be part of the community. We maintain this process to ensure an engaged and committed member base.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
