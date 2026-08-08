import { Card } from "@/components/ui/card";
import { Linkedin, Instagram, Crown } from "lucide-react";

import divanshiImg from "@/assets/members/divanshi.webp";
import ranvirImg from "@/assets/members/ranvir.webp";
import jatinImg from "@/assets/members/jatin.webp";
import harshImg from "@/assets/members/harsh.webp";

const council = [
  {
    name: "Divanshi Arora",
    role: "Voice & Culture",
    branch: "B.Tech CSE · Class of 2029",
    note: "Carrying the voice of Letz Connect forward — anchoring, speaking, and keeping the culture warm.",
    linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373",
    instagram: "https://www.instagram.com/diva.nshi.arora",
    imageUrl: divanshiImg,
  },
  {
    name: "Ranvir Singh",
    role: "Tech & Builders",
    branch: "B.Tech CSE - IOT · Class of 2028",
    note: "Leading the builder side of the vision — turning ideas into things people can actually use.",
    linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
    instagram: "https://www.instagram.com/ranvir_singh_sodhi",
    imageUrl: ranvirImg,
  },
  {
    name: "Jatin Guleria",
    role: "Community & Growth",
    branch: "B.Tech CSE DS · Class of 2029",
    note: "Growing the circle — making sure every new person finds a place to belong.",
    linkedin: "https://www.linkedin.com/in/jatin-guleria-693b75366",
    instagram: "https://www.instagram.com/guleria_jatin02",
    imageUrl: jatinImg,
  },
];

export const LeadershipCouncil = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Crown className="w-4 h-4" />
              Carrying the legacy forward
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              The Leadership Council
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people entrusted with leading the vision of Letz Connect — so the
              community outlives any one batch and becomes a legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {council.map((person) => (
              <Card
                key={person.name}
                className="animate-card relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card/60 backdrop-blur-sm shadow-card p-8 text-center space-y-5"
              >
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-sunset blur-md opacity-70" />
                    <img
                      src={person.imageUrl}
                      alt={`${person.name} — ${person.role} at Letz Connect`}
                      loading="lazy"
                      className="relative w-28 h-28 rounded-full object-cover object-top border-4 border-background"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-display font-semibold">{person.name}</h3>
                  <p className="text-sm font-medium text-primary">{person.role}</p>
                  <p className="text-xs text-muted-foreground">{person.branch}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{person.note}</p>

                <div className="flex justify-center gap-2">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on Instagram`}
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
