import React from "react";
import styles from "./ContactHeading.module.scss";

const ContactHeading = () => {
  return (
    <div className={styles.contactHeadingWrapper}>
      <p className={styles.contactHeading}>
        <span className={styles.contactHeadingAccent}>Contact </span>
        Us
      </p>
      <p className={styles.subHeading}>How to get in Touch?</p>
      <p className={styles.contactHeadingDescription}>Some text here</p>
    </div>
  );
};

export default ContactHeading;
