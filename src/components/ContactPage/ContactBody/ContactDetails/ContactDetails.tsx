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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.5509170327473!2d-0.11363269512410477!3d51.486504897353065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876049284a69f57%3A0xd5112b823b377298!2sThe%20Oval!5e0!3m2!1sen!2snp!4v1717325087044!5m2!1sen!2snp"
        width="400"
        height="300"
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
