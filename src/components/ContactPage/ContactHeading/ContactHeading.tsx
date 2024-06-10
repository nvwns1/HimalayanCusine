import React from "react";
import styles from "./ContactHeading.module.scss";
import { restaurantData } from "@/lib/variable/data";
import Image from "next/image";
import SocialIcons from "@/components/component/SocialIcons/SocialIcons";

const ContactHeading = () => {
  return (
    <div className={styles.contactHeadingWrapper}>
      <div className={styles.leftColumn}>
        <p className={styles.contactHeading}>
          <span className={styles.contactHeadingAccent}>Contact </span>
          Us
        </p>
        <div className={styles.description}>
          <p>info</p>
          <SocialIcons size={20} />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Image
          className={styles.restroImg}
          src="/contact/hero/restro.jpg"
          width={500}
          height={500}
          alt="contact"
        />
      </div>
    </div>
  );
};

export default ContactHeading;
