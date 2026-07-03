import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";

export default function HiddenGem() {
  return (
    <section className="story-section">
      <div className="split-layout">
        <Reveal className="split-copy">
          <p className="eyebrow">Hidden gem</p>
          <h2>Official ga tourism list lo lekapoyina...</h2>
          <p>Konni attractions marchipovadam kastam. Kaani vaati gurinchi manam eppudu marchipolenu.</p>
        </Reveal>

        <Reveal delay={0.15} className="photo-stage-card">
          <div className="photo-backdrop">
            <ImageWithFallback src={`${import.meta.env.BASE_URL}instant-camera.jpg`} alt="Instant camera memory" className="photo-backdrop-image" />
          </div>
          <div className="photo-foreground-card">
            <ImageWithFallback src={`${import.meta.env.BASE_URL}instant-camera.jpg`} alt="Instant camera memory" className="polaroid-image" />
            <div className="polaroid-caption">A memory that needed no official label.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}