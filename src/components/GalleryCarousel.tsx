import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import firstGathering from "@/assets/first-gathering.jpg";
import meetup3 from "@/assets/meetup-3.jpg";

export const GALLERY_ITEMS = [
  {
    id: 1,
    caption: "First Gathering - 17 Oct 2025",
    description: "Our first ever gathering at Parivartan backstage",
    image: firstGathering,
  },
  {
    id: 2,
    caption: "Second Gathering - 27 Oct 2025",
    description: "Building connections and sharing experiences",
    image: meetup3,
  },
  {
    id: 3,
    caption: "Third Gathering - 31 Oct 2025",
    description: "Growing together as a community",
    image: meetup3,
  },
  {
    id: 4,
    caption: "Fourth Gathering - 3 Nov 2025",
    description: "Continuing our journey of connection and growth",
    image: meetup3,
  },
];

export const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Moments
            </h2>
            <p className="text-lg text-muted-foreground">
              Capturing the warmth of our community
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {GALLERY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)]"
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-smooth">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6 space-y-2">
                        <h3 className="text-xl font-semibold">{item.caption}</h3>
                        <p className="text-base text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full hidden md:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full hidden md:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full"
            >
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>View All Photos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
