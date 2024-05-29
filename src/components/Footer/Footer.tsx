"use client";

import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import InstagramIconSvg from "@/lib/Svgs/InstagramIconSvg";
import FacebookIconSvg from "@/lib/Svgs/facebookIconSvg";
import WhatsappIconSvg from "@/lib/Svgs/WhatsappIconSvg";

const Footer = () => {
  const footerRootClasses = classNames(styles.footerRoot, "primarySurface");

  /* TODO: ICONS Click*/
  const handleIconClick = () => {
    console.log("insta");
  };
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
          <div className={styles.column3Body}>
            <div className={styles.iconSection}>
              <p>Our Socials</p>
              <div className={styles.iconRow}>
                <FacebookIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
                <InstagramIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
                <WhatsappIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
              </div>
            </div>

            <div className={styles.newsletter}>
              <p>Subscribe to Our Newsletter</p>
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSecond}>
        ©2024 Himalayan Authentic • All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
