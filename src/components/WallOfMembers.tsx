import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export const WallOfMembers = () => {
  const members = [
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
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFFRI1-_yIGEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721867786956?e=1762387200&v=beta&t=mRoPXoweuENeXuG8jzKzKDblbq2KUTqgNFmlNTcMbkg"
    }
  ];

  return (
    <section id="members" className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Wall of Members
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the incredible people who make Letz Connect special
            </p>
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift shadow-card bg-card"
              >
                <div className="p-6 space-y-4">
                  {/* Profile image */}
                  <div className="flex justify-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>

                  {/* Member details */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-display font-semibold">
                      {member.name}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{member.branch}</p>
                      <p>Graduation: {member.graduationYear}</p>
                      <p>Block: {member.block}</p>
                    </div>
                    {member.skills && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-foreground">Skills</p>
                        <p className="text-sm text-muted-foreground">{member.skills}</p>
                      </div>
                    )}
                    {member.remarkable && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-foreground">I'm Remarkable Because</p>
                        <p className="text-sm text-muted-foreground italic">{member.remarkable}</p>
                      </div>
                    )}
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
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
