import React from "react";
import styles from "./ReservationHeading.module.scss";

const ReservationHeading = () => {
  return (
    <div className={styles.reservationHeadingWrapper}>
      <p className={styles.reservationHeading}>
        <span className={styles.reservationHeadingAccent}>Reserve </span>
        Table
      </p>
      <p className={styles.subHeading}>
        Please fill the form below accurately to enable us serve you better!..
        welcome!
      </p>
    </div>
  );
};

export default ReservationHeading;
