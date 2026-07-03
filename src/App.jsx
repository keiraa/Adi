import './App.css';
import Hero from './components/Hero';
import Places from './components/Places';
import FoodCulture from './components/FoodCulture';
import Scanner from './components/Scanner';
import HiddenGem from './components/HiddenGem';
import CharacterCard from './components/CharacterCard';
import Observations from './components/Observations';
import LocalGuide from './components/LocalGuide';
import FriendSquad from './components/FriendSquad';
import Jumanji from './components/Jumanji';
import Journey from './components/Journey';
import FutureMemories from './components/FutureMemories';
import BirthdayMessage from './components/BirthdayMessage';

export default function App() {
  return (
    <main className="story-flow">
      <Hero />
      <Places />
      <FoodCulture />
      <Scanner />
      <HiddenGem />
      <CharacterCard />
      <Observations />
      <LocalGuide />
      <FriendSquad />
      <Jumanji />
      <Journey />
      <FutureMemories />
      <BirthdayMessage />
    </main>
  );
}