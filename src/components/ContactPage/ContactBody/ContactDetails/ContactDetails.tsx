import React from "react";
import styles from "./ContactDetails.module.scss";
import { FacebookIconSvg, InstagramIconSvg, WhatsappIconSvg } from "@/lib/Svgs";

interface IDetailData {
  title: string;
  description: string;
}
/*TODO: Real Data */
const detailData: IDetailData[] = [
  { title: "Location", description: "Kathmandu" },
  { title: "Email", description: "123@gmail.com" },
  { title: "PhoneNumber", description: "1234" },
];
const ContactDetails = () => {
  return (
    <div className={styles.contactDetailWrapper}>
      <iframe
        className={styles.contactHeadingWrapper}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.9867624869448!2d-0.2813755650613626!3d51.61103162879538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617cb003160e1%3A0x4108a34b44dd851!2sHimalayan%20Spices!5e0!3m2!1sen!2snp!4v1717325448931!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.contactBodyWrapper}>
        {detailData.map((data) => {
          return (
            <div key={data.title} className={styles.detailCard}>
              <p className={styles.title}>{data.title}</p>
              <p className={styles.subTitle}>{data.description}</p>
            </div>
          );
        })}
        {/* <div className={styles.detailCard}>
          <p className={styles.title}>Social Links</p>
          <div className={styles.socialsIconWrapper}>
            <FacebookIconSvg className={styles.icon} />
            <InstagramIconSvg className={styles.icon} />
            <WhatsappIconSvg className={styles.icon} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactDetails;
