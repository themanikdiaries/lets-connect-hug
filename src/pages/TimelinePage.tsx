import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Calendar, ArrowUpDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
import jan19SpeakingImg from "@/assets/timeline/jan-19-speaking.jpg";
import jan19ChaiImg from "@/assets/timeline/jan-19-chai.jpg";
import jan20SamosaImg from "@/assets/timeline/jan-20-samosa.jpg";
import jan22TechsprintImg from "@/assets/timeline/jan-22-techsprint.jpg";
import jan23MeetupImg from "@/assets/timeline/jan-23-meetup.jpg";
import jan26ShimlaImg from "@/assets/timeline/jan-26-shimla.jpg";
import jan27SpeakingImg from "@/assets/timeline/jan-27-speaking.jpg";
import jan30ActivityImg from "@/assets/timeline/jan-30-activity.jpg";
import feb02TechsprintImg from "@/assets/timeline/feb-02-techsprint.jpg";
import feb03SpeakingImg from "@/assets/timeline/feb-03-speaking.jpg";
import feb06MeetupImg from "@/assets/timeline/feb-06-meetup.jpg";
import feb07MongodbImg from "@/assets/timeline/feb-07-mongodb.jpg";
import feb07CarnivalImg from "@/assets/timeline/feb-07-carnival.jpg";
import feb07JammingImg from "@/assets/timeline/feb-07-jamming.jpg";
import feb08FloralImg from "@/assets/timeline/feb-08-floral.jpg";
import feb08CarnivalImg from "@/assets/timeline/feb-08-carnival.jpg";
import feb09SpeakingImg from "@/assets/timeline/feb-09-speaking.jpg";
import feb09AisummitImg from "@/assets/timeline/feb-09-aisummit.jpg";
import feb12TechtalkImg from "@/assets/timeline/feb-12-techtalk.jpg";
import feb12GirlsImg from "@/assets/timeline/feb-12-girls.jpg";
import feb13SwotImg from "@/assets/timeline/feb-13-swot.jpg";
import feb15RedfortImg from "@/assets/timeline/feb-15-redfort.jpg";
import feb15IndiaGateImg from "@/assets/timeline/feb-15-indiagate.jpg";
import feb15MetroImg from "@/assets/timeline/feb-15-metro.jpg";
import feb16ImpromptuImg from "@/assets/timeline/feb-16-impromptu.jpg";
import feb17DelhiImg from "@/assets/timeline/feb-17-delhi.jpg";
import feb27HaiderImg from "@/assets/timeline/feb-27-haider.jpg";
import mar03HoliImg from "@/assets/timeline/mar-03-holi.jpg";
import mar05GirlsImg from "@/assets/timeline/mar-05-girls.jpg";
import mar06MeetupImg from "@/assets/timeline/mar-06-meetup.jpg";
import mar07HacknwinImg from "@/assets/timeline/mar-07-hacknwin.jpg";
import mar07ArtfestImg from "@/assets/timeline/mar-07-artfest.jpg";
import mar07Hacknwin2Img from "@/assets/timeline/mar-07-hacknwin2.jpg";
import mar09GitinfinityImg from "@/assets/timeline/mar-09-gitinfinity.jpg";
import mar09AvenuetalkImg from "@/assets/timeline/mar-09-avenuetalk.jpg";
import mar09ParkImg from "@/assets/timeline/mar-09-park.jpg";
import mar11CanteenImg from "@/assets/timeline/mar-11-canteen.jpg";
import mar13MeetupImg from "@/assets/timeline/mar-13-meetup.jpg";
import mar15SummitImg from "@/assets/timeline/mar-15-summit.jpg";
import mar16SpeakingImg from "@/assets/timeline/mar-16-speaking.jpg";
import mar18InnotechImg from "@/assets/timeline/mar-18-innotech.jpg";
import mar18EapImg from "@/assets/timeline/mar-18-eap.jpg";
import mar19GirlsmeetupImg from "@/assets/timeline/mar-19-girlsmeetup.jpg";
import mar20OdysseyImg from "@/assets/timeline/mar-20-odyssey.jpg";
import mar20RainyImg from "@/assets/timeline/mar-20-rainy.jpg";
import mar24CollabImg from "@/assets/timeline/mar-24-collab.jpg";
import mar27NandiniImg from "@/assets/timeline/mar-27-nandini.jpg";

