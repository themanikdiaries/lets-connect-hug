import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Gallery } from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;
