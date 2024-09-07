"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import EggEffect from "./components/EggEffect";
import Pokers from "./Pokers";
import Section1 from "./Section1";
import Tokenomics from "./Tokenomics";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="relative">
        <link
          href="https://fonts.cdnfonts.com/css/la-vie-boheme"
          rel="stylesheet"
        />

        {/* Hero section with parallax background */}
        <div className="relative">
          {/* Background Parallax Image for Hero */}
          <Parallax className="absolute inset-0 z-0" speed={10}>
            <Image
              src="/images/hall.jpg"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="blur-[3px]"
            />
          </Parallax>

          {/* Hero content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <Pokers />

        {/* Section1 with parallax background */}
        <div className="relative">
          {/* Background Parallax Image for Section1 */}
          <Parallax className="absolute inset-0 z-0" speed={5}>
            <Image
              src="/images/two.jpg"
              alt="Section1 Background"
              layout="fill"
              objectFit="cover"
              className="blur-[3px]"
            />
          </Parallax>

          {/* Section1 content */}
          <div className="relative z-10">
            <Section1 />
          </div>
        </div>

        <Tokenomics />
      </main>
    </ParallaxProvider>
  );
}
