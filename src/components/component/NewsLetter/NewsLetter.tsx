"use client";
import React, { useState } from "react";
import styles from "./NewsLetter.module.scss";
import Button from "../Button/Button";

const NewsLetter = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      <Button size="md" background="filled">
        Subscribe
      </Button>
    </div>
  );
};

export default NewsLetter;
