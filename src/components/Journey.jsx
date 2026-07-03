import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "./Reveal";

const stops = [
  "View Bagundhi",
  "Kanchana Day.. Dhairyam Holiday",
  "Oka Long Route",
  "Ice Cream & Food Cheating",
  "Sodaa Chronicles",
  "Warangal Diaries",
  "Birthday Chapter",
  "To Be Continued..."
];

export default function Journey() {
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const trainRef = useRef(null);
    const stationRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || hasStarted) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setHasStarted(true);
            },
            { threshold: 0.2 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            gsap.set(pathRef.current, {
                strokeDasharray: 1600,
                strokeDashoffset: 1600,
            });

            tl.to(pathRef.current, { strokeDashoffset: 0, duration: 2.0 });
            tl.fromTo(
                trainRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6 },
                0
            );

            stops.forEach((_, index) => {
                const progress =
                    (index / Math.max(stops.length - 1, 1)) * 100;

                const stationTarget = isMobile
                    ? {
                        top: `${progress}%`,
                        left: "50%",
                    }
                    : {
                        left: `${progress}%`,
                        top: "50%",
                    };

                tl.to(trainRef.current, { duration: 1.0, ...stationTarget, ease: "power2.inOut" }, ">-0.1");
                tl.call(() => {
                    stationRefs.current.forEach((station, stationIndex) => {
                        if (!station) return;
                        const node = station.querySelector(".journey-node");
                        const card = station.querySelector(".journey-card");
                        const isReached = stationIndex <= index;
                        const isCurrent = stationIndex === index;

                        station.classList.toggle("journey-stop--active", isReached);
                        station.classList.toggle("journey-stop--reached", isCurrent);
                        node?.classList.toggle("active", isReached);
                        card?.classList.toggle("journey-card--active", isReached);
                        node?.classList.toggle("journey-node--reached", isCurrent);
                        card?.classList.toggle("journey-card--reached", isCurrent);
                    });
                }, [], ">-0.15");
                tl.fromTo(
                    stationRefs.current[index]?.querySelector(".journey-card"),
                    { opacity: 0, y: 24, scale: 0.96 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.2)" },
                    "<"
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [hasStarted, isMobile]);

    const initialTrainStyle = isMobile
        ? {
            top: "0%",
            left: "50%",
        }
        : {
            left: "0%",
            top: "50%",
        };

    return (
        <section ref={sectionRef} className="story-section journey-section">
            <Reveal className="section-heading">
                <p className="eyebrow">The route so far</p>
                <h2>Journey of the Beginning</h2>
            </Reveal>

            <Reveal delay={0.12} className={`journey-rail ${isMobile ? "journey-rail--mobile" : ""}`}>
                <svg className="journey-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path
                        ref={pathRef}
                        d={isMobile ? "M 50 8 C 50 20, 50 34, 50 46 C 50 58, 50 72, 50 92" : "M 8 50 C 20 50, 32 50, 45 50 C 58 50, 70 50, 82 50 C 90 50, 94 50, 98 50"}
                    />
                </svg>
                <div ref={trainRef} className="journey-train" style={initialTrainStyle}>🚂</div>

                {stops.map((stop, index) => {
                    const isTop = index % 2 === 0;
                    const isLast = index === stops.length - 1;
                    const stationStyle = isMobile
                        ? { top: `${(index / Math.max(stops.length - 1, 1)) * 100}%`, left: index % 2 === 0 ? "28%" : "72%" }
                        : { left: `${(index / Math.max(stops.length - 1, 1)) * 100}%`, top: isTop ? "22%" : "78%" };

                    return (
                        <div
                            key={stop}
                            ref={(el) => {
                                stationRefs.current[index] = el;
                            }}
                            className={`journey-stop ${isTop ? "journey-stop--top" : "journey-stop--bottom"}`}
                            style={stationStyle}
                        >
                            <div className={`journey-node ${isLast ? "journey-node--pending" : ""}`} />
                            <div className={`journey-card ${isLast ? "journey-card--pending" : ""}`}>
                                <span>{stop}</span>
                            </div>
                        </div>
                    );
                })}
            </Reveal>
        </section>
    );
}