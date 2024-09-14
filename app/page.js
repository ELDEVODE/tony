"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import EggEffect from "./components/EggEffect";
import Pokers from "./Pokers";
import Section1 from "./Section1";
import Tokenomics from "./Tokenomics";

const backgrounds = [
  "/images/hall.jpg",
  "/images/t2.jpg",
  "/images/two.jpg", // Add more background images as needed
  // "/images/background4.jpg",
];

export default function Home() {
  const [activeBackground, setActiveBackground] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setActiveBackground(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <main className="relative">
      <link
        href="https://fonts.cdnfonts.com/css/la-vie-boheme"
        rel="stylesheet"
      />

      {/* Background images */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`fixed inset-0 transition-opacity duration-1000 ${
            index === activeBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: -1,
          }}
        >
          <Image
            src={bg}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="blur-[2px]"
          />
        </div>
      ))}

      {/* Content sections */}
      <section ref={(el) => (sectionRefs.current[0] = el)}>
        <Navbar />
        <Hero />
        <Pokers />
      </section>

      <section ref={(el) => (sectionRefs.current[1] = el)}>
        <Section1 />
      </section>

      <section ref={(el) => (sectionRefs.current[2] = el)}>
        <Tokenomics />
      </section>

      {/* <section ref={(el) => (sectionRefs.current[3] = el)}>
        
      </section> */}
    </main>
  );
}
