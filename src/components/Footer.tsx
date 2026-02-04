import { Phone, Heart, Users, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border py-16 mt-20 overflow-hidden">
      {/* 3D Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-warm opacity-10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary/15 rounded-full blur-[60px]" />
      
      {/* Floating 3D shapes */}
      <div className="absolute top-10 right-20 w-16 h-16 bg-gradient-warm rounded-2xl rotate-12 opacity-20 shadow-lg animate-float" />
      <div className="absolute bottom-20 left-16 w-12 h-12 bg-primary/30 rounded-full opacity-40 shadow-xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-secondary/40 rounded-lg rotate-45 opacity-30 animate-float-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Animated Icon Row */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 glass-card rounded-2xl shadow-lg transform hover:-translate-y-2 hover:shadow-glow transition-smooth">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 glass-card rounded-2xl shadow-lg transform hover:-translate-y-2 hover:shadow-glow transition-smooth">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div className="p-3 glass-card rounded-2xl shadow-lg transform hover:-translate-y-2 hover:shadow-glow transition-smooth">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <h3 className="text-2xl font-display font-semibold gradient-text">
            Why Join Letz Connect?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Connect with seniors who've walked your path, find friends who share your curiosity, 
            and build projects that matter. Whether you're seeking guidance, friendship, or just 
            a space to belong — Letz Connect is where your campus journey becomes richer, 
            warmer, and more meaningful.
          </p>
          
          {/* Contact Info - Enhanced */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">For inquiries, contact Manik:</span>
              <a 
                href="tel:+918059422804" 
                className="text-primary font-medium hover:underline"
              >
                +91 8059422804
              </a>
            </div>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            © 2026 Letz Connect. Built with ❤️ by Manik for helping his juniors and peers.
          </div>
        </div>
      </div>
    </footer>
  );
};
