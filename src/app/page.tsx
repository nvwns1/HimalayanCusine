import styles from "./page.module.css";
import React from "react";
import ServiceSection from "@/components/HomePage/ServiceSection/ServiceSection";
import HeroSection1 from "@/components/HomePage/HeroSection1/HeroSection1";
import HeroSection3 from "@/components/HomePage/HeroSection3/HeroSection3";
import BannerSection from "@/components/HomePage/BannerSection/BannerSection";
import ReviewSection from "@/components/HomePage/ReviewSection/ReviewSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection1 />
      <ServiceSection />
      <HeroSection3 />
      <BannerSection />
      <ReviewSection />
    </React.Fragment>
  );
}
