import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { TIMELINE_IMAGES } from "./Timeline";

// Use timeline images for the gallery carousel
export const GALLERY_ITEMS = TIMELINE_IMAGES.map((image, index) => ({
  id: index + 1,
  image,
}));

export const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
              <div className="flex gap-4">
                {GALLERY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-[280px] md:w-[320px]"
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-smooth">
                      <img
                        src={item.image}
                        alt={`Letz Connect Moment ${item.id}`}
                        className="w-full h-48 object-cover"
                      />
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
