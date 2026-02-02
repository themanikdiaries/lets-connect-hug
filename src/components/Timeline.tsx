import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import timeline images
import oct17Img from "@/assets/timeline/oct-17.jpg";
import oct31Img from "@/assets/timeline/oct-31.jpg";
import nov02Img from "@/assets/timeline/nov-02.jpg";
import nov03Img from "@/assets/timeline/nov-03.jpg";
import nov04Img from "@/assets/timeline/nov-04.jpg";
import nov05Img from "@/assets/timeline/nov-05.jpg";
import nov06Img from "@/assets/timeline/nov-06.jpg";
import nov07Img from "@/assets/timeline/nov-07.jpg";
import nov08Img from "@/assets/timeline/nov-08.jpg";
import nov11Img from "@/assets/timeline/nov-11.jpg";
import nov20Img from "@/assets/timeline/nov-20.jpg";
import nov21Img from "@/assets/timeline/nov-21.jpg";
import nov22Img from "@/assets/timeline/nov-22.jpg";
import nov24Img from "@/assets/timeline/nov-24.jpg";
import nov29TwitterImg from "@/assets/timeline/nov-29-twitter.jpg";
import nov29DevfestImg from "@/assets/timeline/nov-29-devfest.jpg";
import dec20Img from "@/assets/timeline/dec-20.jpg";
import jan09Img from "@/assets/timeline/jan-09.jpg";
import jan13LohriImg from "@/assets/timeline/jan-13-lohri.jpg";
import jan13MentorshipImg from "@/assets/timeline/jan-13-mentorship.jpg";
import jan13ParivartanImg from "@/assets/timeline/jan-13-parivartan.jpg";
import jan13PodcastImg from "@/assets/timeline/jan-13-podcast.jpg";
import jan15AriseImg from "@/assets/timeline/jan-15-arise.jpg";
import jan16AriseImg from "@/assets/timeline/jan-16-arise.jpg";
import jan16MeetupImg from "@/assets/timeline/jan-16-meetup.jpg";
import jan17SukhnaImg from "@/assets/timeline/jan-17-sukhna.jpg";
import jan17MuseumImg from "@/assets/timeline/jan-17-museum.jpg";

interface TimelineEvent {
  date: string;
  description: string;
  image?: string;
}

// Export all timeline images for use in gallery
export const TIMELINE_IMAGES = [
  oct17Img, oct31Img, nov02Img, nov03Img, nov04Img, nov05Img, nov06Img, nov07Img,
  nov08Img, nov11Img, nov20Img, nov21Img, nov22Img, nov24Img, nov29TwitterImg,
  nov29DevfestImg, dec20Img, jan09Img, jan13LohriImg, jan13MentorshipImg,
  jan13ParivartanImg, jan13PodcastImg, jan15AriseImg, jan16AriseImg,
  jan16MeetupImg, jan17SukhnaImg, jan17MuseumImg
];

