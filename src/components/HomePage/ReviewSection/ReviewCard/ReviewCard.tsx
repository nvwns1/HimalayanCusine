import React, { useMemo } from "react";
import styles from "./ReviewCard.module.scss";

interface IReviewCard {
  name: string;
  review: string;
  star: 1 | 2 | 3 | 4 | 5;
}
const ReviewCard = (props: IReviewCard) => {
  const generateStar = useMemo(() => {
    return "⭐".repeat(props.star);
  }, [props.star]);
  return (
    <div className={styles.reviewCardRoot}>
      <div className={styles.reviewCardHeader}>
        <div className={styles.reviewCardName}>{props.name}</div>
        <div className={styles.reviewCardStar}>{generateStar}</div>
      </div>
      <div className={styles.reviewCardReview}>&apos;{props.review}&apos;</div>
    </div>
  );
};

export default ReviewCard;
