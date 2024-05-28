import React from "react";
import styles from "./ServiceSection.module.scss";
import classNames from "classnames";

const ServiceSection = () => {
  const homePageRootClasses = classNames(styles.mainRoot, "primarySurface");

  return <main className={homePageRootClasses}></main>;
};

export default ServiceSection;
