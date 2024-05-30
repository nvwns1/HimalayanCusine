"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/components/component/Button/Button";
interface IFormValue {
  name: string;
  email: string;
  message: string;
}
const initialState: IFormValue = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formValue, setFormValue] = useState<IFormValue>(initialState);

  const handleFormChange = (updatedState: Partial<IFormValue>) => {
    setFormValue({
      ...formValue,
      ...updatedState,
    });
  };

  /*TODO: Handle Submit */
  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.inputRow}>
          <label className={styles.label} htmlFor="">
            Full Name
          </label>
          <input
            className={styles.inputField}
            value={formValue.name}
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={(e) => handleFormChange({ name: e.target.value })}
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
            Message
          </label>
          <textarea
            value={formValue.message}
            className={styles.textarea}
            rows={10}
            placeholder="Enter your message here..."
            name="message"
            onChange={(e) => handleFormChange({ message: e.target.value })}
          />
        </div>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default ContactForm;
