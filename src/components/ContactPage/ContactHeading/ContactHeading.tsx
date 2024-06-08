import React from "react";
import styles from "./ContactHeading.module.scss";
import { restaurantData } from "@/lib/variable/data";

const ContactHeading = () => {
  return (
    <div className={styles.contactHeadingWrapper}>
      <p className={styles.contactHeading}>
        <span className={styles.contactHeadingAccent}>Contact </span>
        Us
      </p>
      <p className={styles.subHeading}>For Authentic Nepali Dishes</p>
      <p className={styles.contactHeadingDescription}>
        Direct Contact: {restaurantData.phoneNumber1},{" "}
        {restaurantData.phoneNumber2}
      </p>
    </div>
  );
};

export default ContactHeading;
