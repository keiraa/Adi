import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";

export default function Observations() {
  return (
    <section className="story-section observation-section">
      <Reveal className="section-heading narrow-heading">
        <p className="eyebrow">Things I accidentally noticed</p>
        <h2>Photo lo focus camera ekkada pettindo telusthundhi.</h2>
      </Reveal>

      <Reveal delay={0.1} className="focus-card">
        <ImageWithFallback src={`${import.meta.env.BASE_URL}side-look.jpg`} alt="A quiet side look" className="observation-image" />
        <div className="focus-caption">
          <p>Kaani konni saarlu... focus evaru ekkada pettaro kuda telusthundhi.</p>
        </div>
      </Reveal>
    </section>
  );
}