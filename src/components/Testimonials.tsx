import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import { testimonials } from "./TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Feedbacks
            </h2>
            <p className="text-lg text-muted-foreground">
              All {testimonials.length} feedbacks from our amazing community members
            </p>
          </div>

          {/* Testimonials - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-card relative bg-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-hover transition-smooth flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <div className="relative space-y-4 flex-1 flex flex-col">
                  <p className="text-sm md:text-base leading-relaxed text-foreground/90 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4">
                    <img
                      src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff`}
                      alt={testimonial.name}
                      className={`w-12 h-12 rounded-full object-cover border-2 border-primary/20 ${
                        testimonial.name === "Sampark" 
                          ? "object-[center_20%]" 
                          : "object-top"
                      }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff`;
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                    </div>
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
