import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinClick = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("join");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#join");
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Members", path: "/members" },
    { label: "Achievements", path: "/achievements" },
    { label: "Events", path: "/events" },
    { label: "Timeline", path: "/timeline" },
    { label: "Gallery", path: "/gallery" },
    { label: "Feedbacks", path: "/voices" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-card py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors relative group"
            >
              <span className="relative z-10">Letz Connect</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 nav-link-underline px-2 py-1 ${
                    location.pathname === link.path
                      ? "text-foreground after:scale-x-100"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button
                onClick={handleJoinClick}
                size="sm"
                className="rounded-full shadow-warm hover:shadow-glow transition-smooth"
              >
                Join Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground glass rounded-xl transition-smooth hover:shadow-card"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}>
            <div className="glass-card rounded-2xl p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={handleJoinClick} className="w-full rounded-xl mt-2 shadow-warm">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
