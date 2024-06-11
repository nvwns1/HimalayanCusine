import React from "react";
import styles from "./contact.module.scss";
import ContactBody from "@/components/ContactPage/ContactBody/ContactBody";
import ContactHero1 from "@/components/ContactPage/ContactHero1/ContactHero1";
import LocationHero1 from "@/components/ContactPage/LocationHero1/LocationHero1";
const page = () => {
  return (
    <section className={styles.contactSection}>
      <ContactHero1 />
      <LocationHero1 />
      {/* <ContactBody /> */}
    </section>
  );
};

export default page;
