export const EventPartner = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Event Platform Partner
          </p>
          <a
            href="https://www.goavo.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass-card rounded-2xl p-8 hover:shadow-glow transition-smooth group"
          >
            <img
              src="https://www.goavo.ai/logo.svg"
              alt="GoAvo.ai - Event Platform Partner"
              className="h-12 md:h-16 mx-auto opacity-80 group-hover:opacity-100 transition-opacity dark:invert"
            />
          </a>
          <p className="text-sm text-muted-foreground">
            Powering our events with GoAvo.ai
          </p>
        </div>
      </div>
    </section>
  );
};
