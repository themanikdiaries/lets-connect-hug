import { Trophy, Award, Star, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ishitaImg from "@/assets/members/ishita.jpg";
import samparkImg from "@/assets/members/sampark.jpg";
import jyotikaImg from "@/assets/members/jyotika.jpg";
import rahulImg from "@/assets/members/rahul.jpg";

interface Achievement {
  names: string[];
  achievement: string;
  images: string[];
  icon: React.ElementType;
  category: string;
}

export const Achievements = () => {
  // Show only 3 featured achievements on homepage
  const featuredAchievements: Achievement[] = [
    {
      names: ["Sampark", "Shree", "Aditya", "Ishika"],
      achievement: "Got into the core team of Google Developer Groups on Campus.",
      images: [samparkImg],
      icon: Star,
      category: "GDG on Campus",
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
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              🏆 Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the milestones and successes of our amazing members
            </p>
          </div>

          {/* Achievement cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredAchievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 overflow-hidden"
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

                  {/* Member Image */}
                  <div className="flex -space-x-3 mb-4">
                    {item.images.map((img, imgIndex) => (
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

          {/* View All Button */}
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/achievements">View All Achievements</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
