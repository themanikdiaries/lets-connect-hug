import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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

export const testimonials = [
  {
    name: "Manik",
    quote: "I loved the energy and curiosity to learn from each other in all the 23 students who joined us. Can't wait for the next gatherings!",
    linkedin: "https://www.linkedin.com/in/mrmanik/",
    imageUrl: manikImg
  },
  {
    name: "Ishika",
    quote: "The meetup was great and a very good initiative for juniors like us to connect with such talented people of our college.",
    linkedin: "https://www.linkedin.com/in/ishika-bains-699301378",
    imageUrl: aryanImg
  },
  {
    name: "Haider Ali",
    quote: "In my first meet up everyone is so passionate... Har insan kuch na kuch sikh rha kr rha to sab dekh kr khud ka man krne laga!",
    linkedin: "https://www.linkedin.com/in/haideralyy01",
    imageUrl: divyanshuImg
  },
  {
    name: "Prabhjot Kaur",
    quote: "The meetup was really informative. I got to learn about the experiences of seniors.",
    linkedin: "https://www.linkedin.com/in/prabhjot-kaur-138b44364",
    imageUrl: aashiImg
  },
  {
    name: "Harpreet Kaur",
    quote: "Nice to meet all of them present in the gathering. We can connect without any hesitation.",
    linkedin: "https://www.linkedin.com/in/harpreet-kaur-28a25735a",
    imageUrl: avneetImg
  },
  {
    name: "Ayush Chugh",
    quote: "Loved the energy of all the people!",
    linkedin: "https://www.linkedin.com/in/aayushchugh",
    imageUrl: mayankImg
  },
  {
    name: "Shree Sharma",
    quote: "Loved connecting with everyone. It was a short but amazing meetup!",
    linkedin: "https://www.linkedin.com/in/shree-sharma-08b540334",
    imageUrl: ayushImg
  },
  {
    name: "Mishti Bansal",
    quote: "Meetup was amazing. It will really help students a lot!",
    linkedin: "https://www.linkedin.com/in/mishti-bansal-246a60344",
    imageUrl: mishtiImg
  },
  {
    name: "Ranvir Singh",
    quote: "My first meetup was great, got to make a lot of new friends who have similar interests.",
    linkedin: "https://www.linkedin.com/in/ranvir-singh-5ba59736b",
    imageUrl: ranvirImg
  },
  {
    name: "Shreya",
    quote: "I literally liked meeting new people and learning about them!",
    linkedin: "https://www.linkedin.com/in/shreya-chachra-2a5749322",
    imageUrl: shreyaImg
  },
  {
    name: "Aditya Pant",
    quote: "It was nice meetup, excited to attend more!",
    linkedin: "https://www.linkedin.com/in/adityaapant",
    imageUrl: adityaImg
  },
  {
    name: "Swagita",
    quote: "I really enjoyed attending the meetup. It felt so natural and wholesome.",
    linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303",
    imageUrl: swagitaImg
  },
  {
    name: "Vinayak Bansal",
    quote: "It is very informative!",
    linkedin: "https://www.linkedin.com/in/vinayak-bansal-4a609238a",
    imageUrl: vinayakImg
  },
  {
    name: "Manmohan Singh",
    quote: "It was good.",
    linkedin: "https://www.linkedin.com/in/manmohan197814",
    imageUrl: manmohanImg
  },
  {
    name: "Sharan",
    quote: "The meeting was good, we had interactions with each other.",
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
    quote: "It was a nice and interactive meetup!",
    linkedin: "https://www.linkedin.com/in/heena-batra-35a8bb346",
    imageUrl: heenaImg
  },
  {
    name: "Himanshi",
    quote: "That's amazing interactive meetup!",
    linkedin: "https://www.linkedin.com/in/himanshi-sardana-1842b1370",
    imageUrl: himanshi2Img
  },
  // New feedbacks from spreadsheet
  {
    name: "Sambhav Jain",
    quote: "It was great.",
    linkedin: "https://www.linkedin.com/in/sambhav-jain-b70494283",
    imageUrl: null
  },
  {
    name: "Suraj Kumar",
    quote: "It was great and memorable meetup because it's my first career building meetup.",
    linkedin: "https://www.linkedin.com/in/suraj-kumar-kuswaha-40a375315",
    imageUrl: null
  },
  {
    name: "Rishav",
    quote: "It was great 😃",
    linkedin: "https://www.linkedin.com/in/rishav-patiyal-22b69b395",
    imageUrl: null
  },
  {
    name: "Sashank Joshi",
    quote: "The meetup was absolutely insane, definitely one of the best memories. The highlight was that cup of tea we shared - it just hit different.",
    linkedin: "https://www.linkedin.com/in/sashank-joshi-a603a2321",
    imageUrl: null
  },
  {
    name: "Swayam Arora",
    quote: "It was a nice meeting and I love the way they introduce and talk to each other.",
    linkedin: "https://www.linkedin.com/in/swayam-arora-2b2806340",
    imageUrl: null
  },
  {
    name: "Swayam Bhatia",
    quote: "Would love to attend more meetups!",
    linkedin: "https://www.linkedin.com/in/swayam-bhatia-210177242",
    imageUrl: null
  },
  {
    name: "Paridhi",
    quote: "I really enjoyed the meet-up. It was great connecting with like minded people!",
    linkedin: "https://www.linkedin.com/in/paridhi-kaur-94117230a",
    imageUrl: null
  },
  {
    name: "Daksh",
    quote: "To connect and meet everyone and talk about how we can make each other better.",
    linkedin: "https://www.linkedin.com/in/daksh-khaneja-a034a0373",
    imageUrl: null
  },
  {
    name: "Gaurav Singh",
    quote: "Hats off to Manik who actually pulled this whole thing off by keeping everyone together united. Always greater learnings!",
    linkedin: "https://www.linkedin.com/in/gaurav-singh-5392a7272",
    imageUrl: null
  },
  {
    name: "Aditya Pushpakar",
    quote: "I would say it's a very fruitful session I had, Ayush really helped me to clear some of my brain fog.",
    linkedin: "https://www.linkedin.com/in/aditya-pushpakar-609690323",
    imageUrl: null
  },
  {
    name: "Ishita Mahajan",
    quote: "What I loved the most was how the meetup began with just two of you, then one by one people kept joining. It felt so natural and wholesome!",
    linkedin: "https://www.linkedin.com/in/ishita-mahajan-522003377",
    imageUrl: null
  },
  {
    name: "Divanshi",
    quote: "There are so many people from each and every field. You can learn a lot from all of them!",
    linkedin: "https://www.linkedin.com/in/divanshi-arora-541829373",
    imageUrl: null
  },
  {
    name: "Lovneet",
    quote: "A good valuable meetup. Exploration to new people, new bonds. Love to be connected with more people!",
    linkedin: "https://www.linkedin.com/in/lovneet-kaur-255763346",
    imageUrl: null
  },
  {
    name: "Meenu Rani",
    quote: "It was amazing... Need activities that improve my communication skills!",
    linkedin: "https://www.linkedin.com/in/meenu-rani",
    imageUrl: null
  },
  {
    name: "Jyotika",
    quote: "It was really a great meeting...learned a lot!",
    linkedin: "https://www.linkedin.com/in/jyotika-mittal-a2810332b",
    imageUrl: null
  },
  {
    name: "Piyush",
    quote: "1st experience was really excellent!",
    linkedin: "",
    imageUrl: null
  },
  {
    name: "Jatin Guleria",
    quote: "I like the people we are interacting... interaction with same mindset and people who have achieved more gives kick to go on!",
    linkedin: "https://www.linkedin.com/in/jatin-guleria-693b75366",
    imageUrl: null
  },
  {
    name: "Kanan",
    quote: "It was good. For future meetups, it would be nice to have short ice-breaker activities and member introductions.",
    linkedin: "https://www.linkedin.com/in/kanan-kango-16499b282",
    imageUrl: null
  },
  {
    name: "Purv",
    quote: "Great meetup! Loved most is the way others are friendly too.",
    linkedin: "https://www.linkedin.com/in/purv-bansal-22ba56306",
    imageUrl: null
  },
  {
    name: "Aditya Aggarwal",
    quote: "It was great to meet new people!",
    linkedin: "https://www.linkedin.com/in/adityaagg0003",
    imageUrl: null
  },
  {
    name: "Samridhi Gupta",
    quote: "Meetup was great. Loved the vibe, and it was great to connect with others.",
    linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
    imageUrl: null
  },
  {
    name: "Rishu Rana",
    quote: "Bring Manik bhai chaiye! Loved the most? Ofc Manik bhai!",
    linkedin: "https://www.linkedin.com/in/rishu-rana-32429a376",
    imageUrl: null
  },
  {
    name: "Manthan Mishra",
    quote: "I appreciated the interactive discussions and the opportunity to exchange ideas and experiences.",
    linkedin: "https://www.linkedin.com/in/manthan-mishra-4bbb1837b",
    imageUrl: null
  },
  {
    name: "Kamakshi",
    quote: "Awesome ✌️",
    linkedin: "https://www.linkedin.com/in/kamakshi-sachdeva-3318a7325",
    imageUrl: null
  },
  {
    name: "Rohineet Kaur",
    quote: "I really enjoyed the meetup, especially the interactive discussions. What I loved most is the vibe - it was engaging and insightful!",
    linkedin: "https://www.linkedin.com/in/rohineet-kaur-419b52362/",
    imageUrl: null
  },
  {
    name: "Yashika Kainth",
    quote: "Enjoyed connecting with everyone!",
    linkedin: "https://www.linkedin.com/in/yashika-kainth-69a0b1284",
    imageUrl: null
  }
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Community Voices
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear what our members say about Letz Connect
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.slice(0, 10).map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <Card className="h-full bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-smooth">
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />
                      <p className="text-sm md:text-base leading-relaxed text-foreground/90 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff`}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover object-top border-2 border-primary/20"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff`;
                          }}
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                        </div>
                        {testimonial.linkedin && (
                          <a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full hidden md:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full hidden md:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full"
            >
              <Link to="/voices">Read All Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
