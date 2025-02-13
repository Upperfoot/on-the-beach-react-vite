import { useState } from "react";
import { Holiday } from "../../types/holiday.interface";
import styles from "./HolidayCard.module.css";

interface HolidayCardProps {
    holiday: Holiday
}

export const HolidayCard: React.FC<HolidayCardProps> = ({ holiday }) => {
    const [expanded, setExpanded] = useState(false);

    return (
      <article className={styles.holidayCard} data-testid="holiday-card">
        <div className={styles.holidayCardHeaderContainer}>
          <div className={styles.holidayCardHeaderImage}>
            <img src={holiday.resort.image.url} alt={holiday.resort.image.description} />
            <button data-testid="expander-button" className={styles.holidayCardDetailExpanderButton} onClick={() => setExpanded(!expanded)}>
              <span>
                <strong>Read {expanded ? "less" : "more" }</strong> about this hotel  
              </span>          
              <span className="material-symbols-outlined">
                {expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_right' }
              </span>
            </button>
          </div>
          <div className={styles.holidayCardHeader}>
            <header>
              <h3>{ holiday.resort.name }</h3>
            </header>
            <p>{ holiday.resort.regionName}, { holiday.resort.countryName}</p>
          </div>
        </div>
        <section className={styles.holidayCardDetail}>
          { expanded && 
            <div className={styles.holidayCardDetailExpanderContent} data-testid="expander-content">
              <h3>Overview</h3>
              <p>{holiday.resort.overview}</p>
            </div>
          }
        </section>
      </article>
    );
  };