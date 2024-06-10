import React from "react";
import styles from "./ContactBody.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactDetails from "./ContactDetails/ContactDetails";
import Image from "next/image";
const ContactBody = () => {
  return (
    <div className={styles.contactBodyWrapper}>
      <div className={styles.leftColumn}>
        {/* <div className={styles.imageContainer}> */}
        <Image
          className={styles.businessCardImg}
          src={"/contact/hero/businessCard.png"}
          width={500}
          height={400}
          alt="contact"
        />
        {/* </div> */}

        {/* <ContactDetails /> */}
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBody;
