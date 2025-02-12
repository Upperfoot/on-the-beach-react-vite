import { Holiday } from "../../types/holiday.interface";
import { HolidayCard } from "../holiday-card/HolidayCard";
import styles from "./HolidayCardList.module.css";

interface HolidayCardListProps {
    holidayList: Holiday[]
}

export const HolidayCardList: React.FC<HolidayCardListProps> = ({ holidayList }) => {
    return (
      <div className={styles.holidayCardList}>
        <span>Holiday Card List Here</span>
        {holidayList.map(holiday => 
            <HolidayCard key={holiday.resort.id} holiday={holiday} />
        )}
      </div>
    );
  };