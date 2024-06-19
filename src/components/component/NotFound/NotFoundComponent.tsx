import Link from "next/link";
import React from "react";
import styles from "./NotFound.module.scss";
import Button from "../Button/Button";
const NotFoundComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
