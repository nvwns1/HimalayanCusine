import React from "react";
import styles from "./ContactHero1.module.scss";
import ContactHeading from "../ContactHeading/ContactHeading";
import ContactBody from "../ContactBody/ContactBody";

const ContactHero1 = () => {
  return (
    <main className={styles.contactHeroWrapper}>
      <ContactHeading />
      <ContactBody />
    </main>
  );
};

export default ContactHero1;
