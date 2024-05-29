import React, { useMemo } from "react";
import styles from "./ReviewCard.module.scss";

interface IReviewCard {
  name: string;
  review: string;
  star: number;
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
