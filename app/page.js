import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <main>
      <link href="https://fonts.cdnfonts.com/css/la-vie-boheme" rel="stylesheet">
      </link>
      <Navbar />
      <Hero />
    </main>
  );
}