interface TimelineEvent {
  date: string;
  description: string;
  image?: string;
}

const TimelinePage = () => {
  const [isReversed, setIsReversed] = useState(true);

  const eventsChronological: TimelineEvent[] = [
    { date: "17 Oct 2025", description: "1st ever meetup of Letz Connect. From thinking whether someone will come to seeing so many people joining us. This is the beginning of something big and truly special.", image: oct17Img },
    { date: "31 Oct 2025", description: "To be continued, some new people joined us.", image: oct31Img },
    { date: "2 Nov 2025", description: "3rd meetup and we continued to become bigger and better.", image: nov02Img },
    { date: "3 Nov 2025", description: "Shree gave us her birthday party and afterwards we all continued our meetup the whole day.", image: nov03Img },
    { date: "4 Nov 2025", description: "We did Chai pr Charcha, where Gaurav mentored the juniors regarding DSA, career and what to do.", image: nov04Img },
    { date: "5 Nov 2025", description: "We connect over chai, where Paridhi introduced her friends, and Sambhav called his friends.", image: nov05Img },
    { date: "6 Nov 2025", description: "Manik, Sarang, and Paridhi attended Assocham MSME Conclave and also went to Bird Park.", image: nov06Img },
    { date: "7 Nov 2025", description: "We ended up doing a small meetup during the 1st day of Parivartan 2k25.", image: nov07Img },
    { date: "8 Nov 2025", description: "15+ members attended Devfest Chandigarh at SVIET and had so much fun.", image: nov08Img },
    { date: "11 Nov 2025", description: "Small meetup in the canteen of block 10 during break time.", image: nov11Img },
    { date: "20 Nov 2025", description: "Small impromptu meetup at the food court with Samridhi, the Google Women Engineer Scholar.", image: nov20Img },
    { date: "21 Nov 2025", description: "Shree and Kamakshi got guidance from Manik regarding Life, Career and college.", image: nov21Img },
    { date: "22 Nov 2025", description: "Shree, Ishita, Kamakshi and Haider attended Pecfest in Punjab Engineering College.", image: nov22Img },
    { date: "24 Nov 2025", description: "Sarang and Manik guided Ishita regarding building presence and exposure. We all played Truth and Dare.", image: nov24Img },
    { date: "29 Nov 2025", description: "We welcomed Sahil, Tanav, and Jashan. Manik, Ayush, Sahil, and Tanav had their Twitter meetup.", image: nov29TwitterImg },
    { date: "29 Nov 2025", description: "Paridhi, Nishika attended Devfest Jalandhar along with their friends.", image: nov29DevfestImg },
    { date: "20 Dec 2025", description: "Shree and Ishita attended the Graduation Ceremony of the 2025 Batch.", image: dec20Img },
    { date: "9 Jan 2026", description: "The largest gathering of Letz Connect since its inception where 40+ students joined us.", image: jan09Img },
    { date: "13 Jan 2026", description: "On the occasion of Lohri at Central Park, an impromptu meetup happened.", image: jan13LohriImg },
    { date: "13 Jan 2026", description: "Manik guided Aksheeta, Simar and Chirag for an hour at Aashique Chowk.", image: jan13MentorshipImg },
    { date: "13 Jan 2026", description: "Shree, Sampark, Jyotika, Ishita, and Manik at Parivartan ground.", image: jan13ParivartanImg },
    { date: "13 Jan 2026", description: "Manik met Rahul, Sharan, and Vishesh recording a podcast at Central Park.", image: jan13PodcastImg },
    { date: "15 Jan 2026", description: "Simar, Meenu, Prabhjot, and Manik attended the Arise Summit.", image: jan15AriseImg },
    { date: "16 Jan 2026", description: "The 2nd Day of the Arise Summit was attended by Aashi, Gaurav, Sarang, Manik, Meenu, and Prabhjot.", image: jan16AriseImg },
    { date: "16 Jan 2026", description: "For the first time we played an interactive activity which everyone enjoyed.", image: jan16MeetupImg },
    { date: "17 Jan 2026", description: "Manik, Aditya, and Purv went on early morning mini trip to Sukhna Lake.", image: jan17SukhnaImg },
    { date: "17 Jan 2026", description: "Manik met Harshita, Eva, Daivik, and Gagandeep at the Art Museum.", image: jan17MuseumImg },
    { date: "19 Jan 2026", description: "We conducted our first public speaking circle with over 20 members.", image: jan19SpeakingImg },
    { date: "19 Jan 2026", description: "Ayush called for an impromptu chai pr charcha.", image: jan19ChaiImg },
    { date: "20 Jan 2026", description: "Mini samosa party as members got selected in different programs.", image: jan20SamosaImg },
    { date: "22 Jan 2026", description: "25+ members attended the Techsprint Speaker Session by GDG club.", image: jan22TechsprintImg },
    { date: "23 Jan 2026", description: "Weekly meetup in the EGD hall of CoE block due to weather.", image: jan23MeetupImg },
    { date: "26 Jan 2026", description: "1st trip to Shimla under 1k. 13 members went and had so much fun in the snow.", image: jan26ShimlaImg },
    { date: "27 Jan 2026", description: "#2 public speaking circle led by Jatin.", image: jan27SpeakingImg },
    { date: "30 Jan 2026", description: "With over 36 people, we played the problem-solving activity.", image: jan30ActivityImg },
    { date: "2 Feb 2026", description: "Members at Techsprint Final Phase by GDG Club. Highlight - Mindblowing Anchoring of Shree.", image: feb02TechsprintImg },
    { date: "3 Feb 2026", description: "#3 public speaking circle led by Ranvir with chit activities.", image: feb03SpeakingImg },
    { date: "6 Feb 2026", description: "A very special meetup discussing societal problems. Brave members shared their experiences.", image: feb06MeetupImg },
    { date: "7 Feb 2026", description: "Members at MongoDB User Group Chandigarh Meetup. Haider won a prize.", image: feb07MongodbImg },
    { date: "7 Feb 2026", description: "Manik, Haider and Abhinav went to Mohali Carnival. Manik overcame his fear on a ride.", image: feb07CarnivalImg },
    { date: "7 Feb 2026", description: "Live Jamming at Chai By Engineer. They spent 3 hours and came back at 1am.", image: feb07JammingImg },
    { date: "8 Feb 2026", description: "Floral fest at Panjab University with Shree, Ishita, Haider, Mehakdeep, Lakshita, and Jashan.", image: feb08FloralImg },
    { date: "8 Feb 2026", description: "After the fest, they went to the Mohali carnival and the horror house.", image: feb08CarnivalImg },
    { date: "9 Feb 2026", description: "#4 public speaking circle led by Ishita with emoji storytelling.", image: feb09SpeakingImg },
    { date: "9 Feb 2026", description: "Members at AI for Atmanirbhar Bharat pre summit event.", image: feb09AisummitImg },
    { date: "12 Feb 2026", description: "20+ members attended Tech Talk 2.0 by Fusion Club featuring Gate Smashers.", image: feb12TechtalkImg },
    { date: "12 Feb 2026", description: "#2nd Girls Meetup - The brave girls owned Tech Talk 2.0.", image: feb12GirlsImg },
    { date: "13 Feb 2026", description: "SWOT analysis meetup. Everyone discussed their strengths, weaknesses, opportunities and threats — their strength could be someone's dream.", image: feb13SwotImg },
    { date: "15 Feb 2026", description: "We owned the Red Fort! Yash, Yanshaj, Yashika, Suryansh and Manik posing the iconic pose of Akshay Kumar.", image: feb15RedfortImg },
    { date: "15 Feb 2026", description: "We are at India Gate, enjoying, clicking pictures, and racing on the track. Those memorable days :)", image: feb15IndiaGateImg },
    { date: "15 Feb 2026", description: "Struggling in the overfilled Delhi Metro :) Yashika being claustrophobic, survived the experience!", image: feb15MetroImg },
    { date: "16 Feb 2026", description: "An impromptu meetup of our members :)", image: feb16ImpromptuImg },
    { date: "17 Feb 2026", description: "On the streets of Delhi after visiting Akshardham. Beautiful experience with grand infrastructure and amazing water show.", image: feb17DelhiImg },
    { date: "27 Feb 2026", description: "Haider bagged 1st position under coding category in National Science Day Competition and won 15k cash prize. Congratulations!", image: feb27HaiderImg },
    { date: "3 Mar 2026", description: "One of the best days — we played Holi, danced, vibed together. Manik played Holi after a decade :)", image: mar03HoliImg },
    { date: "5 Mar 2026", description: "The brave girls of our community connected with each other, and had a wonderful time :)", image: mar05GirlsImg },
    { date: "6 Mar 2026", description: "A great meetup where we connected, exchanged ideas, and strengthened our bond.", image: mar06MeetupImg },
    { date: "7 Mar 2026", description: "Manik met Paridhi, Ishan, Ishav, Dhruv, and Harsh at CGC University during Hack N Win 3.0 Hackathon.", image: mar07HacknwinImg },
    { date: "7 Mar 2026", description: "They all were roaming in the art fest in the book zone :)", image: mar07ArtfestImg },
    { date: "7 Mar 2026", description: "At Hack N Win 3.0 — Haider, Ishita, Jashan as hackers, Swagita, Heena, Harsh and Himanshi for Build with AI, and Manik as coordinator :)", image: mar07Hacknwin2Img },
    { date: "9 Mar 2026", description: "Rocking at GitInfinity event! Everyone got GitHub goodies. Lovneet collected the most ^^", image: mar09GitinfinityImg },
    { date: "9 Mar 2026", description: "Manik having conversation with Aditya, Shourya and Ayush regarding Avenue Ticket at GitInfinity.", image: mar09AvenuetalkImg },
    { date: "9 Mar 2026", description: "Met in the kindergarten park with a new member joining. Valuable discussion where everyone connected.", image: mar09ParkImg },
    { date: "11 Mar 2026", description: "Random catch up in the CoE canteen :)", image: mar11CanteenImg },
    { date: "13 Mar 2026", description: "Another great meetup — connected, exchanged ideas, and strengthened our bond :)", image: mar13MeetupImg },
    { date: "15 Mar 2026", description: "Manik, Manya, and Sunidhi attended Progressive Punjab Investor Summit Day 3. Free food, goodies, and meetings with founders.", image: mar15SummitImg },
    { date: "16 Mar 2026", description: "A vibrant day of connection and public speaking — sharing weaknesses and improvement plans.", image: mar16SpeakingImg },
    { date: "18 Mar 2026", description: "Ayush, Shourya, Aditya and Shreya pitched at Inno-Tech at Pushpa Gujral Science City, Jalandhar — got 3rd prize!", image: mar18InnotechImg },
    { date: "18 Mar 2026", description: "Lovneet, Aditya, Manik, and Daksh attended Entrepreneurship Awareness Program by RISE department.", image: mar18EapImg },
    { date: "19 Mar 2026", description: "Our special Thursday girls only meetup at Canteen 2 with chit activity :) Beautiful and fun indeed.", image: mar19GirlsmeetupImg },
    { date: "20 Mar 2026", description: "We took over Odyssey by ACM club! Aashi, Nishant, Gaurav and Manik bagged 1st, juniors Divanshi, Lovneet and Harsh got 2nd in Techtonic Talks :)", image: mar20OdysseyImg },
    { date: "20 Mar 2026", description: "Despite pleasant rainy weather, we met in the food court area and had a great time.", image: mar20RainyImg },
    { date: "24 Mar 2026", description: "Divansh from SVIET came for a collaboration for their hackathon promotion. Met Sarang, Abhinav, Gaurav and Manik.", image: mar24CollabImg },
    { date: "27 Mar 2026", description: "We welcomed Nandini! Discussed hackathons, GDG history, Build with AI Bootcamp by Google, and Dev shared his idea :)", image: mar27NandiniImg },
  ];

  const events = isReversed ? [...eventsChronological].reverse() : eventsChronological;

  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <section id="timeline" className="py-16 bg-gradient-sunset">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Our Complete Journey
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every moment that shaped Letz Connect
                </p>
                
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsReversed(!isReversed);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="gap-2"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                    {isReversed ? "Showing Latest First" : "Showing Oldest First"}
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

                <div className="space-y-8">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10" />
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TimelinePage;
