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
      {/*TODO: ADD MAP */}
      <div className={styles.contactHeadingWrapper}></div>
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
