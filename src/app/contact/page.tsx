import React from "react";
import styles from "./contact.module.scss";
import ContactHeading from "@/components/ContactPage/ContactHeading/ContactHeading";
import ContactBody from "@/components/ContactPage/ContactBody/ContactBody";
const page = () => {
  return (
    <section className={styles.contactSection}>
      <ContactHeading />
      <ContactBody />
    </section>
  );
};

export default page;
