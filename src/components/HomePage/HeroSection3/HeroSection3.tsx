"use client";

import React from "react";
import styles from "./HeroSection3.module.scss";
import classNames from "classnames";
import { ConditionallyRender } from "@/lib/helper/ConditionalRender";
import useDeviceType from "@/hooks/useWindowDimension";
import { EDeviceType } from "@/lib/constants";

const HeroSection3 = () => {
  const deviceType = useDeviceType();
  const homePageRootClasses = classNames(
    styles.heroSectionRoot,
    "secondarySurface"
  );

  const deskTopImageGrid = (
    <div className={styles.imageGrid}>
      <div className={styles.mainImage}>This is whole Image 1</div>
      <div className={styles.secondaryImages}>
        <div className={styles.imageRow}>
          <div className={styles.image2}>Image 2</div>
          <div className={styles.image3}>Image 3</div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.image4}>Image 4</div>
          <div className={styles.image5}>Image 5</div>
        </div>
      </div>
    </div>
  );

  const mobileImageGrid = (
    <div className={styles.imageGrid}>
      <div className={styles.secondaryImages}>
        <div className={styles.imageRow}>
          <div className={styles.image3}>Image 3</div>
          <div className={styles.image2}>Image 2</div>
        </div>
      </div>
      <div className={styles.secondaryImages}>
        <div className={styles.imageRow}>
          <div className={styles.image2}>Image 2</div>
          <div className={styles.image3}>Image 3</div>
        </div>
      </div>
    </div>
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
      <ConditionallyRender
        condition={deviceType === EDeviceType.Desktop}
        show={deskTopImageGrid}
        elseShow={mobileImageGrid}
      />
    </section>
  );
};

export default HeroSection3;
