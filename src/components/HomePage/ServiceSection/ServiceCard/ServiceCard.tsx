import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";

export interface IServiceCardProps {
  id: number;
  image: string;
  heading: string;
  description: string;
}

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className={styles.serviceCardRoot}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={200}
          height={200}
          src={props.image}
          alt={props.heading}
        />
      </div>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default ServiceCard;
