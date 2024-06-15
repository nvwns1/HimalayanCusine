"use client";

import React from "react";
import styles from "./HeroSection3.module.scss";
import classNames from "classnames";
import { ConditionallyRender } from "@/lib/helper/ConditionalRender";
import useDeviceType from "@/hooks/useWindowDimension";
import { EDeviceType } from "@/lib/constants";
import Image from "next/image";

const HeroSection3 = () => {
  const deviceType = useDeviceType();
  const homePageRootClasses = classNames(
    styles.heroSectionRoot,
    "secondarySurface"
  );

  return (
    <section className={homePageRootClasses}>
      <div className={styles.titleSection}>
        <p className={styles.sectionHeading}>
          We <span className={styles.sectionHeadingAccent}> Offer </span>{" "}
          Top-Notch
        </p>
        <p className={styles.sectionDescription}>
          At Himalayan Spices, we take pride in offering a selection of
          top-notch dishes that showcase the rich and diverse flavors of the
          Himalayas.
        </p>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image2.jpg"
            alt="Image 1"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image3.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image4.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image5.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image6.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image7.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image8.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <div className={styles.gridItem}>
          <Image
            className={styles.img}
            src="/homePage/gallery/image9.jpg"
            alt="Image 2"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
