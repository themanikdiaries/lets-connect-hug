export const EventPartner = () => {
  const ecosystemPartners = [
    {
      name: "Aspire Institute",
      logo: "https://www.aspireleaders.org/wp-content/uploads/2023/09/Union.svg",
      url: "https://www.aspireleaders.org/",
    },
    {
      name: "Google for Developers",
      logo: "https://www.gstatic.com/devrel-devsite/prod/vb4124e0eb36966d1f5cf3a7ca116e70a424f5334bce4dd1449f7f3a599cf8e09/developers/images/lockup-new.svg",
      url: "https://developers.google.com/",
    },
    {
      name: "Devantra Innovations",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEMOIO4oZA1qQ/img-crop_100/B56ZprzQ5eHYAM-/0/1762745192768?e=2147483647&v=beta&t=kVbtoxFsR7KLlksDIQrUSsFVh6G99V5EHQsFtTFbaGk",
      url: "https://in.linkedin.com/company/devantra-community",
    },
    {
      name: "CognixAI Labs",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEWUnanT196SQ/company-logo_200_200/B56ZoH6UUZJoAI-/0/1761069320360?e=2147483647&v=beta&t=c7Z7vXJwbR0-9rSgV1Ui14b8UI7TsLY-jJfrRG1Q4cU",
      url: "https://www.cognixailabs.com/",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Event Platform Partner */}
          <div className="text-center space-y-6">
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

          {/* Ecosystem Partners */}
          <div className="text-center space-y-6">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Ecosystem Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {ecosystemPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 hover:shadow-glow transition-smooth group flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} - Ecosystem Partner`}
                    className="h-10 md:h-14 max-w-[160px] object-contain opacity-80 group-hover:opacity-100 transition-opacity dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
