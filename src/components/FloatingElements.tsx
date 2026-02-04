import { Heart, Users, Sparkles, Star, Coffee, MessageCircle } from "lucide-react";

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-float-slow" />
      
      {/* Floating icons */}
      <div className="absolute top-20 left-[15%] animate-float">
        <div className="p-3 glass-card rounded-2xl shadow-lg">
          <Heart className="w-6 h-6 text-primary animate-glow" />
        </div>
      </div>
      
      <div className="absolute top-40 right-[10%] animate-float-delayed">
        <div className="p-3 glass-card rounded-2xl shadow-lg">
          <Users className="w-6 h-6 text-secondary" />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-[8%] animate-float-slow">
        <div className="p-3 glass-card rounded-2xl shadow-lg">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
      </div>
      
      <div className="absolute top-[60%] right-[15%] animate-float">
        <div className="p-3 glass-card rounded-2xl shadow-lg">
          <Coffee className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-[25%] animate-float-delayed">
        <div className="p-3 glass-card rounded-2xl shadow-lg">
          <MessageCircle className="w-5 h-5 text-secondary" />
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-[30%] w-12 h-12 bg-gradient-warm rounded-xl rotate-12 opacity-30 animate-float" />
      <div className="absolute bottom-48 left-[20%] w-8 h-8 bg-secondary/40 rounded-full animate-float-delayed" />
      <div className="absolute top-[45%] left-[5%] w-6 h-6 bg-accent/30 rounded-lg rotate-45 animate-float-slow" />
      
      {/* Stars */}
      <Star className="absolute top-[30%] right-[5%] w-4 h-4 text-secondary/40 animate-pulse" />
      <Star className="absolute bottom-[35%] left-[12%] w-3 h-3 text-primary/40 animate-pulse" />
      <Star className="absolute top-[70%] right-[40%] w-5 h-5 text-accent/30 animate-pulse" />
    </div>
  );
};
