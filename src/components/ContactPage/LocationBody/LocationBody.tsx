import React from "react";
import styles from "./LocationBody.module.scss";
import { restaurantData } from "@/lib/variable/data";
const LocationBody = () => {
  return (
    <article className={styles.locationWrapper}>
      <div className={styles.leftColumn}>
        <p className={styles.locationHeading}>
          Our <span className={styles.locationHeadingAccent}>Location</span>
        </p>
        <div className={styles.detailsWrapper}>
          <div className={styles.rowWrapper}>
            <p className={styles.title}>Address</p>
            <p className={styles.description}>{restaurantData.address}</p>
          </div>
          <div className={styles.rowWrapper}>
            <p className={styles.title}>Hours</p>
            <p className={styles.description}>{restaurantData.hours.hour1}</p>
            <p className={styles.description}>{restaurantData.hours.hour2}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <iframe
          className={styles.locationMapWrapper}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.9867624869448!2d-0.2813755650613626!3d51.61103162879538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617cb003160e1%3A0x4108a34b44dd851!2sHimalayan%20Spices!5e0!3m2!1sen!2snp!4v1717325448931!5m2!1sen!2snp"
          width="600"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
};
export default LocationBody;
