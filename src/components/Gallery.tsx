import { TIMELINE_IMAGES } from "./Timeline";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our Moments
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete gallery of our community gatherings - Don't miss out!
            </p>
          </div>

          {/* Collage Grid - FOMO inducing layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {TIMELINE_IMAGES.map((image, index) => {
              // Create varied sizes for collage effect
              const isLarge = index % 7 === 0;
              const isMedium = index % 5 === 0 && !isLarge;
              
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg group cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105 ${
                    isLarge 
                      ? "col-span-2 row-span-2" 
                      : isMedium 
                        ? "col-span-2 md:col-span-1" 
                        : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Letz Connect Moment ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLarge 
                        ? "h-64 md:h-80" 
                        : isMedium 
                          ? "h-40 md:h-48" 
                          : "h-32 md:h-40"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* FOMO message */}
          <div className="text-center py-8 bg-gradient-sunset rounded-2xl">
            <p className="text-lg font-medium text-foreground">
              🎉 Join us and be part of these amazing moments!
            </p>
            <p className="text-muted-foreground mt-2">
              New memories are made every week at Letz Connect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
