import { TIMELINE_IMAGES } from "./Timeline";

export const GallerySlideshow = () => {
  // Split images into two rows
  const firstRowImages = TIMELINE_IMAGES.slice(0, Math.ceil(TIMELINE_IMAGES.length / 2));
  const secondRowImages = TIMELINE_IMAGES.slice(Math.ceil(TIMELINE_IMAGES.length / 2));

  return (
    <section className="py-12 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="space-y-4">
        {/* First row - scrolling right */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-right">
            {[...firstRowImages, ...firstRowImages].map((image, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-2xl overflow-hidden glass-card"
              >
                <img
                  src={image}
                  alt={`Letz Connect moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling left */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-left">
            {[...secondRowImages, ...secondRowImages].map((image, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-2xl overflow-hidden glass-card"
              >
                <img
                  src={image}
                  alt={`Letz Connect moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};