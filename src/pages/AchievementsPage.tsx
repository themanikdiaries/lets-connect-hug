import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Trophy, Award, Star, Building2, Briefcase } from "lucide-react";

// Import member images
import ishitaImg from "@/assets/members/ishita.jpg";
import samparkImg from "@/assets/members/sampark.jpg";
import jyotikaImg from "@/assets/members/jyotika.jpg";
import parthImg from "@/assets/members/parth.jpg";
import jatinImg from "@/assets/members/jatin.jpg";
import lovneetImg from "@/assets/members/lovneet.jpg";
import rahulImg from "@/assets/members/rahul.jpg";
import adityaImg from "@/assets/members/aditya.jpg";
import shreeImg from "@/assets/members/shree.jpg";

interface Achievement {
  names: string[];
  achievement: string;
  images: string[];
  icon: React.ElementType;
  category: string;
}

const AchievementsPage = () => {
  const achievements: Achievement[] = [
    {
      names: ["Sampark", "Shree", "Aditya", "Ishika"],
      achievement: "Got into the core team of Google Developer Groups on Campus.",
      images: [samparkImg, shreeImg, adityaImg, ishitaImg],
      icon: Star,
      category: "GDG on Campus",
    },
    {
      names: ["Parth", "Jatin"],
      achievement: "Became core team members of AWS Cloud Clubs.",
      images: [parthImg, jatinImg],
      icon: Building2,
      category: "AWS Cloud Clubs",
    },
    {
      names: ["Lovneet", "Ishita", "Shree"],
      achievement: "Became Campus Ambassadors of Innovation Mission Punjab.",
      images: [lovneetImg, ishitaImg, shreeImg],
      icon: Award,
      category: "Innovation Mission Punjab",
    },
    {
      names: ["Ishita"],
      achievement: "Got into D4 as a Co Campus Lead and Campus Ambassador at Innovation Mission Punjab.",
      images: [ishitaImg],
      icon: Trophy,
      category: "D4 & IMP",
    },
    {
      names: ["Jyotika"],
      achievement: "Became the GeeksforGeeks Campus Mantri of our college.",
      images: [jyotikaImg],
      icon: Award,
      category: "GeeksforGeeks",
    },
    {
      names: ["Rahul"],
      achievement: "Officially registered his company - Devantra Innovations.",
      images: [rahulImg],
      icon: Briefcase,
      category: "Entrepreneurship",
    },
  ];

  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  🏆 Achievements
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Celebrating the milestones and successes of our amazing community members
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg overflow-hidden"
                    >
                      {/* Category badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      {/* Member Images */}
                      <div className="flex -space-x-3 mb-4">
                        {item.images.filter(img => img).map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-12 h-12 rounded-full overflow-hidden border-2 border-background"
                          >
                            <img
                              src={img}
                              alt={item.names[imgIndex] || "Member"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Names */}
                      <h3 className="text-lg font-display font-semibold mb-2">
                        {item.names.join(", ")}
                      </h3>

                      {/* Achievement description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.achievement}
                      </p>

                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AchievementsPage;
