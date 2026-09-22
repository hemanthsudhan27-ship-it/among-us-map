import { GameMap } from '../components/game/GameMap';

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black text-white">
      <GameMap />
    </main>
  );
}
