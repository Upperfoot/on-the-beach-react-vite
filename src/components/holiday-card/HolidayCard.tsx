import { useState } from "react";
import { Holiday } from "../../types/holiday.interface";
import styles from "./HolidayCard.module.css";

interface HolidayCardProps {
    holiday: Holiday
}

export const HolidayCard: React.FC<HolidayCardProps> = ({ holiday }) => {
    const [expanded, setExpanded] = useState(true);

    return (
      <article className={styles.holidayCard} data-testid="holiday-card">
        <div className={styles.holidayCardHeaderContainer}>
          <div className={styles.holidayCardHeaderImage}>
            <img src={holiday.resort.image.url} alt={holiday.resort.image.description} />
          </div>
          <div className={styles.holidayCardHeader}>
            <header>
              <h2>{ holiday.resort.name }</h2>
            </header>
            <p>{ holiday.resort.regionName}, { holiday.resort.countryName}</p>
          </div>
        </div>
        <section className={styles.holidayCardDetail}>
          <button className={styles.holidayCardDetailExpanderButton} onClick={() => setExpanded(!expanded)}>
            <strong>Read {expanded ? "less" : "more" }</strong> <span>about this hotel</span>
          </button>
          { expanded && 
            <div className={styles.holidayCardDetailExpanderContent}>
              <h3>Overview</h3>
              <p>{holiday.resort.overview}</p>
            </div>
          }
        </section>
      </article>
    );
  };