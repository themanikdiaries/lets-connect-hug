import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const GALLERY_ITEMS = [
  {
    id: 1,
    caption: "Unfiltered Friday — chai, stories, and laughter",
    description: "Weekly casual hangout at the campus café",
  },
  {
    id: 2,
    caption: "First Build Sprint completion",
    description: "Team celebrating their first shipped project",
  },
  {
    id: 3,
    caption: "Coffee Connect in action",
    description: "A junior and senior chatting over coffee",
  },
  {
    id: 4,
    caption: "Micro Mentorship Circle meetup",
    description: "Small group deep conversation session",
  },
  {
    id: 5,
    caption: "Community gathering",
    description: "Monthly all-hands meetup with the whole community",
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
                    {/* Placeholder for image */}
                    <div className="aspect-square bg-gradient-warm" />
                    
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
