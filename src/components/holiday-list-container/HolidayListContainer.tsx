import { useEffect, useState } from "react";
import { HolidayService } from "../../services/holiday.service";
import { HolidaySortEnum, HolidaySortOrderEnum } from "../../types/holiday-sort.enum";
import { Holiday } from "../../types/holiday.interface";
import { HolidayCardList } from "../holiday-card-list/HolidayCardList";
import { HolidaySortPanel } from "../holiday-sort-panel/HolidaySortPanel";
import styles from "./HolidayListContainer.module.css";

export const sortHolidays = (holidays: Holiday[], sort: HolidaySortEnum, order: HolidaySortOrderEnum): Holiday[] => {
  return [...holidays.sort((a: Holiday, b: Holiday) => {
    const firstSortObject = order === HolidaySortOrderEnum.ASC ? a : b;
    const secondSortObject = order === HolidaySortOrderEnum.ASC ? b : a;

    if (sort === HolidaySortEnum.ALPHABETICALLY) return firstSortObject.resort.name.localeCompare(secondSortObject.resort.name);
    if (sort === HolidaySortEnum.PRICE) return firstSortObject.bookingDetails.price.amount - secondSortObject.bookingDetails.price.amount;
    if (sort === HolidaySortEnum.STAR_RATING) return firstSortObject.resort.starRating - secondSortObject.resort.starRating;
    return 0;
  })];
};

export const HolidayListContainer: React.FC = () => {
    const holidayService = new HolidayService();
    const [unsortedHolidays, setUnsortedHolidays] = useState<Holiday[]>([]); // Stores the raw API data
    const [sortedHolidays, setSortedHolidays] = useState<Holiday[]>([]); // Stores the sorted version (I could merge unsorted/sorted but its good to look at)
    const defaultSort = HolidaySortEnum.ALPHABETICALLY;
    const defaultOrder = HolidaySortOrderEnum.ASC;

    useEffect(() => {
      holidayService.fetchAll().then((holidays: Holiday[]) => {
        setUnsortedHolidays(holidays);
        setSortedHolidays(sortHolidays(holidays, defaultSort, defaultOrder));
      });
    });

    // Function to update sorting order when our Sort Panel triggers
    const handleSortOrderChange = (sort: HolidaySortEnum, order: HolidaySortOrderEnum) => {
      setSortedHolidays(sortHolidays(unsortedHolidays, sort, order)); // Re-Sort with Original Data
    };

    return (
      <div className={styles.holidayListContainer} data-testid="holiday-list-container">
        <nav className={styles.holidayListContainerSort}>
          <HolidaySortPanel defaultSort={HolidaySortEnum.ALPHABETICALLY} defaultOrder={HolidaySortOrderEnum.ASC} onSortOrderChanged={handleSortOrderChange}/>
        </nav>
        <main className={styles.holidayListContainerList}>
          <HolidayCardList holidayList={sortedHolidays} />
        </main>
      </div>
    );
  };