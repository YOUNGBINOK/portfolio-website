import Image from "next/image";
import HeroScetion from "./components/HeroScetion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12px">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroScetion />
      </div>
    </main>
  );
}
