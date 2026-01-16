import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, Search, MapPin } from "lucide-react";
import manikImg from "@/assets/members/manik.jpg";
import ayushImg from "@/assets/members/ayush.jpg";
import aryanImg from "@/assets/members/aryan.jpg";
import himanshiImg from "@/assets/members/himanshi.jpg";
import guneetImg from "@/assets/members/guneet.jpg";
import divyanshuImg from "@/assets/members/divyanshu.jpg";
import harpreetImg from "@/assets/members/harpreet-new.jpg";
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
import sambhavImg from "@/assets/members/sambhav.jpg";
import surajImg from "@/assets/members/suraj.jpg";
import rishavImg from "@/assets/members/rishav.jpg";
import sashankImg from "@/assets/members/sashank.jpg";
import swayamAroraImg from "@/assets/members/swayam-arora.jpg";
import swayamBhatiaImg from "@/assets/members/swayam-bhatia.jpg";
import paridhiImg from "@/assets/members/paridhi.jpg";
import dakshImg from "@/assets/members/daksh.jpg";
import gauravImg from "@/assets/members/gaurav.jpg";
import adityaPushpakarImg from "@/assets/members/aditya-pushpakar.jpg";
import parthImg from "@/assets/members/parth.jpg";
import ishitaImg from "@/assets/members/ishita.jpg";
import divanshiImg from "@/assets/members/divanshi.jpg";
import lovneetImg from "@/assets/members/lovneet.jpg";
import meenuImg from "@/assets/members/meenu.jpg";
import jyotikaImg from "@/assets/members/jyotika.jpg";
import piyushImg from "@/assets/members/piyush.jpg";
import jatinImg from "@/assets/members/jatin.jpg";
import kananImg from "@/assets/members/kanan.jpg";
import sahilImg from "@/assets/members/sahil.jpg";
import harshitaImg from "@/assets/members/harshita.jpg";
import purvImg from "@/assets/members/purv.jpg";
import adityaAggarwalImg from "@/assets/members/aditya-aggarwal.jpg";
import samridhiImg from "@/assets/members/samridhi.jpg";
import rishuImg from "@/assets/members/rishu.jpg";
import manthanImg from "@/assets/members/manthan.jpg";
import kamakshiImg from "@/assets/members/kamakshi.jpg";
import rohineetImg from "@/assets/members/rohineet.jpg";
import yashikaImg from "@/assets/members/yashika.jpg";
import mannatImg from "@/assets/members/mannat.jpg";
import kushalImg from "@/assets/members/kushal.jpg";
import chiragImg from "@/assets/members/chirag.jpg";
import sarangImg from "@/assets/members/sarang.jpg";
import aashiImg from "@/assets/members/aashi.jpg";
import vrindaImg from "@/assets/members/vrinda.jpg";
import aksheetaImg from "@/assets/members/aksheeta.jpg";

