import React from "react";
import styles from "./ContactBody.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactDetails from "./ContactDetails/ContactDetails";
const ContactBody = () => {
  return (
    <div className={styles.contactBodyWrapper}>
      <div className={styles.leftColumn}>
        <ContactDetails />
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBody;
