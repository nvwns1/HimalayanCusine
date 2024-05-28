import React from "react";
import styles from "./HeroSection1.module.scss";
import classNames from "classnames";
import Button from "@/components/component/Button/Button";

const HeroSection1 = () => {
  const homePageRootClasses = classNames(
    styles.heroSectionRoot,
    "secondarySurface"
  );

  return (
    <section className={homePageRootClasses}>
      <div className={styles.leftColumn}>Image will be here</div>
      <div className={styles.rightColumn}>
        <p className={styles.heading}>
          Discover
          <span className={styles.accentHeading}> Authentic </span>
          Nepali Dishes
        </p>
        <p className={styles.description}>
          Indulge in the flavors of the Himalayas with our traditional Nepali
          recipes, infused with handpicked spices.
        </p>
        <Button className={styles.CTAButton} background="filled">
          Reservation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection1;
