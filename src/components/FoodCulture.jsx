import { useState } from "react";
import Reveal from "./Reveal";

const bites = [
  { title: "Mandi", img: `${import.meta.env.BASE_URL}mandi.jpg`, line: "Mandi King anukunta.\nSuper undhi.\nTry cheyyandi eppudaina velthe.\nSeat dhorakakapothe cheppandi.\nAkhi friend dhe.\nThanu okka call kodithe unnavallani lepesi koorchopedatharu.", tag: "The main event" },
  { title: "Tea", img: `${import.meta.env.BASE_URL}tea.jpg`, line: "Manam pedda tea lovers kadhu re.\nBut Warangal lo nellu aina tasty gane untundhi.\nHehe.", tag: "Tiny comfort, huge mood" },
  { title: "Mirchi Bajji", img: `${import.meta.env.BASE_URL}mirchi_bajji.jpg`, line: "Hmm!\nGoogle thalli decision guys idhi.\nManaki pedda idea ledhu.\nBut indhaka cheppinattu Warangal kanuka baguntundhi ani mark veseyocchu.", tag: "Crunchy bravery" },
];

export default function FoodCulture() {
  const [warning, setWarning] = useState("");

  return (
    <section className="story-section warm-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Food & culture</p>
        <h2>Some meals stay longer than the trip.</h2>
      </Reveal>

      <div className="cards-grid compact-grid">
        {bites.map((bite, index) => (
          <Reveal key={bite.title} delay={index * 0.1} className="glass-card food-card">
            <div className="food-image-wrap">
              <img src={bite.img} alt={bite.title} className="food-image" onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}warangal.jpg`; }} />
            </div>
            <p className="mini-tag">{bite.tag}</p>
            <h3
              className={bite.title === "Mandi" ? "clickable-label" : ""}
              onClick={() => bite.title === "Mandi" && setWarning("Warning: Spice level exceeds legal limits.")}
            >
              {bite.title}
            </h3>
            <p>{bite.line}</p>
          </Reveal>
        ))}
      </div>

      {warning ? <p className="warning-pill">{warning}</p> : null}
    </section>
  );
}