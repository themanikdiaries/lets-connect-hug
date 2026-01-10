import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import manikImg from "@/assets/members/manik.jpg";
import ayushImg from "@/assets/members/ayush.jpg";
import aryanImg from "@/assets/members/aryan.jpg";
import aashiImg from "@/assets/members/aashi.jpg";

const previewMembers = [
  {
    name: "Manik",
    graduationYear: "2027",
    branch: "B.Tech CSE",
    block: "10 - COE",
    linkedin: "https://www.linkedin.com/in/mrmanik/",
    twitter: "https://x.com/themanikdiaries",
    instagram: "https://www.instagram.com/manik.3000/",
    skills: "Community Building & Public Speaking",
    remarkable: "I am supporting women in tech with the help of Girls Leading Tech, a Pan India community.",
    imageUrl: manikImg
  },
  {
    name: "Shree Sharma",
    graduationYear: "2028",
    branch: "B.Tech CSE",
    block: "10 - COE",
    linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334",
    twitter: "https://x.com/shr14930?s=21",
    instagram: "https://www.instagram.com/shreesharma8937",
    skills: "Python | HTML | CSS | JavaScript | C programming | C++",
    remarkable: "I am Honest, positive and a very cheerful person.",
    imageUrl: ayushImg
  },
  {
    name: "Ishika Bains",
    graduationYear: "2028",
    branch: "B.Tech CSE",
    block: "10 - COE",
    linkedin: "https://www.linkedin.com/in/ishika-bains-699301378",
    instagram: "https://www.instagram.com/ishika.0412",
    skills: "C, C++, DSA, basics of python and HTML",
    remarkable: "I am curious and very confident.",
    imageUrl: aryanImg
  },
  {
    name: "Prabhjot Kaur",
    graduationYear: "2028",
    branch: "B.Tech CSE",
    block: "10 - COE",
    linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
    twitter: "https://x.com/Prabhjot1607",
    instagram: "https://www.instagram.com/prabhi_kaur786",
    skills: "C++ programming, Basic DSA",
    remarkable: "I am a sweet and positive person.",
    imageUrl: aashiImg
  }
];

export const MembersPreview = () => {
  const scrollToMembers = () => {
    const element = document.getElementById("members");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our Members
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet some of the incredible people who make Letz Connect special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewMembers.map((member, index) => (
              <Card
                key={index}
                className="animate-card group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift shadow-card bg-card"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover object-top border-4 border-primary/20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff`;
                      }}
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-display font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.branch}</p>
                    <p className="text-xs text-muted-foreground">Class of {member.graduationYear}</p>
                  </div>

                  <div className="flex justify-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToMembers}
              className="rounded-full gap-2"
            >
              See All Members
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
