import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Calendar, MapPin, ExternalLink, Globe, Building } from "lucide-react";

interface Event {
  name: string;
  type: string;
  location: string;
  date: string;
  link: string;
}

const EventsPage = () => {
  const upcomingEvents: Event[] = [
    {
      name: "AI for Impact Summit",
      type: "Summit",
      location: "Delhi",
      date: "16 - 20 Feb 2026",
      link: "https://impact.indiaai.gov.in/",
    },
    {
      name: "Hack N Win 3.0",
      type: "Hackathon",
      location: "CGC University Mohali",
      date: "7, 8 March 2026",
      link: "https://hacknwin-3.devfolio.co/",
    },
  ];

  return (
    <div className="smooth-scroll">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  🎉 Upcoming Events
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Exciting opportunities for our community members to participate, learn, and grow
                </p>
              </div>

              {/* Events List */}
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Event Info */}
                      <div className="space-y-4 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {event.type}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-display font-bold">
                          {event.name}
                        </h2>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity shrink-0"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
                  </div>
                ))}
              </div>

              {/* Info Card */}
              <div className="bg-muted/50 border border-border rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  We feature events happening in college and around the world that our community members can participate in. 
                  Have an event to share? Let us know!
                </p>
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

export default EventsPage;
