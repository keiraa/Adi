import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";

const achievements = [
  { title: "Konni Avasaram Leni Memories 😛", copy: "Sarle, avasaram leni memory kaadhu le...\nEndhukante ee parichayam lekapothe mana kalavadam ayyedhe kadhu. 😌" },
  { title: "Sudden Plans", copy: "Adventure ante pedda pedda drifts ayyayi... 😭😂\nKaani secret le...\nWhat happens in Drift Raja,\nstays in Drift Raja. 🤫🚗" },
  { title: "Random Plans", copy: "Juice kosam bayalderam.\nKanipinchindhi ani Giant Wheel ekkesam. 🎡😂\nInka ilanti quick decisions chala unnayi...\nKaani ikkaditho aapeddham.\nIntha random ga Google Maps kooda route marchadhu. 😭😂\nThose were the days...\n(2 days, hehe. 🤭)" },
];

export default function FriendSquad() {
  return (
    <section className="story-section">
      <Reveal className="section-heading">
        <p className="eyebrow">Friend squad</p>
        <h2>Some people create the memories.</h2>
      </Reveal>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="achievement-card">
            <ImageWithFallback src={index === 0 ? `${import.meta.env.BASE_URL}friends-1.jpg` : index === 1 ? `${import.meta.env.BASE_URL}friends-2.jpg` : `${import.meta.env.BASE_URL}friends-3.jpg`} alt={item.title} className="achievement-image" />
            <div className="achievement-copy">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}