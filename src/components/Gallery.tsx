import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

import firstGathering from "@/assets/first-gathering.jpg";
import meetup3 from "@/assets/meetup-3.jpg";

const GALLERY_ITEMS = [
  {
    id: 1,
    caption: "First Friday Gathering - 17 Oct 2025",
    description: "Our first ever gathering at Parivartan backstage",
    image: firstGathering,
  },
  {
    id: 3,
    caption: "Third Friday Gathering - 31 Oct 2025",
    description: "Growing together as a community",
    image: meetup3,
  },
  {
    id: 4,
    caption: "Fourth Friday Gathering - 3 Nov 2025",
    description: "Continuing our journey of connection and growth",
    image: meetup3,
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <Card key={item.id} className="animate-card overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-smooth">
                {/* Image */}
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-warm" />
                )}
                
                {/* Caption */}
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{item.caption}</h3>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
