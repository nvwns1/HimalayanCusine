"use client";
import React from "react";
import styles from "./Menu.module.scss";
import Button from "../component/Button/Button";

const Menu = () => {
  const pdf = "/pdf/menu.pdf";
  const handleButtonClick = () => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={styles.menuWrapper}>
      <Button onClick={handleButtonClick}>Click here for Menu</Button>
    </div>
  );
};

export default Menu;
