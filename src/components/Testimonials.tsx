import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Manik",
      quote: "I loved the energy and curiosity to learn from each other in all the 23 students who joined us. Can't wait for the next gatherings where we can do alot of fun activities and exchange our knowledge and values.",
      linkedin: "https://www.linkedin.com/in/mrmanik/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFFRI1-_yIGEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721867786956?e=1762387200&v=beta&t=mRoPXoweuENeXuG8jzKzKDblbq2KUTqgNFmlNTcMbkg"
    },
    {
      name: "Ishika",
      quote: "The meetup was great and a very good initiative for juniors like us to connect with such talented people of our college. Seniors who already acquired certain skills can let us know what can be our roadmap or sources from where we can start. I loved it that we have such seniors in our college who took an initiative like this to bring together people from different departments to share their experiences that can help others and also can seek guidance from each other.",
      linkedin: "https://www.linkedin.com/in/ishika-bains-699301378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/9VxOFqHKbSzSCVUsCj4NKQ/HiKLcUoI11seydzE7C7DD4BD2r1qGYgxN0L30cUT7EwU9_fOJDe2TQ4Whklj_8ncJ33LK1eEXCYV13OIbVugjyR41CJoEpuoQjhg2oOK84446IRPnjgzQt7mwvBm4CPs1yhxM3ktUx7GnKQMOJ128Q/rusOAeVfxK-zSq0u7fSTVlvY4vWUUglV-52r96QmvK8"
    },
    {
      name: "Haider Ali",
      quote: "In my first meet up everyone is so passionate... Har insan kuch na kuch sikh rha kr rha to sab dekh kr khud ka man krne laga ab ki han i have to do something",
      linkedin: "www.linkedin.com/in/haideralyy01",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/jua2NZ9WWdyeiHzUy1TA-w/hFMujD3NGtt3UWEA3aVFwyMzG6LvVo2PzQJErOt19R5F2G0xhJQ-5vsbBo_EHVJkirHMewEc6QWqk_Vh1cGxz66B1DfpU9zk80hzF6FjSFfprUVDPvBq0lZb1pi6avftrml4_Ljcl1OeNr3zjv4Uaw/LQGCaF3i6k0ZjSvH3AIxSP7BrP_KqZrA1Mp_ZdhfmJ4"
    },
    {
      name: "Prabhjot Kaur",
      quote: "The meetup was really informative.I got to learn about the experiences of seniors.I would be great if seniors share step by step how they started with projects,coding challenge such that it would really help us to get a proper roadmap.",
      linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/YcyoQxrD0-4tS5_BsmSidw/Wf0iC2DCKUbe903VUQ_7nerY3_F3dbTgbeExD73DFb6JGof7wJpwEV3dRmfzgUYfr9kEphi30gEdMS9qgxRtDsNtl4LjOvCS4-O0DAvWcRhij4u6hvgmILlw-zwfl-2PQeq4NqGb2fnsRxGIlfIIPQ/2ZjvBmH282G4-JkOTgYgAgYWZm3acPiFHYjonL_S2Xo"
    },
    {
      name: "Harpreet Kaur",
      quote: "Nice to meet all of them present in the gathering. Thing I loved the most in gathering is that we can connect with juniors and seniors without any hesitation.",
      linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/PFWnMxCrYjfVDRBAeCYrNA/xfXXf0s2rNuJllb1vp1g-3DUUWft7CW62kg-2pq_mkl6-h2qxdEX0Hsk3PUFJS6MD_grbmjbOf5vN200bz9Dpfr_31AGgZv8u93-ihWjxegGLSXfgOaZGdtIkgNEj-TWcYhHAD6FEJgbcR2un3yXFg/aSxjb6CNVB331YhBtdJCS235U_uDel1rUKt8inL15k0"
    },
    {
      name: "Ayush Chugh",
      quote: "Loved the energy of all the people",
      linkedin: "https://www.linkedin.com/in/aayushchugh",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/c_k04VZTl_JS4Bye7fHcIQ/iMndrPCJ89IHkgIIQSb7amTMSAsWpsIC_ENplnk50Tz6NkFS8FmrdMKRd7WdIK_IIf4zXW66n0-tW8VRKuA11BieJ2efB0lCr9YOn6aV3QylALD5371tgCsf9sBpoPS3C-oWAlK7shB91Ux9-aZQTA/R2mNSxaoBp3bWEKYxM0wZ9wXNES8ld-4uQxJL7jWj10"
    },
    {
      name: "Shree Sharma",
      quote: "Loved connecting with everyone . It was a short but amazing meetup  . Would love to attend more such meetups. Hope to see more people coming next time and sharing their thoughts openly .",
      linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      imageUrl: "https://v5.airtableusercontent.com/v3/u/46/46/1760961600000/jHPpr9aBHNmmUS5Df-XRIg/7Su_NlT2oslewLA3QoPzuAtIUgUm9FvO4lAJy3m8ZmsJz_1T2rl-CS5ysIvXvADfS-YdSjZhexpghlLEDPo2j4DFPKriFSD0AQsvMLcvPSR-mSkUyib_luEyvF6TLijMiypifBtFtVFvf1B_qDVbRA/z4erqO94Wt_eNAVNXd6tL4WPW_5A9g2hFFBVFZG5ffI"
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Member Voices
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our community members
            </p>
          </div>

          {/* Testimonials - Masonry Grid */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-card relative bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-hover transition-smooth break-inside-avoid mb-6"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
                <div className="relative space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150/6366f1/ffffff?text=' + testimonial.name.charAt(0);
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                    </div>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
