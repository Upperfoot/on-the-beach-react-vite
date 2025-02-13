import classNames from "classnames";
import styles from "./StarRating.module.css";

interface StarRatingProps {
    rating: number
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {

    const starArray = Array.from({ length: rating }, (_, i) => i + 1);

    return (
      <div className={styles.starRating}>
        {starArray.map((i) => 
          <span key={i} className={classNames(styles.starRatingIcon, 'material-symbols-outlined')}>star</span>
        )}
      </div>
    );
};