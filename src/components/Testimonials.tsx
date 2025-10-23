import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import manikImg from "@/assets/members/manik.jpg";
import aryanImg from "@/assets/members/aryan.jpg";
import divyanshuImg from "@/assets/members/divyanshu.jpg";
import aashiImg from "@/assets/members/aashi.jpg";
import avneetImg from "@/assets/members/avneet.jpg";
import mayankImg from "@/assets/members/mayank.jpg";
import ayushImg from "@/assets/members/ayush.jpg";
import mishtiImg from "@/assets/members/mishti.jpg";
import ranvirImg from "@/assets/members/ranvir.jpg";
import shreyaImg from "@/assets/members/shreya.jpg";
import adityaImg from "@/assets/members/aditya.jpg";
import swagitaImg from "@/assets/members/swagita.jpg";
import vinayakImg from "@/assets/members/vinayak.jpg";
import manmohanImg from "@/assets/members/manmohan.jpg";
import sharanImg from "@/assets/members/sharan.jpg";
import samparkImg from "@/assets/members/sampark.jpg";
import heenaImg from "@/assets/members/heena.jpg";
import himanshi2Img from "@/assets/members/himanshi2.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Manik",
      quote: "I loved the energy and curiosity to learn from each other in all the 23 students who joined us. Can't wait for the next gatherings where we can do alot of fun activities and exchange our knowledge and values.",
      linkedin: "https://www.linkedin.com/in/mrmanik/",
      imageUrl: manikImg
    },
    {
      name: "Ishika",
      quote: "The meetup was great and a very good initiative for juniors like us to connect with such talented people of our college. Seniors who already acquired certain skills can let us know what can be our roadmap or sources from where we can start. I loved it that we have such seniors in our college who took an initiative like this to bring together people from different departments to share their experiences that can help others and also can seek guidance from each other.",
      linkedin: "https://www.linkedin.com/in/ishika-bains-699301378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: aryanImg
    },
    {
      name: "Haider Ali",
      quote: "In my first meet up everyone is so passionate... Har insan kuch na kuch sikh rha kr rha to sab dekh kr khud ka man krne laga ab ki han i have to do something",
      linkedin: "www.linkedin.com/in/haideralyy01",
      imageUrl: divyanshuImg
    },
    {
      name: "Prabhjot Kaur",
      quote: "The meetup was really informative.I got to learn about the experiences of seniors.I would be great if seniors share step by step how they started with projects,coding challenge such that it would really help us to get a proper roadmap.",
      linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
      imageUrl: aashiImg
    },
    {
      name: "Harpreet Kaur",
      quote: "Nice to meet all of them present in the gathering. Thing I loved the most in gathering is that we can connect with juniors and seniors without any hesitation.",
      linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: avneetImg
    },
    {
      name: "Ayush Chugh",
      quote: "Loved the energy of all the people",
      linkedin: "https://www.linkedin.com/in/aayushchugh",
      imageUrl: mayankImg
    },
    {
      name: "Shree Sharma",
      quote: "Loved connecting with everyone . It was a short but amazing meetup  . Would love to attend more such meetups. Hope to see more people coming next time and sharing their thoughts openly .",
      linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      imageUrl: ayushImg
    },
    {
      name: "Mishti Bansal",
      quote: "Meetup was amazing. It will really help students a lot . I want the next meetup so that ,with multiple meetup's the students can be able to connect and upgrade themselves, learn something new. I love the interactions in last meetup we had done.",
      linkedin: "https://www.linkedin.com/in/mishti-bansal-246a60344",
      imageUrl: mishtiImg
    },
    {
      name: "Ranvir Singh",
      quote: "My first meetup was great,got to make a lot of new friends who have similar interests.In next meetups too we will have many new members that i recommended to join.So,the introduction may take some time.If we get time we can just sit and discuss our interests ,hobbies or plan a game",
      linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
      imageUrl: ranvirImg
    },
    {
      name: "Shreya",
      quote: "Till now I have only attended one, but I would love to attend more, i literally liked meeting new people and learning about them and learning new things from them",
      linkedin: "https://www.linkedin.com/in/shreya-chachra-2a5749322",
      imageUrl: shreyaImg
    },
    {
      name: "Aditya Pant",
      quote: "It was nice meetup excited to attend more",
      linkedin: "https://www.linkedin.com/in/adityaapant",
      imageUrl: adityaImg
    },
    {
      name: "Swagita",
      quote: "I really enjoyed attending the first \"Let's Connect\" meetup. It was great to see people from our college coming together to share what they are doing and learn from each other. I liked the idea of everyone introducing themselves, it gave a sense of connection, even though many were a bit nervous while speaking. Since we joined a bit late, we couldn't listen to everyone's introductions, but whatever we heard was inspiring",
      linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303",
      imageUrl: swagitaImg
    },
    {
      name: "Vinayak Bansal",
      quote: "It is very informative",
      linkedin: "https://www.linkedin.com/in/vinayak-bansal-4a609238a",
      imageUrl: vinayakImg
    },
    {
      name: "Manmohan Singh",
      quote: "It's was good.",
      linkedin: "https://www.linkedin.com/in/manmohan197814",
      imageUrl: manmohanImg
    },
    {
      name: "Sharan",
      quote: "The meeting was good we had interactions with each other. The one we don't know but can help us grow with their skills and all.",
      linkedin: "https://www.linkedin.com/in/sharan-arora-2020b3363",
      imageUrl: sharanImg
    },
    {
      name: "Sampark",
      quote: "Love the crowd, super chill, super fun!",
      linkedin: "https://www.linkedin.com/in/sampark-sharma-9b0923335",
      imageUrl: samparkImg
    },
    {
      name: "Heena",
      quote: "It was a nice and interactive meetup. I liked the introduction session; it helped me learn how to introduce myself confidently.",
      linkedin: "https://www.linkedin.com/in/heena-batra-35a8bb346",
      imageUrl: heenaImg
    },
    {
      name: "Himanshi",
      quote: "That's amazing interactive meetup, where we came to know about each other's skills , prospective and also what ann opportunity to convey my prospective to other",
      linkedin: "https://www.linkedin.com/in/himanshi-sardana-1842b1370",
      imageUrl: himanshi2Img
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
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className={`w-16 h-16 rounded-full object-cover border-2 border-primary/20 ${
                        testimonial.name === "Sampark" 
                          ? "object-[center_20%]" 
                          : "object-top"
                      }`}
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
