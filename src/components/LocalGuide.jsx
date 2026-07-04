import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";

export default function LocalGuide() {
  return (
    <section className="story-section postcard-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Local guide</p>
        <h2>Every city ki oka guide untundi.</h2>
      </Reveal>

      <Reveal delay={0.1} className="postcard-card">
        <ImageWithFallback src={`${import.meta.env.BASE_URL}warangal-trip.jpg`} alt="Trip postcard" className="postcard-image" />
        <div className="postcard-content">
          <div className="memory-tag">Professional Guide. 😌</div>
          <p>Warangal lo guide ante Thane</p>
          <p>Kaani itinerary matram fixed...</p>
          <p>Same 3–4 places. 😭😂</p>
          <p>Just kidding.</p>
          <p>Best Activities in Warangal: Leg Touch</p>
        </div>
      </Reveal>
    </section>
  );
}