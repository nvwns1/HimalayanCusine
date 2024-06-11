import React from "react";
import styles from "./LocationHero1.module.scss";
import ContactHeading from "../ContactHeading/ContactHeading";
import ContactBody from "../ContactBody/ContactBody";
import LocationBody from "../LocationBody/LocationBody";

const ContactHero1 = () => {
  return (
    <main className={styles.locationHeroWrapper}>
      <LocationBody />
    </main>
  );
};

export default ContactHero1;
