import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Vision */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold">The Future</h3>
            <p className="text-lg text-background/80 leading-relaxed">
              We imagine Letz Connect across campuses — a trusted circle for every
              student. A campus where no one begins alone.
            </p>
          </div>

          {/* Bring to your college */}
          <div className="max-w-md mx-auto">
            <Card className="p-6 space-y-4 bg-background/5 border-background/20">
              <h4 className="font-semibold text-center">
                Bring Letz Connect to your college
              </h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="secondary">
                  I'm interested
                </Button>
              </div>
            </Card>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-background/20">
            {/* About */}
            <div className="space-y-3">
              <h4 className="font-semibold">About</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#movement" className="hover:text-background transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#formats" className="hover:text-background transition-colors">
                    How We Connect
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-background transition-colors">
                    Member Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div className="space-y-3">
              <h4 className="font-semibold">Get Involved</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Join as Member
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Become Ambassador
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Share Your Story
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@letzconnect.com"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current" /> by students, for students
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Card component used in footer
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);
