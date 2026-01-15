import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { BookOpen, FileText, Video, Link as LinkIcon } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  Resources
                </h1>
                <p className="text-lg text-muted-foreground">
                  Learning materials and helpful resources for our community
                </p>
              </div>

              {/* Coming Soon Card */}
              <Card className="p-12 text-center bg-gradient-sunset">
                <div className="space-y-6">
                  <div className="flex justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <LinkIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-display font-bold">
                      Will Be Added Soon
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're curating amazing resources for our community. Stay tuned for learning materials, guides, tutorials, and more!
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Have suggestions for resources? Let us know in the community!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ResourcesPage;
