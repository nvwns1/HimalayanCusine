import styles from "./page.module.css";
import React from "react";
import ServiceSection from "@/components/HomePage/ServiceSection/ServiceSection";
import HeroSection1 from "@/components/HomePage/HeroSection1/HeroSection1";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection1 />
      <ServiceSection />
    </React.Fragment>
  );
}
