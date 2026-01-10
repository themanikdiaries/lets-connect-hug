import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, Search } from "lucide-react";
import manikImg from "@/assets/members/manik.jpg";
import ayushImg from "@/assets/members/ayush.jpg";
import aryanImg from "@/assets/members/aryan.jpg";
import aashiImg from "@/assets/members/aashi.jpg";
import himanshiImg from "@/assets/members/himanshi.jpg";
import guneetImg from "@/assets/members/guneet.jpg";
import divyanshuImg from "@/assets/members/divyanshu.jpg";
import mannatImg from "@/assets/members/mannat.jpg";
import harpreetImg from "@/assets/members/harpreet.jpg";
import akshatImg from "@/assets/members/akshat.jpg";
import mayankImg from "@/assets/members/mayank.jpg";
import ranvirImg from "@/assets/members/ranvir.jpg";
import shreyaImg from "@/assets/members/shreya.jpg";
import adityaImg from "@/assets/members/aditya.jpg";
import rahulImg from "@/assets/members/rahul.jpg";
import mishtiImg from "@/assets/members/mishti.jpg";
import swagitaImg from "@/assets/members/swagita.jpg";
import vinayakImg from "@/assets/members/vinayak.jpg";
import manmohanImg from "@/assets/members/manmohan.jpg";
import sharanImg from "@/assets/members/sharan.jpg";
import samparkImg from "@/assets/members/sampark.jpg";
import heenaImg from "@/assets/members/heena.jpg";
import himanshi2Img from "@/assets/members/himanshi2.jpg";

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
      imageUrl: ayushImg
    },
    {
      name: "Ishika Bains",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/ishika-bains-699301378",
      instagram: "https://www.instagram.com/ishika.0412",
      skills: "C, C++, DSA, Python, HTML",
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
      imageUrl: aashiImg
    },
    {
      name: "Shourya",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/shourya-singh-khatiyan",
      twitter: "https://x.com/Shouryakhatiyan",
      skills: "Data analysis, Model training, ML",
      imageUrl: himanshiImg
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
      imageUrl: guneetImg
    },
    {
      name: "Gulam Haider Ali",
      graduationYear: "2029",
      branch: "B.Tech CSE - IOT, Cyber Security and Blockchain",
      block: "9 - CEC",
      linkedin: "https://www.linkedin.com/in/haideralyy01",
      twitter: "https://x.com/haideralyy__",
      instagram: "https://www.instagram.com/haideralyy__",
      skills: "Coding and Management",
      imageUrl: divyanshuImg
    },
    {
      name: "Meenu Rani",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/meenu-rani",
      twitter: "https://x.com/MeenuRani2914",
      skills: "Technical and Communication, DSA in JAVA",
      imageUrl: mannatImg
    },
    {
      name: "Harpreet Kaur",
      graduationYear: "2028",
      branch: "B.Pharmacy",
      block: "8 - CCP",
      linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a",
      skills: "Communication",
      imageUrl: harpreetImg
    },
    {
      name: "Ayush Rawat",
      graduationYear: "2027",
      branch: "B.Tech - CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/ayush-rawat-b8412123a",
      twitter: "https://x.com/Ayushrwt_04",
      skills: "Web Developer, Frontend",
      imageUrl: akshatImg
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
      imageUrl: mayankImg
    },
    {
      name: "Ranvir Singh",
      graduationYear: "2028",
      branch: "B.Tech CSE - IOT",
      block: "2",
      linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
      instagram: "https://www.instagram.com/ranvir_singh_sodhi",
      skills: "Full Stack Development, AI, ML",
      imageUrl: ranvirImg
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
      imageUrl: shreyaImg
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
      imageUrl: adityaImg
    },
    {
      name: "Rahul",
      graduationYear: "2027",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/rahul-chhabra-336080296",
      instagram: "https://www.instagram.com/_rahul._.chhabra_",
      skills: "Problem Solving",
      imageUrl: rahulImg
    },
    {
      name: "Mishti Bansal",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/mishti-bansal-246a60344",
      instagram: "https://www.instagram.com/mishti_mithu_",
      skills: "Python, HTML, Java",
      imageUrl: mishtiImg
    },
    {
      name: "Swagita",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303",
      twitter: "https://twitter.com/Swag_with_techX",
      skills: "Web Development",
      imageUrl: swagitaImg
    },
    {
      name: "Vinayak Bansal",
      graduationYear: "2029",
      branch: "B.Tech IT",
      block: "9 - CEC",
      linkedin: "https://www.linkedin.com/in/vinayak-bansal-4a609238a",
      instagram: "https://www.instagram.com/vinayak._.bansall",
      skills: "Management",
      imageUrl: vinayakImg
    },
    {
      name: "Manmohan Singh",
      graduationYear: "2027",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/manmohan197814",
      twitter: "https://x.com/Manmohan197814",
      instagram: "https://www.instagram.com/manmohan141414",
      skills: "Blockchain Development, MERN Stack",
      imageUrl: manmohanImg
    },
    {
      name: "Sharan",
      graduationYear: "2028",
      branch: "B.Tech CSE IOT",
      block: "2",
      linkedin: "https://www.linkedin.com/in/sharan-arora-2020b3363",
      instagram: "https://www.instagram.com/not.ursam",
      skills: "Designing, Drawing",
      imageUrl: sharanImg
    },
    {
      name: "Sampark",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/sampark-sharma-9b0923335",
      twitter: "https://x.com/_sampark_",
      skills: "Social media management, Technology",
      imageUrl: samparkImg
    },
    {
      name: "Heena",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/heena-batra-35a8bb346",
      twitter: "https://x.com/H242119619446",
      skills: "Time Management, Adaptability",
      imageUrl: heenaImg
    },
    {
      name: "Himanshi Sardana",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/himanshi-sardana-1842b1370",
      twitter: "https://x.com/HimanshiS786",
      skills: "Development",
      imageUrl: himanshi2Img
    },
    // New members from spreadsheet
    {
      name: "Sambhav Jain",
      graduationYear: "2028",
      branch: "B.Tech CSE(IOT)",
      block: "2",
      linkedin: "https://www.linkedin.com/in/sambhav-jain-b70494283",
      instagram: "https://www.instagram.com/sambhav3802",
      skills: "Good listener, Friendships",
      imageUrl: null
    },
    {
      name: "Suraj Kumar",
      graduationYear: "2028",
      branch: "B.Tech CSE(IOT)",
      block: "2",
      linkedin: "https://www.linkedin.com/in/suraj-kumar-kuswaha-40a375315",
      instagram: "https://www.instagram.com/iitianssuraj",
      skills: "C, C++, DSA, Python",
      imageUrl: null
    },
    {
      name: "Rishav Patiyal",
      graduationYear: "2028",
      branch: "B.Tech CSE IOT",
      block: "2",
      linkedin: "https://www.linkedin.com/in/rishav-patiyal-22b69b395",
      instagram: "https://www.instagram.com/rishav_patiyal_07",
      skills: "Good Listener, C++",
      imageUrl: null
    },
    {
      name: "Sashank Joshi",
      graduationYear: "2028",
      branch: "B.Tech AI&DS",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/sashank-joshi-a603a2321",
      instagram: "https://www.instagram.com/_sashank__",
      skills: "Web Development, Idea Strategist",
      imageUrl: null
    },
    {
      name: "Swayam Arora",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/swayam-arora-2b2806340",
      instagram: "https://www.instagram.com/samarora_1308",
      skills: "Coding and Marketing",
      imageUrl: null
    },
    {
      name: "Swayam Bhatia",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "COE",
      linkedin: "https://www.linkedin.com/in/swayam-bhatia-210177242",
      instagram: "https://www.instagram.com/human.who.travels",
      skills: "LinkedIn Ghostwriting, Freelancing",
      imageUrl: null
    },
    {
      name: "Paridhi Kaur",
      graduationYear: "2028",
      branch: "B.Tech AIDS",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/paridhi-kaur-94117230a",
      instagram: "https://www.instagram.com/kparidhii",
      skills: "Python, C++",
      imageUrl: null
    },
    {
      name: "Daksh Khaneja",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/daksh-khaneja-a034a0373",
      instagram: "https://www.instagram.com/dakshkhaneja_.45",
      skills: "Communication, Management, Web Dev, Branding",
      imageUrl: null
    },
    {
      name: "Gaurav Singh",
      graduationYear: "2027",
      branch: "B.Tech AI&DS",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/gaurav-singh-5392a7272",
      instagram: "https://www.instagram.com/justtgxurxv._",
      skills: "Hardworking, Dedicated",
      imageUrl: null
    },
    {
      name: "Aditya Pushpakar",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/aditya-pushpakar-609690323",
      instagram: "https://www.instagram.com/shotgunaditya",
      twitter: "https://x.com/Aditya23P005",
      skills: "Designing, Python, C++, Prompt Engineering",
      imageUrl: null
    },
    {
      name: "Parth Sahni",
      graduationYear: "2029",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/parth-sahni-7955a52b9",
      instagram: "https://www.instagram.com/parth_sahni_3556",
      skills: "Chess player, Learner",
      imageUrl: null
    },
    {
      name: "Ishita Mahajan",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10",
      linkedin: "https://www.linkedin.com/in/ishita-mahajan-522003377",
      instagram: "https://www.instagram.com/_ishitamahajan",
      skills: "Analytical skill",
      imageUrl: null
    },
    {
      name: "Divanshi Arora",
      graduationYear: "2029",
      branch: "B.Tech CSE",
      block: "9",
      linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373",
      instagram: "https://www.instagram.com/diva.nshi.arora",
      skills: "Public speaking, Anchoring, Communication",
      imageUrl: null
    },
    {
      name: "Lovneet Kaur",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/lovneet-kaur-255763346",
      instagram: "https://www.instagram.com/lovneet_kxur",
      skills: "Leadership, Discipline",
      imageUrl: null
    },
    {
      name: "Jyotika Mittal",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/jyotika-mittal-a2810332b",
      instagram: "https://www.instagram.com/_jyotika_28_",
      skills: "Technology, Community-building",
      imageUrl: null
    },
    {
      name: "Piyush Goyal",
      graduationYear: "2029",
      branch: "B.Tech IOT",
      block: "9",
      linkedin: "",
      instagram: "https://www.instagram.com/im_.piyush12",
      skills: "Cybersecurity",
      imageUrl: null
    },
    {
      name: "Jatin Guleria",
      graduationYear: "2029",
      branch: "B.Tech CSE DS",
      block: "9 - Applied Sciences",
      linkedin: "https://www.linkedin.com/in/jatin-guleria-693b75366",
      instagram: "https://www.instagram.com/guleria_jatin02",
      skills: "Python, C++ STL",
      imageUrl: null
    },
    {
      name: "Kanan Kango",
      graduationYear: "2027",
      branch: "B.Tech AIML",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282",
      instagram: "https://www.instagram.com/kanan_kango",
      skills: "React, TypeScript, Next.js, Python, AI, ML",
      imageUrl: null
    },
    {
      name: "Sahil Bansal",
      graduationYear: "2026",
      branch: "BCA",
      block: "6",
      linkedin: "https://www.linkedin.com/in/sahilb315",
      twitter: "https://x.com/Sahilbansall121",
      skills: "Backend & Systems",
      imageUrl: null
    },
    {
      name: "Harshita Joshi",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "3",
      linkedin: "https://www.linkedin.com/in/harshita-joshi-3623b0309",
      instagram: "https://www.instagram.com/harshi.hihihi",
      skills: "Keen learner, Photo editing",
      imageUrl: null
    },
    {
      name: "Purv Bansal",
      graduationYear: "2028",
      branch: "B.Tech CSE DS",
      block: "2 - CEC",
      linkedin: "https://www.linkedin.com/in/purv-bansal-22ba56306",
      instagram: "https://www.instagram.com/purvbansal9",
      skills: "Communication, Leadership",
      imageUrl: null
    },
    {
      name: "Aditya Aggarwal",
      graduationYear: "2028",
      branch: "B.Tech AI-DS",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/adityaagg0003",
      instagram: "https://www.instagram.com/pvt.aditya2006",
      skills: "Never gives up",
      imageUrl: null
    },
    {
      name: "Samridhi Gupta",
      graduationYear: "2027",
      branch: "B.Tech CSE",
      block: "3 - CEC",
      linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
      instagram: "https://www.instagram.com/samridhiii_gupta",
      skills: "Learning, Building, Innovating",
      imageUrl: null
    },
    {
      name: "Rishu Rana",
      graduationYear: "2029",
      branch: "B.Tech CSE",
      block: "10",
      linkedin: "https://www.linkedin.com/in/rishu-rana-32429a376",
      instagram: "https://www.instagram.com/snnowmannnn",
      skills: "Cybersecurity",
      imageUrl: null
    },
    {
      name: "Manthan Mishra",
      graduationYear: "2029",
      branch: "B.Tech CSE",
      block: "9 - CEC",
      linkedin: "https://www.linkedin.com/in/manthan-mishra-4bbb1837b",
      instagram: "https://www.instagram.com/_mishra_manthan",
      skills: "Willingness to learn",
      imageUrl: null
    },
    {
      name: "Kamakshi Sachdeva",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10",
      linkedin: "https://www.linkedin.com/in/kamakshi-sachdeva-3318a7325",
      twitter: "https://x.com/KamakshiSa49113",
      skills: "Tech enthusiast",
      imageUrl: null
    },
    {
      name: "Rohineet Kaur",
      graduationYear: "2028",
      branch: "B.Tech AI and DS",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/rohineet-kaur-419b52362/",
      instagram: "https://www.instagram.com/ruh_1524",
      skills: "ML deployment, Python",
      imageUrl: null
    },
    {
      name: "Yashika Kainth",
      graduationYear: "2027",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/yashika-kainth-69a0b1284",
      instagram: "https://www.instagram.com/_____yashika26",
      skills: "Cyber security, Digital forensics, OSINT, Pen testing",
      imageUrl: null
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
              Meet all {members.length} incredible people who make Letz Connect special
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
                      src={member.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=128`}
                      alt={member.name}
                      className={`w-32 h-32 rounded-full object-cover border-4 border-primary/20 ${
                        member.name === "Mishti Bansal" || member.name === "Sampark" 
                          ? "object-[center_20%]" 
                          : "object-top"
                      }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=128`;
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
