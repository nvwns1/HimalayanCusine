"use client";

import React from "react";
import styles from "./HeroSection1.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Button from "@/components/component/Button/Button";
import { useRouter } from "next/navigation";

const HeroSection1 = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/reservation");
  };

  const homePageRootClasses = classNames(
    styles.heroSectionRoot,
    "secondarySurface"
  );

  return (
    <section className={homePageRootClasses}>
      <div className={styles.leftColumn}>
        <Image
          src="/homePage/hero/momo.jpg"
          alt="Logo"
          height={800}
          width={800}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.rightColumn}>
        <p className={styles.heading}>
          Discover
          <span className={styles.accentHeading}> Authentic </span>
          Nepali Dishes
        </p>
        <p>
          Indulge in the flavors of the Himalayas with our traditional Nepali
          recipes, infused with handpicked spices.
        </p>
        <Button
          className={styles.CTAButton}
          background="filled"
          onClick={handleClick}
        >
          Reservation
        </Button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/homePage/hero/chow.png"
          alt="Logo"
          height={800}
          width={800}
          className={styles.image1}
        />
      </div>
    </section>
  );
};

export default HeroSection1;
