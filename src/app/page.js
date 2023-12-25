import Image from "next/image";
import HeroScetion from "./components/HeroScetion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12px">
      <HeroScetion />
    </main>
  );
}
