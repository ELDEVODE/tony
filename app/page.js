import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import EggEffect from "./components/EggEffect";
import Pokers from "./Pokers";
import Section1 from "./Section1";
import Tokenomics from "./Tokenomics";

export default function Home() {
  return (
    <main>
      <link
        href="https://fonts.cdnfonts.com/css/la-vie-boheme"
        rel="stylesheet"
      ></link>
      <Navbar />
      <Hero />
      <Pokers />
      <Section1 />
      <Tokenomics />
    </main>
  );
}
