"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import { useEffect, useState } from "react";

export default function Home() {

  const [navbarColor, setNavbarColor] = useState("transparent"); // Default color

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".Hero") as HTMLElement | null;
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        // If hero section is completely out of view, set navbar to white
        setNavbarColor(heroBottom <= 0 ? "white" : "transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div>
      <Navbar style={{ backgroundColor: navbarColor }} />

      <Hero />


      <Section1/>

<Section2/>

<Footer/>

</div>
  );
}