// All timeline events
const allEvents: TimelineEvent[] = [
  {
    date: "17 Oct 2025",
    description: "1st ever meetup of Letz Connect. From thinking whether someone will come to seeing so many people joining us. This is the beginning of something big and truly special.",
    image: oct17Img,
  },
  {
    date: "31 Oct 2025",
    description: "To be continued, some new people joined us.",
    image: oct31Img,
  },
  {
    date: "2 Nov 2025",
    description: "3rd meetup and we continued to become bigger and better.",
    image: nov02Img,
  },
  {
    date: "3 Nov 2025",
    description: "Shree gave us her birthday party and afterwards we all continued our meetup the whole day as it were papers time and some of the students were free and some bunked the classes haha..",
    image: nov03Img,
  },
  {
    date: "4 Nov 2025",
    description: "We did Chai pr Charcha, where Gaurav mentored the juniors regarding DSA, career and what to do. By the way, Team Treat is from Manik Side.",
    image: nov04Img,
  },
  {
    date: "5 Nov 2025",
    description: "We connect over chai, where Paridhi introduced her friends, and Sambhav called his friends, and here we go. We ended up having a small meetup again at the food court.",
    image: nov05Img,
  },
  {
    date: "6 Nov 2025",
    description: "Manik, Sarang, and Paridhi from Letz Connect attended Assocham MSME Conclave and also went to Bird Park.",
    image: nov06Img,
  },
  {
    date: "7 Nov 2025",
    description: "Guess what, we ended up doing a small meetup during the 1st day of Parivartan 2k25 where Gagandeep got the guidance regarding GDG club from Manik, and also brought his friends. And with this, they also joined our family.",
    image: nov07Img,
  },
  {
    date: "8 Nov 2025",
    description: "So many members (15+) of our family went to attended Devfest Chandigarh at SVIET and had so much fun. Later on, Sarang and Manik met Mishti, and afterwards, Rahul, Ranvir, and Sambhav, and danced for the night.",
    image: nov08Img,
  },
  {
    date: "11 Nov 2025",
    description: "Small meetup in the canteen of block 10 during break time, where Manik, along with Kashish, guided Jashn and Vanshika while distributing the T-shirts of Devfest Chandigarh. Aarti also gifted Manik a box full of thekua :)",
    image: nov11Img,
  },
  {
    date: "20 Nov 2025",
    description: "Small impromptu meetup at the food court, where we finally have Samridhi joining us, the only Google Women Engineer Scholar from our college, and we talked over pasta :)",
    image: nov20Img,
  },
  {
    date: "21 Nov 2025",
    description: "Shree and Kamakshi got the guidance from Manik regarding Life, Career and How to Make the most out of college. Soon Paridhi and Nishika also joined them.",
    image: nov21Img,
  },
  {
    date: "22 Nov 2025",
    description: "Shree, Ishita, Kamakshi and Haider attended Pecfest in Punjab Engineering College.",
    image: nov22Img,
  },
  {
    date: "24 Nov 2025",
    description: "Sarang and Manik Guided Ishita regarding building presence and getting exposure, outside of the college, and getting involved in global-level communities. Soon, Lovneet, Haider, Meenu, Prabhjot, and Sampark joined, and we all played Truth and Dare and had so much fun.",
    image: nov24Img,
  },
  {
    date: "29 Nov 2025",
    description: "We welcomed Sahil, Tanav, and Jashan in our community, and finally, Manik, Ayush, Sahil, and Tanav were able to have their Twitter meetup after being connected virtually.",
    image: nov29TwitterImg,
  },
  {
    date: "29 Nov 2025",
    description: "Paridhi, Nishika from Letz Connect attended Devfest Jalandhar along with their friends.",
    image: nov29DevfestImg,
  },
  {
    date: "20 Dec 2025",
    description: "Shree and Ishita attended the Graduation Ceremony of the 2025 Batch where Manik connected them with his super cool seniors.",
    image: dec20Img,
  },
  {
    date: "9 Jan 2026",
    description: "The largest gathering of Letz Connect since its inception where 40+ students joined us. Many new members also joined our family.",
    image: jan09Img,
  },
  {
    date: "13 Jan 2026",
    description: "On the occasion of Lohri at Central Park, Mehul introduced Aksheeta to Manik who was with Yashi, Swagita and Himanshi. We ended up doing an impromptu meetup joined by Rahul, Sharan, Vishesh, Chirag, Simar, Vrinda, and Ishita. We discussed career, networking, and everyone introduced each other.",
    image: jan13LohriImg,
  },
  {
    date: "13 Jan 2026",
    description: "Manik guided Aksheeta, Simar and Chirag for an hour or so and along the way they met Zareen and Pragyansh at Aashique Chowk. After introducing them to Zareen, they moved on. They all had an amazing time together.",
    image: jan13MentorshipImg,
  },
  {
    date: "13 Jan 2026",
    description: "Shree, Sampark, Jyotika, Ishita, and Manik at Parivartan ground connected, laughed, and shared their problems and perspectives. Sampark complimented Manik for his hairs which made him very happy and with this the day ended with positive vibes.",
    image: jan13ParivartanImg,
  },
  {
    date: "13 Jan 2026",
    description: "Manik met Rahul, Sharan, and Vishesh at Central Park where they were recording a podcast, and Manik connected them with Bhagya and a lot of other folks.",
    image: jan13PodcastImg,
  },
  {
    date: "15 Jan 2026",
    description: "Simar, Meenu, Prabhjot, and Manik attended the Arise Summit in the auditorium. Manik guided all of them on the power of observation and the good communities to be a part of, and they had an amazing time. He had a particularly good time with Prabhjot, where she taught him Punjabi and shared her funny experiences, and with Simar, who finally clicked a group picture.",
    image: jan15AriseImg,
  },
  {
    date: "16 Jan 2026",
    description: "The 2nd Day of the Arise Summit was attended by Aashi, Gaurav, Sarang, Manik, Meenu, and Prabhjot. They all enjoyed the day, especially the expressions and fun moments of Amrish Sir, and the summit ended with Manik and Sarang asking questions from the panelists.",
    image: jan16AriseImg,
  },
  {
    date: "16 Jan 2026",
    description: "While Manik was not able to arrive on time as he was in the auditorium and got free by 1:30, 10 minutes late. He was super happy to see so many people sitting together and also found Simar and Aksheeta who was going back as they felt awkward because they don't know anyone but Manik took them in the meetup and they all for the first time played an interactive activity which they all enjoyed and got to know about one another.",
    image: jan16MeetupImg,
  },
  {
    date: "17 Jan 2026",
    description: "Manik, Aditya, and Purv went on early morning mini trip to sukhna lake and Nature Trail and had fun plus adventure.",
    image: jan17SukhnaImg,
  },
  {
    date: "17 Jan 2026",
    description: "Manik went to the Art Museum after saying bye to Aditya and Purv, and there he met the fellow members of Letz Connect - Harshita, Eva, Daivik, and Gagandeep, surprisingly. They all had a short convo and then continued the beauty in the old sculptures and paintings.",
    image: jan17MuseumImg,
  },
];
// Reverse the events so latest appears first, then take first 10 for homepage
const homepageEvents = [...allEvents].reverse().slice(0, 10);

export const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Every moment that shaped Letz Connect
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {homepageEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card border border-border rounded-2xl p-5 overflow-hidden">
                      <div className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className={`flex items-center gap-2 text-primary font-semibold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        {event.image && (
                          <img
                            src={event.image}
                            alt={`Letz Connect - ${event.date}`}
                            className="w-full h-auto max-h-80 object-contain rounded-lg bg-muted"
                          />
                        )}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full"
            >
              <Link to="/timeline">
                View Complete Journey ({allEvents.length} moments)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
