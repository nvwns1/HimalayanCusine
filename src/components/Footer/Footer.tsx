import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";

const Footer = () => {
  const footerRootClasses = classNames(styles.footerRoot, "primarySurface");
  return (
    <footer className={footerRootClasses}>
      <div className={styles.footerFirst}>
        <div className={styles.column1}>
          <Image width={200} height={40} alt="Logo" src={"/asset/logo.png"} />
        </div>
        <div className={styles.column2}>
          <p className={styles.columnHeading}>Pages</p>
          <ul className={styles.column2List}>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Location</li>
          </ul>
        </div>
        <div className={styles.column3}>
          <p className={styles.columnHeading}>Get in touch</p>
          {/* TODO: ICONS */}
          <p>Facebook</p>
          {/* TODO: Newsletter */}
          <p>NewsLetter TextField</p>
        </div>
      </div>
      <div className={styles.footerSecond}>
        ©2024 Himalayan Authentic • All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
