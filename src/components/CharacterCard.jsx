import { useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

const statRows = [
  { label: "Class", value: "No Class.\nOnly Oora Mass." },
  { label: "Special Ability", value: "Katthulatho kaadhu...\nKanti choopu tho champesthundhi.\nStill cute ga untundhi." },
  { label: "Secondary Ability", value: "Sleeping." },
  { label: "Hobbies", value: "• Sleeping\n• Sleeping\n• Sleeping\n• Inka konchem Sleeping" },
  { label: "Inspiration", value: '"Abdul Kalam" just because \'Kalalu Kanamannaru Ganuka\'' },
  { label: "Fav Song", value: "Rakshasudela priyudu chalu", audio: `${import.meta.env.BASE_URL}song.mp3` },
  { label: "Ishtam Aina Pani", value: "Sleeping." },
  { label: "Favourite Food", value: "Mandi.\nFull spice undali royyy." },
];

export default function CharacterCard() {
  const [sleepClicks, setSleepClicks] = useState(0);
  const [achievement, setAchievement] = useState("");
  const [tingariNote, setTingariNote] = useState("");
  const songRef = useRef(null);

  const particles = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ id: i, left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%`, delay: `${i * 0.08}s` })), []);

  const handleSleep = () => {
    const next = sleepClicks + 1;
    setSleepClicks(next);
    if (next === 3) {
      setAchievement("Achievement Unlocked: Professional Sleeper");
    }
  };

  const handleSongPlay = () => {
    if (songRef.current) {
      songRef.current.currentTime = 0;
      songRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="story-section character-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Character profile</p>
        <h2>Akshaya Adi</h2>
      </Reveal>

      <div className="character-grid">
        <Reveal className="glass-card character-card hero-card">
          <div className="particle-layer" aria-hidden="true">
            {particles.map((particle) => (
              <span key={particle.id} className="particle" style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }} />
            ))}
          </div>

          <div className="character-portrait">
            <div className="avatar-orb">A</div>
            <div className="avatar-glow" />
          </div>

          <div className="character-name-block">
            <div className="badge-row">
              <span className="badge-pill">Akhi</span>
              <span className="badge-pill clickable-label">Gundu</span>
            </div>
            <h3>Akshaya Adi</h3>
            <p className="character-tagline">Warangal native hybrid pilla. Soft voice. Strong opinions.</p>
          </div>

          <div className="character-bio">
            <p>"Dad's little princess"</p>
            <p>"Mom's whole world"</p>
            <p>Ilantivi cheppe rakam kadhu</p>
            <p>Warangal Native Hybrid Pilla.</p>
            <p>Kelkithe Khel Katham.</p>
          </div>
          {tingariNote ? <p className="warning-pill">{tingariNote}</p> : null}
        </Reveal>

        <Reveal delay={0.12} className="glass-card character-card alt-card">
          <div className="skill-list">
            <audio ref={songRef} src={`${import.meta.env.BASE_URL}song.mp3`} preload="auto" />
            {statRows.map((stat) => (
              <div key={stat.label} className="skill-item">
                <div className="skill-header">
                  <strong>{stat.label}</strong>
                  {stat.audio ? (
                    <button type="button" className="song-button" onClick={handleSongPlay} aria-label={`Play ${stat.label}`}>
                      ▶ Play
                    </button>
                  ) : null}
                </div>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
          <div className="sleep-hint">🖱 Click me</div>
          <button className="sleep-button" onClick={handleSleep}>Sleeping</button>
          {achievement ? <p className="achievement-pill">{achievement}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}