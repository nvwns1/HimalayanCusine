"use client";
import React, { FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/components/component/Button/Button";
import {
  contactFormSchema,
  IContactFormValues,
} from "@/lib/validation/ContactFormSchema";
import * as Yup from "yup";
import useSendEmailMutation from "@/hooks/useSendEmailMutation";

const initialState: IContactFormValues = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [msg, setMsg] = useState<string>("");
  const [formValue, setFormValue] = useState<IContactFormValues>(initialState);
  const [errors, setErrors] = useState<Partial<IContactFormValues>>({});

  const handleFormChange = (updatedState: Partial<IContactFormValues>) => {
    setFormValue({
      ...formValue,
      ...updatedState,
    });
  };

  const sendEmailMutation = useSendEmailMutation({
    onSuccess: () => {
      setFormValue(initialState);
      setMsg("Message sent successfully");
      setTimeout(() => {
        setMsg("");
      }, 10000);
    },
    onError: () => {
      console.log("Error");
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      await contactFormSchema.validate(formValue, { abortEarly: false });
      setErrors({});

      const generatedMessage = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #4CAF50;">Contact Form</h2>
        <p><strong>Full Name:</strong> ${formValue.name}</p>
        <p><strong>Email:</strong> ${formValue.email}</p>
        <p><strong>Message:</strong>${formValue.message}</p>
        <footer style="margin-top: 20px; font-size: 0.9em; color: #777;">
          <p>Best regards,</p>
          <p>Himalayan Spices</p>
        </footer>
      </div>
    `;
      const formattedData: IContactFormValues = {
        name: formValue.name,
        email: formValue.email,
        message: generatedMessage,
        type: "Contact Form Submission",
      };
      sendEmailMutation.mutate(formattedData);
    } catch (validationErrors: any) {
      const formattedErrors: Partial<IContactFormValues> =
        validationErrors.inner.reduce(
          (acc: Partial<IContactFormValues>, error: Yup.ValidationError) => {
            return {
              ...acc,
              [error.path as keyof IContactFormValues]: error.message,
            };
          },
          {}
        );
      setErrors(formattedErrors);
      console.log(errors);
    }
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.inputRow}>
          <p className={styles.message}>{msg}</p>
          <label className={styles.label} htmlFor="">
            Full Name
            <span className={styles.error}>{errors.name}</span>
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
          <label className={styles.label} htmlFor="">
            Message
            <span className={styles.error}>{errors.message}</span>
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
      <Button disabled={sendEmailMutation.isPending} onClick={handleSubmit}>
        {sendEmailMutation.isPending ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
};

export default ContactForm;
