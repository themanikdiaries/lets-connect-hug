import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Join Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow these simple steps to become part of Letz Connect
            </p>
          </div>

          {/* Steps - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col"
                >
                  <div className="flex flex-col items-center text-center space-y-3 flex-1">
                    {/* Step number */}
                    <div className="text-sm font-bold text-primary">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base md:text-lg font-display font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* WhatsApp button for Step 1 */}
                    {index === 0 && (
                      <Button 
                        asChild 
                        className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white"
                        size="sm"
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
              );
            })}
              );
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
