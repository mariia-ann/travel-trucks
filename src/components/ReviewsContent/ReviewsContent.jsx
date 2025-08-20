import Review from "../Review/Review.jsx";
import style from "./ReviewsContent.module.css";

const ReviewsContent = ({ camper }) => {
  const reviews = camper.reviews;

  return (
    <div className={style.rewiewsWrapper}>
      <ul className={style.rewiewsList}>
        {reviews.map((review, idx) => (
          <li key={idx}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsContent;
