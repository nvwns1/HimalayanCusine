import React from "react";
import styles from "./ServiceSection.module.scss";
import classNames from "classnames";
import ServiceCard, { IServiceCardProps } from "./ServiceCard/ServiceCard";

const ServiceSection = () => {
  const serviceCardData: IServiceCardProps[] = [
    {
      id: 1,
      heading: "Catering",
      description:
        "We offer catering services for events and gatherings, providing an unforgettable taste of Nepal for your guests.",
      image: "/homePage/services/catering.png",
    },
    {
      id: 2,
      heading: "Takeout",
      description:
        "Experience the rich flavors of Nepal on the go with our convenient takeout options.",
      image: "/homePage/services/takeout.png",
    },
    {
      id: 3,
      heading: "Delivery",
      description:
        "Enjoy the convenience of having our delicious Nepali dishes delivered right to your doorstep.",
      image: "/homePage/services/delivery.png",
    },
  ];

  const serviceRootClasses = classNames(
    styles.serviceSectionRoot,
    "primarySurface"
  );

  return (
    <section className={serviceRootClasses}>
      <div className={styles.sectionHeading}>
        OUR <span className={styles.sectionHeadingAccent}>SERVICES</span>
      </div>
      <div className={styles.serviceCardRow}>
        {serviceCardData.map((serviceCard) => (
          <ServiceCard key={serviceCard.id} {...serviceCard} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
