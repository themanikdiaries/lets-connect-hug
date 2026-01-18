import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import ishitaImg from "@/assets/members/ishita.jpg";

interface Achievement {
  name: string;
  achievement: string;
  image: string;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      name: "Ishita",
      achievement: "Got into D4 as a Co Campus Lead and Campus Ambassador at Innovation Mission Punjab.",
      image: ishitaImg,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift cursor-pointer shadow-card bg-card"
              >
                <div className="p-6 space-y-4">
                  {/* Member Image */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 text-primary">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-medium">Achievement</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievement description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.achievement}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
