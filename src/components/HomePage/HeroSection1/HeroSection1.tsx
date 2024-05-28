import React from "react";
import styles from "./HeroSection1.module.scss";
import classNames from "classnames";

const HeroSection1 = () => {
  const homePageRootClasses = classNames(styles.mainRoot, "secondarySurface");

  return <main className={homePageRootClasses}></main>;
};

export default HeroSection1;
