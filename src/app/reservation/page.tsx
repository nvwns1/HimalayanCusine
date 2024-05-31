import ReservationHeading from "@/components/ReservationPage/ReservationHeading/ReservationHeading";
import styles from "./reservation.module.scss";
import React from "react";
import ReservationBody from "@/components/ReservationPage/ReservationBody/ReservationBody";

const page = () => {
  return (
    <section className={styles.reservationSection}>
      <ReservationHeading />
      <ReservationBody />
    </section>
  );
};

export default page;
