import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const steps = [12, 25, 37, 61, 82, 99, 99.9, 100];
const checklist = ["Forts", "Temples", "Food", "Lakes"];

export default function Scanner() {
  const sectionRef = useRef(null);
  const barRef = useRef(null);
  const statusRef = useRef(null);
  const timelineRef = useRef(null);
  const [phase, setPhase] = useState("IDLE");
  const [percent, setPercent] = useState(0);
  const [labelText, setLabelText] = useState("Scanning Warangal... 0%");
  const [statusText, setStatusText] = useState("Searching...");
  const [matchFound, setMatchFound] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const startedRef = useRef(false);


  useEffect(() => {
    if (!sectionRef.current || startedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        console.log("Scanner entered viewport");
        setPhase("SCANNING");
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase === "SCANNING") {
      console.log("Scanner started");

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        timelineRef.current = tl;

        steps.forEach((value, index) => {
          tl.to(barRef.current, { width: `${value}%`, duration: index === steps.length - 1 ? 0.55 : 0.35 }, index * 0.4);
          tl.add(() => {
            const stage = index + 1;
            setPercent(value);
            setLabelText(`Scanning Warangal... ${value}%`);
            setActiveStage(stage);
            console.log("Progress update", value);
          }, index * 0.4);
        });

        tl.add(() => {
          setPercent(100);
          setLabelText("Scanning Warangal... 100%");
          setStatusText("MATCH FOUND");
          setMatchFound(true);
          setShowArrow(true);
          setActiveStage(checklist.length + 1);
          setPhase("COMPLETE");
          console.log("Scanner completed");
        });

        tl.to(statusRef.current, { opacity: 1, y: 0, duration: 0.45 }, "+=0.12");
      }, sectionRef);

      return () => {
        ctx.revert();
        timelineRef.current?.kill();
      };
    }

    return undefined;
  }, [phase]);

  return (
    <section ref={sectionRef} className="scanner-section">
      <div className="scanner-panel">
        <div className="scanner-copy">
          <p className="eyebrow">Scanning Warangal</p>
          <h2>{labelText}</h2>
          <div className="progress-track">
            <div ref={barRef} className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
          <div className="checklist">
            {checklist.map((item, index) => {
              const isComplete = matchFound || index < activeStage - 1;
              const isActive = !matchFound && index < activeStage;
              return (
                <span key={item} className={`check-pill ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}`}>
                  {matchFound && index === checklist.length - 1 ? "✓ MATCH FOUND" : `✓ ${item}`}
                </span>
              );
            })}
          </div>
          <p className="scanner-note">Searching for: <strong>Best Part of Warangal</strong></p>
        </div>

        <div ref={statusRef} className="scanner-result" style={{ opacity: matchFound ? 1 : 0, transform: matchFound ? "translateY(0)" : "translateY(14px)" }}>
          {matchFound ? (
            <>
              <div className="scanner-match">{statusText}</div>
              <div className="scanner-message">
                <p>Em choosthunnav?</p>
                <p>Anni nene cheyyala?</p>
                <p>Kindhaki scroll cheyyu lazy fellow.</p>
                {showArrow ? <div className="bounce-arrow">↓</div> : null}
              </div>
            </>
          ) : (
            <span className="scanner-idle">Searching...</span>
          )}
        </div>
      </div>
    </section>
  );
}