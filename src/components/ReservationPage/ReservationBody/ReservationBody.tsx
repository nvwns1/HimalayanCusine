"use client";
import React, { FormEvent, useState } from "react";
import styles from "./ReservationBody.module.scss";
import Button from "@/components/component/Button/Button";
import {
  IReservationState,
  reservationFormSchema,
} from "@/lib/validation/ReservationFormSchema";
import * as Yup from "yup";
import { IContactFormValues } from "@/lib/validation/ContactFormSchema";
import useSendEmailMutation from "@/hooks/useSendEmailMutation";

const initialReservatinState: IReservationState = {
  fullname: "",
  email: "",
  phoneNumber: null,
  numberOfGuests: null,
  reservationDate: "",
  specialRequest: "",
};

const ReservationBody = () => {
  const [formValue, setFormValue] = useState<IReservationState>(
    initialReservatinState
  );
  const [errors, setErrors] = useState<Partial<IReservationState>>({});

  const handleFormChange = (updatedState: Partial<IReservationState>) => {
    setFormValue({
      ...formValue,
      ...updatedState,
    });
  };

  const sendEmailMutation = useSendEmailMutation({
    onSuccess: () => {
      setFormValue(initialReservatinState);
    },
    onError: () => {
      console.log("Error Found");
    },
  });

  /* TODO: Handle Loading, error, and Success event */
  const handleSubmit = async (e: FormEvent) => {
    try {
      await reservationFormSchema.validate(formValue, { abortEarly: false });
      setErrors({});
      const generatedMessage = `FullName: ${formValue.fullname},
       Email: ${formValue.email},
       Phone Number: ${formValue.phoneNumber},
        Number of Guests: ${formValue.numberOfGuests},
        Reservation Date: ${formValue.reservationDate},
       Message: ${formValue.specialRequest}`;

      const formData: IContactFormValues = {
        name: formValue.fullname,
        email: formValue.email,
        message: generatedMessage,
        type: "Reservation Form Submission",
      };

      sendEmailMutation.mutate(formData);
    } catch (validationErrors: any) {
      const formattedErrors: Partial<IReservationState> =
        validationErrors.inner.reduce(
          (acc: Partial<IReservationState>, error: Yup.ValidationError) => {
            return {
              ...acc,
              [error.path as keyof IReservationState]: error.message,
            };
          },
          {}
        );
      setErrors(formattedErrors);
      console.log(errors);
    }
  };
  return (
    <div className={styles.reservationBodyWrapper}>
      <div className={styles.reservationFormWrapper}>
        <div className={styles.inputFieldWrapper}>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Full Name
              <span className={styles.error}>{errors.fullname}</span>
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
              <span className={styles.error}>{errors.email}</span>
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
            <label className={styles.label} htmlFor="Phone">
              Phone Number
              <span className={styles.error}>{errors.phoneNumber}</span>
            </label>
            <input
              value={formValue.phoneNumber ?? ""}
              className={styles.inputField}
              type="text"
              name="Phone"
              onChange={(e) =>
                handleFormChange({ phoneNumber: parseInt(e.target.value) })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              No.of Guests
              <span className={styles.error}>{errors.numberOfGuests}</span>
            </label>
            <input
              value={formValue.numberOfGuests ?? ""}
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
              <span className={styles.error}>{errors.reservationDate}</span>
            </label>
            <input
              value={formValue.reservationDate}
              className={styles.inputField}
              type="datetime-local"
              placeholder="Date and time"
              name="DateTime"
              onChange={(e) =>
                handleFormChange({ reservationDate: e.target.value })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="">
              Any Special Request
              <span className={styles.error}>{errors.specialRequest}</span>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default ReservationBody;
