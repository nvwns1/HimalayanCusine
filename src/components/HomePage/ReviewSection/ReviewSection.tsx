import React from "react";
import styles from "./ReviewSection.module.scss";
import classNames from "classnames";
import Button from "@/components/component/Button/Button";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewSection = () => {
  const reviewRootClasses = classNames(
    styles.reviewSectionRoot,
    "secondarySurface"
  );

  return (
    <section className={reviewRootClasses}>
      <div className={styles.leftColumn}>
        <ReviewCard name="John Doe" star={5} review="The food was amazing!" />
        <ReviewCard name="John Doe" star={5} review="The food was amazing!" />
      </div>
      <div className={styles.rightColumn}>
        <p className={styles.sectionHeading}>
          What Our <span className={styles.sectionHeadingAccent}> Guests </span>
          Are Saying?
        </p>
        <p>Discover why our guest love dining Himalayan Spices.</p>
        <Button background="filled">Give Your Review</Button>
      </div>
    </section>
  );
};

export default ReviewSection;
