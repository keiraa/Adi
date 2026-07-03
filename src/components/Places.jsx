import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "./ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const places = [
  {
    title: "Warangal Fort",
    img: `${import.meta.env.BASE_URL}warangal_fort.jpg`,
    desc: "Warangal Fort, sagam koolipoyindhi guys.\nArchitecture students ki edho ardhamayyindhi.\nManaki maatram rallu rappalu kanapadday.",
    caption: "Kakatiya samrajyam gurthuga migilina charitra.",
  },
  {
    title: "Thousand Pillar Temple",
    img: `${import.meta.env.BASE_URL}thousand_pillar_temple.jpg`,
    desc: "Thousand Pillars!!\nCount cheyyataniki try chesam guys.\n10 varake vacchay.\nTharuvatha unde untay le ani vadhilesam.",
    caption: "Shilpakala ki oka adbhutha udaharanam.",
  },
  {
    title: "Ramappa Temple",
    img: `${import.meta.env.BASE_URL}ramappa_temple.jpg`,
    desc: "Dheeniki pedha kadhe undhi guys!!\nMana friends andharu velle antha varaku oppukole kadha assalu.\nRest kooda theesukole.\nEnda manduthunna pattudhala tho vellam.",
    caption: "Telangana garvamga nilichina UNESCO varasatva kshetram.",
  },
];

export default function Places() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="story-section">
      <div className="section-heading">
        <p className="eyebrow">Warangal places</p>
        <h2 ref={titleRef}>A few stops, a lot of stories.</h2>
      </div>

      <div className="cards-grid places-grid">
        {places.map((place, index) => (
          <article key={place.title} ref={(el) => (cardsRef.current[index] = el)} className="glass-card place-card">
            <div className="place-image-wrap">
              <ImageWithFallback src={place.img} alt={place.title} className="card-image place-image" />
            </div>
            <div className="card-body">
              <h3>{place.title}</h3>
              <p className="place-desc">{place.desc}</p>
              <span>{place.caption}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}