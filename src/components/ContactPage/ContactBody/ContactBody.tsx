import React from "react";
import styles from "./ContactBody.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import Image from "next/image";
const ContactBody = () => {
  return (
    <div className={styles.contactBodyWrapper}>
      <div className={styles.leftColumn}>
        <Image
          className={styles.businessCardImg}
          src={"/contact/hero/businessCard.png"}
          width={500}
          height={400}
          alt="contact"
        />
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBody;
