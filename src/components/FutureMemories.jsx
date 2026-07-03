import Reveal from "./Reveal";

const memories = ["Future Adventure", "Future Trip", "Future Chaos", "Secret Memory"];

export default function FutureMemories() {
  return (
    <section className="story-section future-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Future memories</p>
        <h2>Status: waiting for future updates...</h2>
      </Reveal>

      <div className="future-grid">
        {memories.map((memory, index) => (
          <Reveal key={memory} delay={index * 0.08} className="future-card">
            <div className="future-lock">🔒</div>
            <h3>{memory}</h3>
            <p>Gallery storage available. More memories can be added.</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="future-note">
        <p>Gallery inka complete kaaledhu.<br />Konni photos inka vethakali.<br />Konni inka thiyyali.</p>
      </Reveal>
    </section>
  );
}