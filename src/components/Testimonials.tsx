import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Manik",
      quote: "I loved the energy and curiosity to learn from each other in all the 23 students who joined us. Can't wait for the next gatherings where we can do alot of fun activities and exchange our knowledge and values.",
      linkedin: "https://www.linkedin.com/in/mrmanik/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFFRI1-_yIGEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721867786956?e=1762387200&v=beta&t=mRoPXoweuENeXuG8jzKzKDblbq2KUTqgNFmlNTcMbkg"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Member Voices
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our community members
            </p>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-hover transition-smooth"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
                <div className="relative space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
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
