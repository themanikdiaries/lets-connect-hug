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

// Export all timeline images for use in gallery
export const TIMELINE_IMAGES = [
  oct17Img, oct31Img, nov02Img, nov03Img, nov04Img, nov05Img, nov06Img, nov07Img,
  nov08Img, nov11Img, nov20Img, nov21Img, nov22Img, nov24Img, nov29TwitterImg,
  nov29DevfestImg, dec20Img, jan09Img, jan13LohriImg, jan13MentorshipImg,
  jan13ParivartanImg, jan13PodcastImg, jan15AriseImg, jan16AriseImg,
  jan16MeetupImg, jan17SukhnaImg, jan17MuseumImg, jan19SpeakingImg, jan19ChaiImg,
  jan20SamosaImg, jan22TechsprintImg, jan23MeetupImg, jan26ShimlaImg,
  jan27SpeakingImg, jan30ActivityImg, feb02TechsprintImg, feb03SpeakingImg,
  feb06MeetupImg, feb07MongodbImg, feb07CarnivalImg, feb07JammingImg,
  feb08FloralImg, feb08CarnivalImg, feb09SpeakingImg, feb09AisummitImg,
  feb12TechtalkImg, feb12GirlsImg, feb13SwotImg, feb15RedfortImg,
  feb15IndiaGateImg, feb15MetroImg, feb16ImpromptuImg, feb17DelhiImg,
  feb27HaiderImg, mar03HoliImg, mar05GirlsImg, mar06MeetupImg,
  mar07HacknwinImg, mar07ArtfestImg, mar07Hacknwin2Img, mar09GitinfinityImg,
  mar09AvenuetalkImg, mar09ParkImg, mar11CanteenImg, mar13MeetupImg,
  mar15SummitImg, mar16SpeakingImg, mar18InnotechImg, mar18EapImg,
  mar19GirlsmeetupImg, mar20OdysseyImg, mar20RainyImg, mar24CollabImg,
  mar27NandiniImg
];

