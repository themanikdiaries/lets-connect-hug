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
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFFRI1-_yIGEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721867786956?e=1762387200&v=beta&t=mRoPXoweuENeXuG8jzKzKDblbq2KUTqgNFmlNTcMbkg"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/jHPpr9aBHNmmUS5Df-XRIg/7Su_NlT2oslewLA3QoPzuAtIUgUm9FvO4lAJy3m8ZmsJz_1T2rl-CS5ysIvXvADfS-YdSjZhexpghlLEDPo2j4DFPKriFSD0AQsvMLcvPSR-mSkUyib_luEyvF6TLijMiypifBtFtVFvf1B_qDVbRA/z4erqO94Wt_eNAVNXd6tL4WPW_5A9g2hFFBVFZG5ffI"
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
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHocS6uGNH5ZA/profile-displayphoto-scale_400_400/B4EZm4jRhsHcAg-/0/1759737882181?e=1762387200&v=beta&t=eZF5nrNYqk4d9w5VbST_L4Ci5AlOIEf6qSJ971rKeMY"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/YcyoQxrD0-4tS5_BsmSidw/Wf0iC2DCKUbe903VUQ_7nerY3_F3dbTgbeExD73DFb6JGof7wJpwEV3dRmfzgUYfr9kEphi30gEdMS9qgxRtDsNtl4LjOvCS4-O0DAvWcRhij4u6hvgmILlw-zwfl-2PQeq4NqGb2fnsRxGIlfIIPQ/2ZjvBmH282G4-JkOTgYgAgYWZm3acPiFHYjonL_S2Xo"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/AsuJAzPHeziO6Z9N4iM27Q/1KbniN82Ml_qNyi4eNGC__c516y_0XqYa9XRn7vByCmA1CARthDZtu62uze_A4jUNIwZ1cIWscW1nQUhsjOfICGx5YVH1fC2GdTRFneesjxTOAJo4f2vhvV_2JE6kmOfKb9SCr3BmHDsQpYOQp6tBA/7_yT_9B6IJJgHQ7B5tDut0zVcxAOtMDl4cieWDdNJ74"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/6EglZpct5CaEBCtVR1c0yA/JfBqQ9MPx9o3F49U3-OvXR5QRPFnjIxIqwbwwkVhCq1bU5bkVr0p7DeoThF1qhnPCjkrbnie_9G-_iHxrO5EsOxaKI6pm6k_zu5DnjawJpWYFzceaB1olunHmHRbk7-dzciWfIsWH9Dt1v_aAAUbog/WxHxltf3K2OxkIiJnf8ITTtLIEfiO41-66DwBXe9pl8"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/jua2NZ9WWdyeiHzUy1TA-w/hFMujD3NGtt3UWEA3aVFwyMzG6LvVo2PzQJErOt19R5F2G0xhJQ-5vsbBo_EHVJkirHMewEc6QWqk_Vh1cGxz66B1DfpU9zk80hzF6FjSFfprUVDPvBq0lZb1pi6avftrml4_Ljcl1OeNr3zjv4Uaw/LQGCaF3i6k0ZjSvH3AIxSP7BrP_KqZrA1Mp_ZdhfmJ4"
    },
    {
      name: "Meenu Rani",
      graduationYear: "2028",
      branch: "B.Tech CSE",
      block: "10 - COE",
      linkedin: "https://www.linkedin.com/in/meenu-rani-9894a4327",
      skills: "DSA in JAVA",
      remarkable: "I am a public speaker",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/NoZACMhmFucelUe4Tu-AXA/E3DyF_SqMt2huPEbGmt3lvUpbidFmefeQcFt3et1UQxZUIECCS3ZHVkcU-A-6E1vfQ5cvtsNLq32A5zQPPFlGkVMcejcQrtHHu58-UhgS_JJSd8UOf1QkP8MBUbrZU54hmVleriM_cJ41FoCGSi42g/W20QpJLJDh1Wmb4bPvuyJzyktggxwy0NrGp7ep-QNPg"
    },
    {
      name: "Harpreet Kaur",
      graduationYear: "2028",
      branch: "B.Pharmacy",
      block: "8 - CCP",
      linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      skills: "Communication",
      remarkable: "I am a fast leaner",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/PFWnMxCrYjfVDRBAeCYrNA/xfXXf0s2rNuJllb1vp1g-3DUUWft7CW62kg-2pq_mkl6-h2qxdEX0Hsk3PUFJS6MD_grbmjbOf5vN200bz9Dpfr_31AGgZv8u93-ihWjxegGLSXfgOaZGdtIkgNEj-TWcYhHAD6FEJgbcR2un3yXFg/aSxjb6CNVB331YhBtdJCS235U_uDel1rUKt8inL15k0"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/ujtVBIPe_Da_D6mqWeUtOA/JkrpP7RmLfn8mre2TMIMGMIuTO7vjsCNuJFNVCumY-POEPvDEJrVvzGUngWurfYgfYzGFy3D5IPe-eqR-GjlFoA3af5-zcSMqhQB2OVzC7zd9SvIj8zOJX0r_YDf5bySf8nMHeKDN2NqpdBKPExgnw/B38GQ5A1TvM66obEa6xHU1-re9jY7HNTm6FO2b-L1ew"
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
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/c_k04VZTl_JS4Bye7fHcIQ/iMndrPCJ89IHkgIIQSb7amTMSAsWpsIC_ENplnk50Tz6NkFS8FmrdMKRd7WdIK_IIf4zXW66n0-tW8VRKuA11BieJ2efB0lCr9YOn6aV3QylALD5371tgCsf9sBpoPS3C-oWAlK7shB91Ux9-aZQTA/R2mNSxaoBp3bWEKYxM0wZ9wXNES8ld-4uQxJL7jWj10"
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
