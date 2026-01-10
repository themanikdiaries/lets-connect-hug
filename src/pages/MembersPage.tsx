import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WallOfMembers } from "@/components/WallOfMembers";

const MembersPage = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <WallOfMembers />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MembersPage;
