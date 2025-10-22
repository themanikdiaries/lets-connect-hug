import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, Search } from "lucide-react";

export const WallOfMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
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
      imageUrl: "https://drive.google.com/uc?export=view&id=1sHV7dTd4L0ZA8ayoFxrfJyUX2otQbRRo"
    },
    {
      name: "Shree Sharma",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334",
      twitter: "https://x.com/shr14930?s=21",
      instagram: "https://www.instagram.com/shreesharma8937",
      skills: "Python | HTML | CSS | JavaScript | C programming | C++ | Communication",
      remarkable: "I am Honest, positive and a very cheerful person.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1C4edw3K_DMzQTjKl7HQnuwpRTpyhie68"
    },
    {
      name: "Ishika Bains",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/ishika-bains-699301378",
      instagram: "https://www.instagram.com/ishika.0412?igsh=emJta3hqbHB4MHpy",
      skills: "C, C++, DSA, basics of python and HTML | good communication skills, positive and adaptable mindset, self motivated and responsible",
      remarkable: "I am curious and very confident.",
      imageUrl: "https://drive.google.com/uc?export=view&id=12yZ8Yr23Yg1nAf1UKqIcGNusHCnyNN4k"
    },
    {
      name: "Prabhjot Kaur",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
      twitter: "https://x.com/Prabhjot1607",
      instagram: "https://www.instagram.com/prabhi_kaur786",
      skills: "C++ programming, Basic DSA | positive attitude, Good Listener and communicator, Best adviser, hardworking",
      remarkable: "I am a sweet and positive person.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1LZevoHDE2Q7gqOGaf_GDwipDu1WgI4sr"
    },
    {
      name: "Shourya",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/shourya-singh-khatiyan",
      twitter: "https://x.com/Shouryakhatiyan",
      skills: "data analysis, model training",
      remarkable: "I am a ML Developer",
      imageUrl: "https://drive.google.com/uc?export=view&id=1OxEys3ctFMNE8wY92kZpKDMdwsse3dpY"
    },
    {
      name: "Shinu Verma",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/shinu-verma-4678432a2",
      twitter: "https://x.com/Shinuverma_",
      instagram: "https://www.instagram.com/shinuverma___",
      skills: "Blockchain Developer",
      remarkable: "I love to Explore",
      imageUrl: "https://drive.google.com/uc?export=view&id=1kBnG_kBSf8vPikVilSaJ5m9nP4DmHaO-"
    },
    {
      name: "Gulam Haider Ali",
      graduationYear: "2029",
      branch: "B.Tech CSE - IOT, Cyber Security and Blockchain",
      block: "9 - CEC",
      linkedin: "www.linkedin.com/in/haideralyy01",
      twitter: "https://x.com/haideralyy__?t=a17NDOlEdv-MSHggXh7wig&s=09",
      instagram: "https://www.instagram.com/haideralyy__?igsh=MXFzNzNuamVqczM2bQ==",
      skills: "Coding and Management",
      remarkable: "I know how to lead teams.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KYDEqca45rrUeW-JIX_l-YoELDFVNupk"
    },
    {
      name: "Meenu Rani",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/meenu-rani-9894a4327",
      skills: "DSA in JAVA",
      remarkable: "I am a public speaker",
      imageUrl: "https://drive.google.com/uc?export=view&id=1wzHVO7GOjt3EfqNuIZnGdNKgI8oAAKRr"
    },
    {
      name: "Harpreet Kaur",
      graduationYear: "2028",
      branch: "B.Pharmacy",
      block: "8 - CCP",
      linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      skills: "Communication",
      remarkable: "I am a fast leaner",
      imageUrl: "https://drive.google.com/uc?export=view&id=1b5aYkNDj5d6MUgnUnf1Tzj21DVCPcJ5P"
    },
    {
      name: "Ayush Rawat",
      graduationYear: "2027",
      branch: "B.Tech - CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/ayush-rawat-b8412123a",
      twitter: "https://x.com/Ayushrwt_04",
      skills: "Web Developer",
      remarkable: "I am a very good frontend developer.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1xOw_8NMmy6gxlgG9LMZGlTfHNtLjeEuc"
    },
    {
      name: "Ayush Chugh",
      graduationYear: "2028",
      branch: "B.Tech - CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/aayushchugh",
      twitter: "https://x.com/aayushchugh_x",
      instagram: "https://www.instagram.com/aayushchugh",
      skills: "Web Development, MERN Stack",
      remarkable: "I have 5000 followers on twitter.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1DOKsYK1PkzdwzeoaBDjqc7sphiwufiSw"
    },
    {
      name: "Ranvir Singh",
      graduationYear: "2028",
      branch: "B.Tech CSE - IOT",
      block: "2",
      linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
      instagram: "https://www.instagram.com/ranvir_singh_sodhi",
      skills: "Full Stack Development, AI, ML",
      remarkable: "I have lead teams as a CTO.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1h4E1DIYzsRytVug7F8Pm1hsrtFKGXQg7"
    },
    {
      name: "Shreya",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/shreya-chachra-2a5749322",
      twitter: "https://x.com/shreya27chachra",
      instagram: "https://www.instagram.com/shreya27chachra",
      skills: "Public Speaking, Management",
      remarkable: "I am a very confident Person.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1ct1x6Rsm8K_4xdZk4AEgPiJ90YFa7Jne"
    },
    {
      name: "Aditya Pant",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/adityaapant",
      twitter: "https://x.com/adityapant_",
      instagram: "https://www.instagram.com/adityapant_",
      skills: "Web Development",
      remarkable: "I am curios and love coding.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1x7ue7esghIxzyWu7Z03JXY-wRE-W-tth"
    },
    {
      name: "Rahul",
      graduationYear: "2027",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/rahul-chhabra-336080296",
      instagram: "https://www.instagram.com/_rahul._.chhabra_",
      skills: "Problem Solving",
      remarkable: "I founded Devantra Community",
      imageUrl: "https://drive.google.com/uc?export=view&id=1Klp7hAeB9_0mg3eyOCOahguhsfV4hBwH"
    },
    {
      name: "Mishti Bansal",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/mishti-bansal-246a60344",
      instagram: "https://www.instagram.com/mishti_mithu_",
      skills: "Python, HTML, Currently working on Java",
      remarkable: "I am good in communication and have a growth mindset.",
      imageUrl: "https://drive.google.com/uc?export=view&id=13CKuhm83NCFTMicoXheaASTPwYW477PB"
    }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.skills?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.branch.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            
            {/* Search bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search members by name, skills, or branch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <Card
                key={index}
                className="animate-card group relative overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all hover-lift shadow-card bg-card"
              >
                <div className="p-6 space-y-4">
                  {/* Profile image */}
                  <div className="flex justify-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150/6366f1/ffffff?text=' + member.name.charAt(0);
                      }}
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
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
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
