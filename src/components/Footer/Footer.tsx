"use client";

import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import { navLinks } from "../Navbar/Navbar";
import Link from "next/link";
import SocialIcons from "../component/SocialIcons/SocialIcons";

const Footer = () => {
  const footerRootClasses = classNames(styles.footerRoot, "primarySurface");

  return (
    <footer className={footerRootClasses}>
      <div className={styles.footerFirst}>
        <div className={styles.column1}>
          <Link href={"/"}>
            <Image width={200} height={40} alt="Logo" src={"/asset/logo.png"} />
          </Link>
        </div>
        <div className={styles.column2}>
          <p className={styles.columnHeading}>Quick Links</p>
          <ul className={styles.column2List}>
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.href} href={navLink.href}>
                  <li>{navLink.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={styles.column3}>
          <p className={styles.columnHeading}>Follow Us </p>
          <div className={styles.column3Body}>
            <SocialIcons />
            {/* <div className={styles.iconSection}>
              <div className={styles.iconRow}>
                <FacebookIconSvg
                  className={styles.icon}
                  onClick={() =>
                    openURLInNewTab(restaurantData.socialUrls.facebook)
                  }
                />
                <InstagramIconSvg
                  className={styles.icon}
                  onClick={() =>
                    openURLInNewTab(restaurantData.socialUrls.instagram)
                  }
                />
                <TiktokIconSvg
                  className={styles.icon}
                  onClick={() =>
                    openURLInNewTab(restaurantData.socialUrls.tiktok)
                  }
                />
              </div>
            </div> */}

            {/* <div className={styles.newsletter}>
              <p>Subscribe to Our Newsletter</p>
              <NewsLetter />
            </div> */}
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
