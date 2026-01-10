import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Testimonials } from "@/components/Testimonials";

const TestimonialsPage = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TestimonialsPage;
