import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import { testimonials } from "./TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Community Voices
            </h2>
            <p className="text-lg text-muted-foreground">
              All testimonials from our amazing community members
            </p>
          </div>

          {/* Testimonials - Masonry Grid */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-card relative bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-hover transition-smooth break-inside-avoid mb-6"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
                <div className="relative space-y-6">
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff`}
                      alt={testimonial.name}
                      className={`w-16 h-16 rounded-full object-cover border-2 border-primary/20 ${
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
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                    </div>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
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