export const WallOfMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const members = [
    { name: "Manik", graduationYear: "2027", branch: "B.Tech CSE", block: "10 - COE", location: "Ambala City, Haryana", linkedin: "https://www.linkedin.com/in/mrmanik/", twitter: "https://x.com/themanikdiaries", instagram: "https://www.instagram.com/manik.3000/", skills: "Community Building, Connecting People, Public Speaking, Communication, Blockchain", imageUrl: manikImg },
    { name: "Shree Sharma", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Chandigarh", linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334", twitter: "https://x.com/shr14930?s=21", instagram: "https://www.instagram.com/shreesharma8937", skills: "Python, HTML, CSS, JavaScript, C++, Communication", imageUrl: ayushImg },
    { name: "Ishika Bains", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Roorkee, Uttarakhand", linkedin: "https://www.linkedin.com/in/ishika-bains-699301378", instagram: "https://www.instagram.com/ishika.0412", skills: "C, C++, DSA, Python, HTML, Good Communication", imageUrl: aryanImg },
    { name: "Prabhjot Kaur", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Ambala Cantt, Haryana", linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364", twitter: "https://x.com/Prabhjot1607", instagram: "https://www.instagram.com/prabhi_kaur786", skills: "C++ programming, Basic DSA, Good Listener", imageUrl: null },
    { name: "Shourya", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Shamli, Uttar Pradesh", linkedin: "https://www.linkedin.com/in/shourya-singh-khatiyan", twitter: "https://x.com/Shouryakhatiyan", skills: "ML Developer, Data Analysis, Model Training", imageUrl: himanshiImg },
    { name: "Shinu Verma", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Ambala, Haryana", linkedin: "https://www.linkedin.com/in/shinu-verma-4678432a2", twitter: "https://x.com/Shinuverma_", instagram: "https://www.instagram.com/shinuverma___", skills: "Blockchain Developer, PR and Outreach", imageUrl: guneetImg },
    { name: "Gulam Haider Ali", graduationYear: "2029", branch: "B.Tech CSE - IOT, Cyber Security and Blockchain", block: "9 - CEC", location: "Ludhiana", linkedin: "https://www.linkedin.com/in/haideralyy01", twitter: "https://x.com/haideralyy__", instagram: "https://www.instagram.com/haideralyy__", skills: "Team Leading and Managing", imageUrl: divyanshuImg },
    { name: "Meenu Rani", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Rajpura", linkedin: "https://www.linkedin.com/in/meenu-rani", twitter: "https://x.com/MeenuRani2914", skills: "Public Speaking", imageUrl: meenuImg },
    { name: "Harpreet Kaur", graduationYear: "2028", branch: "B.Pharmacy", block: "8 - CCP", location: "Rajpura, Punjab", linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a", skills: "Fast Learner, Marketing", imageUrl: harpreetImg },
    { name: "Ayush Rawat", graduationYear: "2027", branch: "B.Tech - CSE", block: "10 - COE", location: "Uttrakhand", linkedin: "https://www.linkedin.com/in/ayush-rawat-b8412123a", twitter: "https://x.com/Ayushrwt_04", skills: "Web Developer, Frontend", imageUrl: akshatImg },
    { name: "Ayush Chugh", graduationYear: "2028", branch: "B.Tech - CSE", block: "10 - COE", location: "Mohali", linkedin: "https://www.linkedin.com/in/aayushchugh", twitter: "https://x.com/aayushchugh_x", instagram: "https://www.instagram.com/aayushchugh", skills: "Web Development, MERN Stack", imageUrl: mayankImg },
    { name: "Ranvir Singh", graduationYear: "2028", branch: "B.Tech CSE - IOT", block: "2", location: "Mohali, Punjab", linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b", instagram: "https://www.instagram.com/ranvir_singh_sodhi", skills: "Full Stack Development, AI, ML, Prompt Engineering", imageUrl: ranvirImg },
    { name: "Shreya", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Panipat, Haryana", linkedin: "https://www.linkedin.com/in/shreya-chachra-2a5749322", twitter: "https://x.com/shreya27chachra", instagram: "https://www.instagram.com/shreya27chachra", skills: "Public Speaking, Management", imageUrl: shreyaImg },
    { name: "Aditya Pant", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Uttrakhand", linkedin: "https://www.linkedin.com/in/adityaapant", twitter: "https://x.com/adityapant_", instagram: "https://www.instagram.com/adityapant_", skills: "Web Development", imageUrl: adityaImg },
    { name: "Rahul", graduationYear: "2027", branch: "B.Tech CSE", block: "3 - CEC", location: "Malout", linkedin: "https://www.linkedin.com/in/rahul-chhabra-336080296", instagram: "https://www.instagram.com/_rahul._.chhabra_", skills: "Problem Solving", imageUrl: rahulImg },
    { name: "Mishti Bansal", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Tohana, Haryana", linkedin: "https://www.linkedin.com/in/mishti-bansal-246a60344", instagram: "https://www.instagram.com/mishti_mithu_", skills: "Python, HTML, Java, Communication, Growth Mindset", imageUrl: mishtiImg },
    { name: "Swagita", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Patiala, Punjab", linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303", twitter: "https://twitter.com/Swag_with_techX", skills: "Creative, Observant, Reflective", imageUrl: swagitaImg },
    { name: "Vinayak Bansal", graduationYear: "2029", branch: "B.Tech IT", block: "9 - CEC", location: "Muzaffarnagar, Uttar Pradesh", linkedin: "https://www.linkedin.com/in/vinayak-bansal-4a609238a", instagram: "https://www.instagram.com/vinayak._.bansall", skills: "Management", imageUrl: vinayakImg },
    { name: "Manmohan Singh", graduationYear: "2027", branch: "B.Tech CSE", block: "10 - COE", location: "Ambala City, Haryana", linkedin: "https://www.linkedin.com/in/manmohan197814", twitter: "https://x.com/Manmohan197814", instagram: "https://www.instagram.com/manmohan141414", skills: "Blockchain, MERN Developer, Connecting People", imageUrl: manmohanImg },
    { name: "Sharan", graduationYear: "2028", branch: "B.Tech CSE IOT", block: "2", location: "Ambala, Haryana", linkedin: "https://www.linkedin.com/in/sharan-arora-2020b3363", instagram: "https://www.instagram.com/not.ursam", skills: "Designing, Reading, Drawing", imageUrl: sharanImg },
    { name: "Sampark", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Kangra, Himachal Pradesh", linkedin: "https://www.linkedin.com/in/sampark-sharma-9b0923335", twitter: "https://x.com/_sampark_", skills: "Tech, Communication, Social Media", imageUrl: samparkImg },
    { name: "Heena", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Patiala", linkedin: "https://www.linkedin.com/in/heena-batra-35a8bb346", twitter: "https://x.com/H242119619446", skills: "Time Management, Teamwork, Adaptability", imageUrl: heenaImg },
    { name: "Himanshi Sardana", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Patiala, Punjab", linkedin: "https://www.linkedin.com/in/himanshi-sardana-1842b1370", twitter: "https://x.com/HimanshiS786", skills: "Optimistic, Creative", imageUrl: himanshi2Img },
    { name: "Sambhav Jain", graduationYear: "2028", branch: "B.Tech CSE(IOT)", block: "2", location: "Panipat", linkedin: "https://www.linkedin.com/in/sambhav-jain-b70494283", instagram: "https://www.instagram.com/sambhav3802", skills: "Good in friendships and a good listener", imageUrl: sambhavImg },
    { name: "Suraj Kumar", graduationYear: "2028", branch: "B.Tech CSE(IOT)", block: "2", location: "Punjab", linkedin: "https://www.linkedin.com/in/suraj-kumar-kuswaha-40a375315", instagram: "https://www.instagram.com/iitianssuraj", skills: "Disciplined and focused, C, C++, DSA, Python", imageUrl: surajImg },
    { name: "Rishav Patiyal", graduationYear: "2028", branch: "B.Tech CSE IOT", block: "2", location: "Himachal Pradesh", linkedin: "https://www.linkedin.com/in/rishav-patiyal-22b69b395", instagram: "https://www.instagram.com/rishav_patiyal_07", skills: "Good Listener, Beginner in C++", imageUrl: rishavImg },
    { name: "Sashank Joshi", graduationYear: "2028", branch: "B.Tech AI&DS", block: "10 - COE", location: "Tinsukia, Assam", linkedin: "https://www.linkedin.com/in/sashank-joshi-a603a2321", instagram: "https://www.instagram.com/_sashank__", skills: "Web Development, Idea Strategist", imageUrl: sashankImg },
    { name: "Swayam Arora", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Kot Kapura", linkedin: "https://www.linkedin.com/in/swayam-arora-2b2806340", instagram: "https://www.instagram.com/samarora_1308", skills: "Coding and Marketing", imageUrl: swayamAroraImg },
    { name: "Swayam Bhatia", graduationYear: "2028", branch: "B.Tech CSE", block: "COE", location: "Karnal, Haryana", linkedin: "https://www.linkedin.com/in/swayam-bhatia-210177242", instagram: "https://www.instagram.com/human.who.travels", skills: "LinkedIn Ghostwriting, Freelancing", imageUrl: swayamBhatiaImg },
    { name: "Paridhi Kaur", graduationYear: "2028", branch: "B.Tech AIDS", block: "10 - COE", location: "Kathua, Jammu & Kashmir", linkedin: "https://www.linkedin.com/in/paridhi-kaur-94117230a", instagram: "https://www.instagram.com/kparidhii", skills: "Python, C++", imageUrl: paridhiImg },
    { name: "Daksh Khaneja", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Rohtak, Haryana", linkedin: "https://www.linkedin.com/in/daksh-khaneja-a034a0373", instagram: "https://www.instagram.com/dakshkhaneja_.45", skills: "Communication, Management, Web Dev, Branding", imageUrl: dakshImg },
    { name: "Gaurav Singh", graduationYear: "2027", branch: "B.Tech AI&DS", block: "10 - COE", location: "Ropar, Punjab", linkedin: "https://www.linkedin.com/in/gaurav-singh-5392a7272", instagram: "https://www.instagram.com/justtgxurxv._", skills: "A man can't sleep without work!!", imageUrl: gauravImg },
    { name: "Aditya Pushpakar", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Chandigarh", linkedin: "https://www.linkedin.com/in/aditya-pushpakar-609690323", instagram: "https://www.instagram.com/shotgunaditya", twitter: "https://x.com/Aditya23P005", skills: "Designing, Python, C++, Prompt Engineering, Entrepreneurship", imageUrl: adityaPushpakarImg },
    { name: "Parth Sahni", graduationYear: "2029", branch: "B.Tech CSE", block: "10 - COE", location: "Roorkee, Uttarakhand", linkedin: "https://www.linkedin.com/in/parth-sahni-7955a52b9", instagram: "https://www.instagram.com/parth_sahni_3556", skills: "Chess player, Like to learn", imageUrl: parthImg },
    { name: "Ishita Mahajan", graduationYear: "2028", branch: "B.Tech CSE", block: "10", location: "Pathankot, Punjab", linkedin: "https://www.linkedin.com/in/ishita-mahajan-522003377", instagram: "https://www.instagram.com/_ishitamahajan", skills: "Analytical skill", imageUrl: ishitaImg },
    { name: "Divanshi Arora", graduationYear: "2029", branch: "B.Tech CSE", block: "9", location: "Delhi", linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373", instagram: "https://www.instagram.com/diva.nshi.arora", skills: "Public speaking, Anchoring, Communication, Sketching", imageUrl: divanshiImg },
    { name: "Lovneet Kaur", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Rampura", linkedin: "https://www.linkedin.com/in/lovneet-kaur-255763346", instagram: "https://www.instagram.com/lovneet_kxur", skills: "Leadership quality, Disciplined", imageUrl: lovneetImg },
    { name: "Jyotika Mittal", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Sunam, Punjab", linkedin: "https://www.linkedin.com/in/jyotika-mittal-a2810332b", instagram: "https://www.instagram.com/_jyotika_28_", skills: "Technology, Community-building", imageUrl: jyotikaImg },
    { name: "Piyush Goyal", graduationYear: "2029", branch: "B.Tech IOT", block: "9", location: "Sirsa, Haryana", linkedin: "", instagram: "https://www.instagram.com/im_.piyush12", skills: "Cybersecurity", imageUrl: piyushImg },
    { name: "Jatin Guleria", graduationYear: "2029", branch: "B.Tech CSE DS", block: "9 - Applied Sciences", location: "Kangra, Himachal Pradesh", linkedin: "https://www.linkedin.com/in/jatin-guleria-693b75366", instagram: "https://www.instagram.com/guleria_jatin02", skills: "Basics of Python and C++ STL", imageUrl: jatinImg },
    { name: "Kanan Kango", graduationYear: "2027", branch: "B.Tech AIML", block: "10 - COE", location: "Hamirpur, Himachal Pradesh", linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282", instagram: "https://www.instagram.com/kanan_kango", skills: "React, TypeScript, Next.js, Python, AI, ML", imageUrl: kananImg },
    { name: "Sahil Bansal", graduationYear: "2026", branch: "BCA", block: "6", location: "Derabassi, Punjab", linkedin: "https://www.linkedin.com/in/sahilb315", twitter: "https://x.com/Sahilbansall121", skills: "Backend & Systems, Build things from scratch", imageUrl: sahilImg },
    { name: "Harshita Joshi", graduationYear: "2028", branch: "B.Tech CSE", block: "3", location: "Nainital, Uttarakhand", linkedin: "https://www.linkedin.com/in/harshita-joshi-3623b0309", instagram: "https://www.instagram.com/harshi.hihihi", skills: "Keen learner, Photo editor for fun", imageUrl: harshitaImg },
    { name: "Purv Bansal", graduationYear: "2028", branch: "B.Tech CSE DS", block: "2 - CEC", location: "Panchkula, Haryana", linkedin: "https://www.linkedin.com/in/purv-bansal-22ba56306", instagram: "https://www.instagram.com/purvbansal9", skills: "Communication, Leadership, Critical thinking", imageUrl: purvImg },
    { name: "Aditya Aggarwal", graduationYear: "2028", branch: "B.Tech AI-DS", block: "10 - COE", location: "Saharanpur, Uttar Pradesh", linkedin: "https://www.linkedin.com/in/adityaagg0003", instagram: "https://www.instagram.com/pvt.aditya2006", skills: "Never gives up", imageUrl: adityaAggarwalImg },
    { name: "Samridhi Gupta", graduationYear: "2027", branch: "B.Tech CSE", block: "3 - CEC", location: "Charkhi Dadri, Haryana", linkedin: "https://www.linkedin.com/in/samridhi-gupta08/", instagram: "https://www.instagram.com/samridhiii_gupta", skills: "Learning, Building, Innovating", imageUrl: samridhiImg },
    { name: "Rishu Rana", graduationYear: "2029", branch: "B.Tech CSE DS", block: "9", location: "Delhi", linkedin: "https://www.linkedin.com/in/rishu-rana-32429a376", instagram: "https://www.instagram.com/rishu_rana_03", skills: "Cybersecurity", imageUrl: rishuImg },
    { name: "Manthan Mishra", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Ludhiana, Punjab", linkedin: "https://www.linkedin.com/in/manthan-mishra-4bbb1837b", instagram: "https://www.instagram.com/manthxnmishraa", skills: "Willingness to learn", imageUrl: manthanImg },
    { name: "Kamakshi Sachdeva", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Sirsa, Haryana", linkedin: "https://www.linkedin.com/in/kamakshi-sachdeva-3318a7325", instagram: "https://www.instagram.com/kamakshi._.sachdeva", skills: "Techie :)", imageUrl: kamakshiImg },
    { name: "Rohineet Kaur", graduationYear: "2028", branch: "B.Tech CSE", block: "3 - CEC", location: "Karnal, Haryana", linkedin: "https://www.linkedin.com/in/rohineet-kaur-419b52362/", instagram: "https://www.instagram.com/rohineeet.kaurr", skills: "Basic ML deployment, Python", imageUrl: rohineetImg },
    { name: "Yashika Kainth", graduationYear: "2027", branch: "B.Tech AIML", block: "10 - COE", location: "Mohali, Punjab", linkedin: "https://www.linkedin.com/in/yashika-kainth-69a0b1284", instagram: "https://www.instagram.com/yashika_kainth", skills: "Cyber security, Digital forensics, OSINT, AI threat detection", imageUrl: yashikaImg },
    { name: "Kushal Mittal", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Haridwar, Uttarakhand", linkedin: "https://www.linkedin.com/in/kushal-mittal-b9aa6a297", skills: "Writing, Python, Team Management", imageUrl: kushalImg },
    { name: "Chirag", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Gharaunda, Haryana", linkedin: "", skills: "Good Communication Skills", imageUrl: chiragImg },
    { name: "Sarang Ahlawat", graduationYear: "2027", branch: "B.Tech CSE", block: "10 - COE", location: "Baghpat, UP", linkedin: "https://www.linkedin.com/in/sarang-ahlawat-2ab5b0261", skills: "AI, Startups, Community, Leadership", imageUrl: sarangImg },
    { name: "Aashi Raghuwanshi", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "Bhopal", linkedin: "https://www.linkedin.com/in/aashiraghuwanshi", skills: "AI & ML, Full Stack, Leadership & Communication", imageUrl: aashiImg },
    { name: "Vrinda", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "", linkedin: "", skills: "", imageUrl: vrindaImg },
    { name: "Aksheeta", graduationYear: "2028", branch: "B.Tech CSE", block: "10 - COE", location: "", linkedin: "", skills: "", imageUrl: aksheetaImg },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Members Directory
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our amazing community members
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, branch, skills, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No members found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface MemberCardProps {
  member: {
    name: string;
    graduationYear: string;
    branch: string;
    block: string;
    location: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    skills: string;
    imageUrl: string | null;
  };
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-hover transition-all hover-lift bg-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src={member.imageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
          onError={(e) => {
            e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
          }}
        />
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.branch}</p>
          <p className="text-xs text-muted-foreground">Class of {member.graduationYear}</p>
          {member.location && (
            <div className="flex items-center justify-center gap-1 text-xs text-primary">
              <MapPin className="w-3 h-3" />
              <span>{member.location}</span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{member.skills}</p>
        <div className="flex gap-3">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
