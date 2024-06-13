"use client";
import React from "react";
import styles from "./ReviewSection.module.scss";
import classNames from "classnames";
import Button from "@/components/component/Button/Button";
import ReviewCard from "./ReviewCard/ReviewCard";
import { restaurantData, reviewData } from "@/lib/variable/data";
import { openURLInNewTab } from "@/lib/helper/openURLInNewTab ";

const ReviewSection = () => {
  const handleReviewClick = () => {
    openURLInNewTab(restaurantData.reviewUrl);
    console.log("Review Button Clicked");
  };

  const reviewRootClasses = classNames(
    styles.reviewSectionRoot,
    "secondarySurface"
  );

  return (
    <section className={reviewRootClasses}>
      <div className={styles.reviewSectionWrapper}>
        <div className={styles.leftColumn}>
          {reviewData.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                name={review.name}
                star={review.star}
                review={review.review}
              />
            );
          })}
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.sectionHeading}>
            What Our{" "}
            <span className={styles.sectionHeadingAccent}> Guests </span>
            Are Saying?
          </p>
          <div className={styles.sectionBody}>
            <p>Discover why our guest love dining Himalayan Spices.</p>
            <Button background="filled" onClick={handleReviewClick}>
              Give Your Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
