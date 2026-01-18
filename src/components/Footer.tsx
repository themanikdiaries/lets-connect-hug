import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-display font-semibold">
            Why Join Letz Connect?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Connect with seniors who've walked your path, find friends who share your curiosity, 
            and build projects that matter. Whether you're seeking guidance, friendship, or just 
            a space to belong — Letz Connect is where your campus journey becomes richer, 
            warmer, and more meaningful.
          </p>
          
          {/* Contact Info */}
          <div className="pt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>For any inquiries, contact Manik:</span>
            <a 
              href="tel:+918059422804" 
              className="text-primary font-medium hover:underline"
            >
              +91 8059422804
            </a>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            © 2026 Letz Connect. Built with ❤️ by Manik for helping his juniors and peers.
          </div>
        </div>
      </div>
    </footer>
  );
};
