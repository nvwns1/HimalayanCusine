import React from "react";
import styles from "./ServiceCard.module.scss";

export interface IServiceCardProps {
  id: number;
  image?: string;
  heading: string;
  description: string;
}

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className={styles.serviceCardRoot}>
      <div className={styles.imageContainer}></div>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default ServiceCard;
