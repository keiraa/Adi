import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "./ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const lines = ["Warangal.", "Konni places maps lo untayi.", "Konni memories lo."];

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const linesRef = useRef([]);
  const arrowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.1 });
      linesRef.current.forEach((line, index) => {
        tl.fromTo(line, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, index * 0.2 + 0.35);
      });
      tl.fromTo(arrowRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "+=0.2");

      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroRef.current, {
        opacity: 0.82,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 20%",
          end: "bottom -10%",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    document.querySelector(".story-flow")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={heroRef} className="hero-shell">
      <div className="film-grain" />
      <div ref={imageRef} className="hero-media">
        <div className="hero-backdrop">
          <ImageWithFallback
            src={`${import.meta.env.BASE_URL}warangal.jpg`}
            alt=""
            className="hero-backdrop-image"
          />
        </div>

        <ImageWithFallback
          src={`${import.meta.env.BASE_URL}warangal.jpg`}
          alt="Warangal city view"
          className="hero-image"
        />

        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="eyebrow">A travel memory</p>
        <h1 ref={titleRef} className="hero-title">
          Warangal.
        </h1>
        {lines.map((line, index) => (
          <p
            key={line}
            ref={(el) => {
              linesRef.current[index] = el;
            }}
            className="hero-copy"
          >
            {line}
          </p>
        ))}

        <div ref={arrowRef} className="scroll-indicator" onClick={handleScroll} role="button" tabIndex={0}>
          Scroll for the story
        </div>
      </div>
    </section>
  );
}