"use client";
import React, { useState } from "react";
import styles from "./ReservationBody.module.scss";
import Button from "@/components/component/Button/Button";

interface IReservationState {
  fullname: string;
  email: string;
  phoneNumber: string;
  numberOfGuests: number;
  reservationDate: string;
  specialRequest: string;
}
const initialReservatinState: IReservationState = {
  fullname: "",
  email: "",
  phoneNumber: "",
  numberOfGuests: 0,
  reservationDate: "",
  specialRequest: "",
};

const ReservationBody = () => {
  const [formValue, setFormValue] = useState<IReservationState>(
    initialReservatinState
  );

  const handleFormChange = (updatedState: Partial<IReservationState>) => {
    setFormValue({
      ...formValue,
      ...updatedState,
    });
  };

  // TODO: Handle Submit
  return (
    <div className={styles.reservationBodyWrapper}>
      <div className={styles.reservationFormWrapper}>
        <div className={styles.inputFieldWrapper}>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Full Name
            </label>
            <input
              className={styles.inputField}
              value={formValue.fullname}
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={(e) => handleFormChange({ fullname: e.target.value })}
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Email
            </label>
            <input
              value={formValue.email}
              className={styles.inputField}
              type="text"
              placeholder="Email"
              name="Email"
              onChange={(e) => handleFormChange({ email: e.target.value })}
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Phone Number
            </label>
            <input
              value={formValue.phoneNumber}
              className={styles.inputField}
              type="text"
              placeholder="Phone Number"
              name="Phone Number"
              onChange={(e) =>
                handleFormChange({ phoneNumber: e.target.value })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              No.of Guests
            </label>
            <input
              value={formValue.numberOfGuests}
              className={styles.inputField}
              type="number"
              name="guests"
              onChange={(e) =>
                handleFormChange({ numberOfGuests: parseInt(e.target.value) })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Reservation Date & Time
            </label>
            <input
              value={formValue.reservationDate}
              className={styles.inputField}
              type="date"
              placeholder="Phone Number"
              name="Phone Number"
              onChange={(e) =>
                handleFormChange({ reservationDate: e.target.value })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Any Special Request
            </label>
            <input
              value={formValue.specialRequest}
              className={styles.inputField}
              type="text"
              placeholder="message"
              onChange={(e) =>
                handleFormChange({ specialRequest: e.target.value })
              }
            />
          </div>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ReservationBody;
