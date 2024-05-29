import React from "react";
import styles from "./BannerSection.module.scss";
import classNames from "classnames";

const BannerSection = () => {
  const bannerRootClasses = classNames(
    styles.bannerSectionRoot,
    "primarySurface"
  );

  return (
    <section className={bannerRootClasses}>
      <div className={styles.leftColumn}>
        <div className={styles.image1}></div>
        <div className={styles.image2}></div>
      </div>
      <div className={styles.rightColumn}>
        &quot; Experience the Authentic Flavors of Himalayas at Himlayan
        Spices!&quot;
      </div>
    </section>
  );
};

export default BannerSection;
