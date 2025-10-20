import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Animate section headers
    gsap.utils.toArray<HTMLElement>("section h2").forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // Animate cards
    gsap.utils.toArray<HTMLElement>(".animate-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    // Animate fade-in elements
    gsap.utils.toArray<HTMLElement>(".animate-fade").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Parallax effect for decorative elements
    gsap.utils.toArray<HTMLElement>(".parallax").forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
