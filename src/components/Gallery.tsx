import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

import galleryImage from "@/assets/first-gathering.jpg";

const GALLERY_ITEMS = [
  {
    id: 1,
    caption: "First Friday Gathering - 17 Oct 2025",
    description: "Our first ever gathering at Parivartan backstage",
    image: galleryImage,
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Moments
            </h2>
            <p className="text-lg text-muted-foreground">
              Capturing the warmth of our community
            </p>
          </div>

          {/* Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {GALLERY_ITEMS.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-smooth">
                    {/* Image */}
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="aspect-square object-cover w-full"
                      />
                    ) : (
                      <div className="aspect-square bg-gradient-warm" />
                    )}
                    
                    {/* Caption */}
                    <div className="p-4 space-y-1">
                      <h3 className="font-semibold">{item.caption}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Video placeholder */}
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden rounded-3xl shadow-card">
              <div className="aspect-video bg-gradient-campus flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1" />
                  </div>
                  <p className="text-white font-medium">
                    Watch our community story (30s)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
