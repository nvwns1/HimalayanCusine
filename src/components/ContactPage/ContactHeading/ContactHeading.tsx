import React from "react";
import styles from "./ContactHeading.module.scss";
import { restaurantData } from "@/lib/variable/data";
import Image from "next/image";
import SocialIcons from "@/components/component/SocialIcons/SocialIcons";
import Link from "next/link";

const ContactHeading = () => {
  let cleanedPhoneNumber1 = restaurantData.phoneNumber1.replace(/\s/g, "");
  let cleanedPhoneNumber2 = restaurantData.phoneNumber2.replace(/\s/g, "");

  return (
    <div className={styles.contactHeadingWrapper}>
      <div className={styles.leftColumn}>
        <p className={styles.contactHeading}>
          <span className={styles.contactHeadingAccent}>Contact </span>
          Us
        </p>
        <div className={styles.description}>
          <p>
            Call us: <br />
            <Link
              href={`tel:+44${cleanedPhoneNumber1}`}
              className={styles.phoneNumber}
            >
              {restaurantData.phoneNumber1}
            </Link>
            &ensp;
            <Link
              href={`tel:+44${cleanedPhoneNumber2}`}
              className={styles.phoneNumber}
            >
              {restaurantData.phoneNumber2}
            </Link>
          </p>
        </div>
        <div className={styles.description}>
          <p>Info:</p>
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
