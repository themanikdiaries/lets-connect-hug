import { Calendar, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import firstGatheringImg from "@/assets/first-gathering.jpg";
import meetup3Img from "@/assets/meetup-3.jpg";
import gallery1Img from "@/assets/gallery-1.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      date: "17 Oct 2025",
      title: "First Ever Meetup",
      description: "1st ever meetup of Letz Connect. From thinking whether someone will come to seeing so many people joining us. This is the beginning of something big and truly special.",
      image: firstGatheringImg,
    },
    {
      date: "31 Oct 2025",
      title: "Growing Together",
      description: "To be continued, some new people joined us.",
      image: meetup3Img,
    },
    {
      date: "2 Nov 2025",
      title: "Bigger & Better",
      description: "3rd meetup and we continued to become bigger and better.",
    },
    {
      date: "3 Nov 2025",
      title: "Shree's Birthday Celebration",
      description: "Shree gave us her birthday party and afterwards we all continued our meetup the whole day as it were papers time and some of the students were free and some bunked the classes haha..",
    },
    {
      date: "4 Nov 2025",
      title: "Chai pr Charcha",
      description: "We did Chai pr Charcha, where Gaurav mentored the juniors regarding DSA, career and what to do. By the way, Team Treat is from Manik Side",
    },
    {
      date: "5 Nov 2025",
      title: "Connect over Chai",
      description: "We connect over chai, where Paridhi introduced her friends, and Sambhav called his friends, and here we go. We ended up having a small meetup again at the food court.",
    },
    {
      date: "6 Nov 2025",
      title: "Assocham MSME Conclave",
      description: "Manik, Sarang, and Paridhi from Letz Connect attended Assocham MSME Conclave and also went to Bird Park.",
    },
    {
      date: "7 Nov 2025",
      title: "Parivartan 2k25 Meetup",
      description: "Guess what, we ended up doing a small meetup during the 1st day of Parivartan 2k25 where Gagandeep got the guidance regarding GDG club from Manik, and also brought his friends. And with this, they also joined our family.",
    },
    {
      date: "8 Nov 2025",
      title: "Devfest Chandigarh",
      description: "So many members (15+) of our family went to attended Devfest Chandigarh at SVIET and had so much fun. Later on, Sarang and Manik met Mishti, and afterwards, Rahul, Ranvir, and Sambhav, and danced for the night.",
      image: gallery1Img,
    },
    {
      date: "11 Nov 2025",
      title: "Block 10 Canteen Meetup",
      description: "Small meetup in the canteen of block 10 during break time, where Manik, along with Kashish, guided Jashn and Vanshika while distributing the T-shirts of Devfest Chandigarh. Aarti also gifted Manik a box full of thekua :)",
    },
    {
      date: "20 Nov 2025",
      title: "Samridhi Joins",
      description: "Small impromptu meetup at the food court, where we finally have Samridhi joining us, the only Google Women Engineer Scholar from our college, and we talked over pasta :)",
    },
    {
      date: "21 Nov 2025",
      title: "Career Guidance Session",
      description: "Shree and Kamakshi got the guidance from Manik regarding Life, Career and How to Make the most out of college. Soon Paridhi and Nishika also joined them.",
    },
    {
      date: "22 Nov 2025",
      title: "Pecfest at PEC",
      description: "Shree, Ishita, Kamakshi and Haider attended Pecfest in Punjab Engineering College.",
    },
    {
      date: "24 Nov 2025",
      title: "Truth and Dare",
      description: "Sarang and Manik Guided Ishita regarding building presence and getting exposure, outside of the college, and getting involved in global-level communities. Soon, Lovneet, Haider, Meenu, Prabhjot, and Sampark joined, and we all played Truth and Dare and had so much fun.",
    },
    {
      date: "29 Nov 2025",
      title: "Twitter Meetup",
      description: "We welcomed Sahil, Tanav, and Jashan in our community, and finally, Manik, Ayush, Sahil, and Tanav were able to have their Twitter meetup after being connected virtually.",
    },
    {
      date: "29 Nov 2025",
      title: "Devfest Jalandhar",
      description: "Paridhi, Nishika from Letz Connect attended Devfest Jalandhar along with their friends.",
    },
    {
      date: "20 Dec 2025",
      title: "Graduation Ceremony",
      description: "Shree and Ishita attended the Graduation Ceremony of the 2025 Batch where Manik connected them with his super cool seniors.",
    },
    {
      date: "9 Jan 2026",
      title: "Largest Gathering",
      description: "The largest gathering of Letz Connect since its inception where 40+ students joined us. Many new members also joined our family.",
    },
  ];

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
              {events.map((event, index) => (
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
                    <Card className="p-5 shadow-card hover:shadow-hover transition-all hover-lift bg-card">
                      <div className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className={`flex items-center gap-2 text-primary font-semibold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <h3 className="text-lg font-display font-semibold">
                          {event.title}
                        </h3>
                        {event.image && (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        )}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