// All timeline events
const allEvents: TimelineEvent[] = [
  { date: "17 Oct 2025", description: "1st ever meetup of Letz Connect. From thinking whether someone will come to seeing so many people joining us. This is the beginning of something big and truly special.", image: oct17Img },
  { date: "31 Oct 2025", description: "To be continued, some new people joined us.", image: oct31Img },
  { date: "2 Nov 2025", description: "3rd meetup and we continued to become bigger and better.", image: nov02Img },
  { date: "3 Nov 2025", description: "Shree gave us her birthday party and afterwards we all continued our meetup the whole day as it were papers time and some of the students were free and some bunked the classes haha..", image: nov03Img },
  { date: "4 Nov 2025", description: "We did Chai pr Charcha, where Gaurav mentored the juniors regarding DSA, career and what to do. By the way, Team Treat is from Manik Side.", image: nov04Img },
  { date: "5 Nov 2025", description: "We connect over chai, where Paridhi introduced her friends, and Sambhav called his friends, and here we go. We ended up having a small meetup again at the food court.", image: nov05Img },
  { date: "6 Nov 2025", description: "Manik, Sarang, and Paridhi from Letz Connect attended Assocham MSME Conclave and also went to Bird Park.", image: nov06Img },
  { date: "7 Nov 2025", description: "Guess what, we ended up doing a small meetup during the 1st day of Parivartan 2k25 where Gagandeep got the guidance regarding GDG club from Manik, and also brought his friends. And with this, they also joined our family.", image: nov07Img },
  { date: "8 Nov 2025", description: "So many members (15+) of our family went to attended Devfest Chandigarh at SVIET and had so much fun. Later on, Sarang and Manik met Mishti, and afterwards, Rahul, Ranvir, and Sambhav, and danced for the night.", image: nov08Img },
  { date: "11 Nov 2025", description: "Small meetup in the canteen of block 10 during break time, where Manik, along with Kashish, guided Jashn and Vanshika while distributing the T-shirts of Devfest Chandigarh. Aarti also gifted Manik a box full of thekua :)", image: nov11Img },
  { date: "20 Nov 2025", description: "Small impromptu meetup at the food court, where we finally have Samridhi joining us, the only Google Women Engineer Scholar from our college, and we talked over pasta :)", image: nov20Img },
  { date: "21 Nov 2025", description: "Shree and Kamakshi got the guidance from Manik regarding Life, Career and How to Make the most out of college. Soon Paridhi and Nishika also joined them.", image: nov21Img },
  { date: "22 Nov 2025", description: "Shree, Ishita, Kamakshi and Haider attended Pecfest in Punjab Engineering College.", image: nov22Img },
  { date: "24 Nov 2025", description: "Sarang and Manik Guided Ishita regarding building presence and getting exposure, outside of the college, and getting involved in global-level communities. Soon, Lovneet, Haider, Meenu, Prabhjot, and Sampark joined, and we all played Truth and Dare and had so much fun.", image: nov24Img },
  { date: "29 Nov 2025", description: "We welcomed Sahil, Tanav, and Jashan in our community, and finally, Manik, Ayush, Sahil, and Tanav were able to have their Twitter meetup after being connected virtually.", image: nov29TwitterImg },
  { date: "29 Nov 2025", description: "Paridhi, Nishika from Letz Connect attended Devfest Jalandhar along with their friends.", image: nov29DevfestImg },
  { date: "20 Dec 2025", description: "Shree and Ishita attended the Graduation Ceremony of the 2025 Batch where Manik connected them with his super cool seniors.", image: dec20Img },
  { date: "9 Jan 2026", description: "The largest gathering of Letz Connect since its inception where 40+ students joined us. Many new members also joined our family.", image: jan09Img },
  { date: "13 Jan 2026", description: "On the occasion of Lohri at Central Park, Mehul introduced Aksheeta to Manik who was with Yashi, Swagita and Himanshi. We ended up doing an impromptu meetup joined by Rahul, Sharan, Vishesh, Chirag, Simar, Vrinda, and Ishita.", image: jan13LohriImg },
  { date: "13 Jan 2026", description: "Manik guided Aksheeta, Simar and Chirag for an hour or so and along the way they met Zareen and Pragyansh at Aashique Chowk.", image: jan13MentorshipImg },
  { date: "13 Jan 2026", description: "Shree, Sampark, Jyotika, Ishita, and Manik at Parivartan ground connected, laughed, and shared their problems and perspectives.", image: jan13ParivartanImg },
  { date: "13 Jan 2026", description: "Manik met Rahul, Sharan, and Vishesh at Central Park where they were recording a podcast, and Manik connected them with Bhagya and a lot of other folks.", image: jan13PodcastImg },
  { date: "15 Jan 2026", description: "Simar, Meenu, Prabhjot, and Manik attended the Arise Summit in the auditorium. Manik guided all of them on the power of observation and the good communities to be a part of.", image: jan15AriseImg },
  { date: "16 Jan 2026", description: "The 2nd Day of the Arise Summit was attended by Aashi, Gaurav, Sarang, Manik, Meenu, and Prabhjot. They all enjoyed the day.", image: jan16AriseImg },
  { date: "16 Jan 2026", description: "While Manik was not able to arrive on time, he was super happy to see so many people sitting together and they all for the first time played an interactive activity.", image: jan16MeetupImg },
  { date: "17 Jan 2026", description: "Manik, Aditya, and Purv went on early morning mini trip to sukhna lake and Nature Trail and had fun plus adventure.", image: jan17SukhnaImg },
  { date: "17 Jan 2026", description: "Manik went to the Art Museum and there he met the fellow members of Letz Connect - Harshita, Eva, Daivik, and Gagandeep, surprisingly.", image: jan17MuseumImg },
  { date: "19 Jan 2026", description: "We conducted our first public speaking circle and had over 20 members who wanted to improve their confidence.", image: jan19SpeakingImg },
  { date: "19 Jan 2026", description: "Ayush called for an impromptu chai pr charcha and some of the members joined him.", image: jan19ChaiImg },
  { date: "20 Jan 2026", description: "Lovneet, Shree, Ishita, and Jyotika gave a mini samosa party to Manik as they got selected in different Programs.", image: jan20SamosaImg },
  { date: "22 Jan 2026", description: "25+ members from Letz Connect attended the Speaker Session as part of the Techsprint organised by the GDG club.", image: jan22TechsprintImg },
  { date: "23 Jan 2026", description: "Due to the weather, we conducted our weekly meetup in the egd hall of the CoE block.", image: jan23MeetupImg },
  { date: "26 Jan 2026", description: "The Best Thing happened in Letz Connect. We had our 1st trip to Shimla under 1k. 13 members went and had so much fun in the snow.", image: jan26ShimlaImg },
  { date: "27 Jan 2026", description: "#2 public speaking circle led by Jatin where we had the activities to tell about our idol and to sell anything in 1 min.", image: jan27SpeakingImg },
  { date: "30 Jan 2026", description: "With over 36 people joining us, we played the activity where we have to find a problem around us with its solution.", image: jan30ActivityImg },
  { date: "2 Feb 2026", description: "Letz Connect Members at Techsprint Final Phase Organised By GDG Club. About 20+ members attended. Highlight - Mindblowing Anchoring of Shree.", image: feb02TechsprintImg },
  { date: "3 Feb 2026", description: "#3 public speaking circle led by Ranvir - where he came with some chits, everyone has to choose one and speak on the topic for a minute.", image: feb03SpeakingImg },
  { date: "6 Feb 2026", description: "This meetup was very special. We all gathered to discuss the societal problems that we faced or witnessed. Brave members shared their own experiences.", image: feb06MeetupImg },
  { date: "7 Feb 2026", description: "Letz Connect Members at MongoDB User Group Chandigarh Meetup. Haider also won a prize in a competition.", image: feb07MongodbImg },
  { date: "7 Feb 2026", description: "After attending the MongoDB event, Manik, Haider and Abhinav went to Mohali Carnival. Manik overcame his fear and also vlogged the entire ride.", image: feb07CarnivalImg },
  { date: "7 Feb 2026", description: "After the carnival, Abhinav, Sarang, Jashan, Haider and Manik went to the Live Jamming at Chai By Engineer. They spent 3 hours and came back at 1am.", image: feb07JammingImg },
  { date: "8 Feb 2026", description: "Manik, Shree, Ishita, Haider, Mehakdeep, Lakshita, and Jashan went to the Floral fest organised by Panjab University.", image: feb08FloralImg },
  { date: "8 Feb 2026", description: "After the fest, they went to the Mohali carnival and the horror house. They were filled with unforgettable memories.", image: feb08CarnivalImg },
  { date: "9 Feb 2026", description: "#4 public speaking circle led by Ishita, where everyone had to frame a story with the given set of emojis.", image: feb09SpeakingImg },
  { date: "9 Feb 2026", description: "Letz Connect Members at AI for Atmanirbhar Bharat - an official pre summit event of AI for Impact Summit.", image: feb09AisummitImg },
  { date: "12 Feb 2026", description: "20+ members attended Tech Talk 2.0 organised by Fusion Club. Proud moment seeing our members asking questions confidently in the Main Auditorium.", image: feb12TechtalkImg },
  { date: "12 Feb 2026", description: "#2nd Girls Meetup - The brave girls of Letz Connect owned Tech Talk 2.0 by being hyper interactive and confident.", image: feb12GirlsImg },
  { date: "13 Feb 2026", description: "Before the meetup, Manik shared the SWOT analysis template. They all discussed their SWOT and concluded the day by getting to know themselves better — their strength could be someone's dream.", image: feb13SwotImg },
  { date: "15 Feb 2026", description: "We owned the Red Fort by having super fun there. It was very big tbh :) Yash, Yanshaj, Yashika, Suryansh and Manik posing the iconic pose of Akshay Kumar.", image: feb15RedfortImg },
  { date: "15 Feb 2026", description: "We are at India Gate, enjoying, clicking pictures, and having fun with each other. We also raced on the track to India Gate, those memorable days :)", image: feb15IndiaGateImg },
  { date: "15 Feb 2026", description: "We are struggling to find space in the overfilled Delhi Metro :) It was a horrible experience yet a fun one. Yashika being claustrophobic, survived the experience :)", image: feb15MetroImg },
  { date: "16 Feb 2026", description: "An impromptu meetup of our members :)", image: feb16ImpromptuImg },
  { date: "17 Feb 2026", description: "We all on the streets of Delhi after visiting Akshardham. It was a beautiful experience witnessing the grand infrastructure and the amazing water show.", image: feb17DelhiImg },
  { date: "27 Feb 2026", description: "Haider bagged 1st position under coding category in National Science Day Competition and won 15k cash prize. Congratulations to him.", image: feb27HaiderImg },
  { date: "3 Mar 2026", description: "One of the best days at Letz Connect where we played Holi, danced, vibed together. What made it more special is that Manik played Holi after a decade :)", image: mar03HoliImg },
  { date: "5 Mar 2026", description: "The brave girls of our community connected with each other, and had a wonderful time :)", image: mar05GirlsImg },
  { date: "6 Mar 2026", description: "A great meetup where we connected, shared, and strengthened our bond.", image: mar06MeetupImg },
  { date: "7 Mar 2026", description: "Manik met Paridhi, Ishan, Ishav, Dhruv, and Harsh at CGC University during Hack N Win 3.0 Hackathon.", image: mar07HacknwinImg },
  { date: "7 Mar 2026", description: "They all were roaming in the art fest in the book zone :)", image: mar07ArtfestImg },
  { date: "7 Mar 2026", description: "We are at Hack N Win 3.0 where Haider, Ishita, Jashan came as hackers, Swagita, Heena, Harsh and Himanshi came for Build with AI, and Manik was the coordinator :)", image: mar07Hacknwin2Img },
  { date: "9 Mar 2026", description: "Rocking at GitInfinity event organised by electronics department club at Block 2 where they all got GitHub official goodies :) Lovneet collected the most ^^", image: mar09GitinfinityImg },
  { date: "9 Mar 2026", description: "Manik having conversation with Aditya, Shourya and Ayush regarding Avenue Ticket at GitInfinity event.", image: mar09AvenuetalkImg },
  { date: "9 Mar 2026", description: "They all met in the kindergarten park and a new member joined them :) As always it was a valuable discussion where everyone connected and shared something.", image: mar09ParkImg },
  { date: "11 Mar 2026", description: "Random catch up in the CoE canteen :)", image: mar11CanteenImg },
  { date: "13 Mar 2026", description: "Another of our great meetup where we connected with each other, exchanged ideas, and strengthened our bond :)", image: mar13MeetupImg },
  { date: "15 Mar 2026", description: "Manik, Manya, and Sunidhi attended Progressive Punjab Investor Summit Day 3 and had yummy free food and collected goodies alongside meeting founders, investors and politicians.", image: mar15SummitImg },
  { date: "16 Mar 2026", description: "A vibrant day when we connected, talked, and practiced public speaking, sharing about our weaknesses and how we have planned to improve ourselves.", image: mar16SpeakingImg },
  { date: "18 Mar 2026", description: "Ayush, Shourya, Aditya and Shreya went to pitch our project at Inno-Tech, a state level competition organised by Pushpa Gujral Science City, Jalandhar and got 3rd prize.", image: mar18InnotechImg },
  { date: "18 Mar 2026", description: "Lovneet, Aditya, Manik, and Daksh attended Entrepreneurship Awareness Program organised by RISE department where they learned a lot from Paramjit Singh, Director at RCED.", image: mar18EapImg },
  { date: "19 Mar 2026", description: "Our special Thursday girls only meetup at Canteen 2 where they all played chit activity :) It was a beautiful and fun one indeed.", image: mar19GirlsmeetupImg },
  { date: "20 Mar 2026", description: "We took over Odyssey organised by ACM club as Aashi, Nishant, Gaurav and Manik bagged 1st position and their juniors Divanshi, Lovneet and Harsh bagged 2nd position in Techtonic Talks :)", image: mar20OdysseyImg },
  { date: "20 Mar 2026", description: "Despite the pleasant rainy weather, we met in the food court area and had a great time talking to each other.", image: mar20RainyImg },
  { date: "24 Mar 2026", description: "Divansh from SVIET came for a collaboration with CGC Landran for the promotion of their hackathon where he met Sarang, Abhinav, Gaurav and Manik.", image: mar24CollabImg },
  { date: "27 Mar 2026", description: "We welcomed Nandini, a new member in the community. We discussed about hackathons, GDG history, Build with AI Bootcamp by Google, Dev shared his idea and overall it was a good catchup :)", image: mar27NandiniImg },
];

const homepageEvents = [...allEvents].reverse().slice(0, 3);

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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {homepageEvents.map((event, index) => (
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

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full">
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
