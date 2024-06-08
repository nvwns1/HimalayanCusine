import React from "react";
import styles from "./BannerSection.module.scss";
import classNames from "classnames";

const BannerSection = () => {
  const bannerRootClasses = classNames(
    styles.bannerSectionRoot,
    "primarySurface"
  );

  // TODO: ADD BANNER IMAGE
  return (
    <section className={bannerRootClasses}>
      <p className={styles.textSection}>
        &quot; Experience the Authentic Flavors of Himalayas at{" "}
        <span className={styles.accentTitle}>Himlayan Spices </span>! &quot;
      </p>
    </section>
  );
};

export default BannerSection;
