import { useEffect, useRef, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function BirthdayMessage() {
  const [showImage, setShowImage] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="ending-section">
      <div className="film-grain" />
      <div className="ending-content">
        {showImage ? (
          <div className="instant-photo">
            <ImageWithFallback src="/instant-camera.jpg" alt="Birthday instant photo" className="ending-image" />
          </div>
        ) : null}
        <h2>Happy Birthday Akhi ✨</h2>
        <p>Warangal tourism department confirm cheyyakapoyina... naa favourite attraction maatram nuvve.</p>
      </div>
    </section>
  );
}