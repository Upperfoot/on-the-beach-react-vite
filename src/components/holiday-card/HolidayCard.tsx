import { Holiday } from "../../types/holiday.interface";
import styles from "./HolidayCard.module.css";

interface HolidayCardProps {
    holiday: Holiday
}

export const HolidayCard: React.FC<HolidayCardProps> = ({ holiday }) => {
    return (
      <article className={styles.holidayCard} data-testid="holiday-card">
        <div className={styles.holidayCardHeaderContainer}>
          <div className={styles.holidayCardHeaderImage}>
            <img src={holiday.resort.image.url} alt={holiday.resort.image.description} />
          </div>
          <div className={styles.holidayCardHeader}>
            <header className={styles.holidayCardHeader}>
              <h2>{ holiday.resort.name }</h2>
            </header>
            <p>{ holiday.resort.regionName}, { holiday.resort.countryName}</p>
          </div>
        </div>
        <section className={styles.holidayCardDetail}>
          <h3>Overview</h3>
          <p>{holiday.resort.overview}</p>
        </section>
      </article>
    );
  };