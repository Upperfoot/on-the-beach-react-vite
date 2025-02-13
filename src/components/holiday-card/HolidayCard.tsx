import { useState } from "react";
import { Holiday } from "../../types/holiday.interface";
import styles from "./HolidayCard.module.css";
import { StarRating } from "../star-rating/StarRating";
import { format } from "date-fns";
import classNames from "classnames";

interface HolidayCardProps {
    holiday: Holiday
}

export const HolidayCard: React.FC<HolidayCardProps> = ({ holiday }) => {
    const [expanded, setExpanded] = useState(false);

    // This allows us to iterate across the different keys of our object
    const partyKeyTypes = (['adults', 'children', 'infants'] as Array<keyof typeof holiday.bookingDetails.party>).filter(type => holiday.bookingDetails.party[type]);

    // This gets our Plural Text (Could use a Pluralisation Library like i18n)
    const getPlural = (value: number | undefined, key: keyof typeof holiday.bookingDetails.party): string => {
      if(value !== undefined) {
        const moreThanOne = value > 1;

        if(key === 'adults') {
          return moreThanOne ? 'adults' : 'adult';
        }

        if(key === 'children') {
          return moreThanOne ? 'children' : 'child';
        }

        if(key === 'infants') {
          return moreThanOne ? 'infants' : 'infant';
        }
      }
      return ''; // Empty String
    }

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
            <StarRating rating={holiday.resort.starRating} />
            <p>
              { partyKeyTypes.map((key, index, array) => (
                <span key={key}>
                  {array.length > 1 && index > 0 && (index === array.length - 1 ? " & " : ", ")}
                  <strong>{ holiday.bookingDetails.party[key] }</strong> { getPlural(holiday.bookingDetails.party[key], key) }
                </span>
              ))}
              <br />
              <span>
                <strong>{ format(holiday.flightDetails.departureDate, "do MMM yyyy") }</strong> for <strong>{ holiday.bookingDetails.lengthOfStay} { holiday.bookingDetails.lengthOfStay > 1 ? 'days' : 'day' }</strong>
                &nbsp;
              </span>
              <br />
              <span>
                Departing from <strong>{ holiday.flightDetails.departureAirport }</strong>
                &nbsp;
              </span>
            </p>
            <a className={classNames(styles.holidayCardButton, 'button')} href="#">
              <span>Book now</span>
              <br />
              <span className={styles.holidayCardButtonLargeText}>£{holiday.bookingDetails.price.amount.toFixed(2)}</span>
            </a>
          </div>
        </div>
        <section className={styles.holidayCardDetail}>
          { expanded && 
            <div className={styles.holidayCardDetailExpanderContent} data-testid="expander-content">
              <h4>Overview</h4>
              <p>{holiday.resort.overview}</p>
            </div>
          }
        </section>
      </article>
    );
  };