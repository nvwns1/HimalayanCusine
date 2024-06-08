"use client";

import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import { FacebookIconSvg, InstagramIconSvg, TiktokIconSvg } from "@/lib/Svgs";
import { navLinks } from "../Navbar/Navbar";
import Link from "next/link";

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
            <div className={styles.iconSection}>
              <div className={styles.iconRow}>
                <FacebookIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
                <InstagramIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
                <TiktokIconSvg
                  className={styles.icon}
                  onClick={handleIconClick}
                />
              </div>
            </div>

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
