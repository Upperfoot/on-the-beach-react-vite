import { Holiday } from "../../types/holiday.interface";
import styles from "./HolidayCard.module.css";

interface HolidayCardProps {
    holiday: Holiday
}

export const HolidayCard: React.FC<HolidayCardProps> = ({ holiday }) => {
    return (
      <div className={styles.holidayCard}>
        { holiday.resort.name }
      </div>
    );
  };