import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";

export default function Jumanji() {
  return (
    <section className="story-section jumanji-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Adventure mission report</p>
        <h2>MISSION REPORT</h2>
      </Reveal>

      <div className="jumanji-layout">
        <Reveal delay={0.1} className="glass-card jumanji-card">
          <ImageWithFallback src="/jumanji-group.jpg" alt="Adventure group" className="jumanji-image" />
        </Reveal>

        <Reveal delay={0.18} className="glass-card stats-card game-card">
          <div className="mission-report">
            <div className="mission-head">Mission Summary</div>
            <div className="mission-line"><span>Teamwork</span><strong>100%</strong></div>
            <div className="mission-line"><span>Chaos</span><strong>200%</strong></div>
            <div className="mission-line"><span>Mystery Room Entry</span><strong>4</strong></div>
            <div className="mission-line"><span>Exit</span><strong>4 + 1 Emotional Damage 😂</strong></div>
            <p className="mission-note">Teamwork 100% aithe<br />Gola mathram 200%</p>
            <p className="mission-note">Basically Jumanji escape successful. 🎮</p>
            <p className="mission-note">"We enjoyed a lot saar." 😌</p>
            <p className="mission-note">Clues dhorikesaayyy...<br />Manam anni solve chesesam. 😎</p>
            <p className="mission-note">Kakapothe...<br />5th member vachakane. 🤣</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}