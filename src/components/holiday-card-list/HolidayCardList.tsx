import { Holiday } from "../../types/holiday.interface";
import { HolidayCard } from "../holiday-card/HolidayCard";

interface HolidayCardListProps {
    holidayList: Holiday[]
}

export const HolidayCardList: React.FC<HolidayCardListProps> = ({ holidayList }) => {
    return (
      <div className="holiday-card-list">
        <span>Holiday Card List Here</span>
        {holidayList.map(holiday => 
            <HolidayCard key={holiday.resort.id} holiday={holiday} />
        )}
      </div>
    );
  };