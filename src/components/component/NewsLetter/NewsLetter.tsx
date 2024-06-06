"use client";
import React, { FormEvent, useState } from "react";
import styles from "./NewsLetter.module.scss";
import Button from "../Button/Button";
import useSendEmailMutation from "@/hooks/useSendEmailMutation";
import { IContactFormValues } from "@/lib/validation/ContactFormSchema";

const NewsLetter = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const sendEmailMutation = useSendEmailMutation({
    onSuccess: () => {
      setValue("");
    },
    onError: () => {
      console.log("Error");
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data: IContactFormValues = {
      email: value,
      message: " This is NewsLetter",
      type: "Newletter Form",
      name: "Username",
    };
    sendEmailMutation.mutate(data);
  };
  return (
    <div className={styles.newsLetterRoot}>
      <input
        type="text"
        className={styles.inputField}
        value={value}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      {/* TODO: Handle Subscribe Button Click */}
      <Button size="md" background="filled" onClick={handleSubmit}>
        Subscribe
      </Button>
    </div>
  );
};

export default NewsLetter;
