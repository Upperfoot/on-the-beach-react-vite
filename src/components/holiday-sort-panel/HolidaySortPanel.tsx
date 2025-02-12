import { useState } from "react";
import { HolidaySortEnum, HolidaySortOrderEnum } from "../../types/holiday-sort.enum";
import styles from "./HolidaySortPanel.module.css";
import classNames from "classnames";

interface HolidaySortPanelProps {
  defaultSort: HolidaySortEnum.ALPHABETICALLY,
  defaultOrder: HolidaySortOrderEnum.ASC,
  onSortOrderChanged: (sort: HolidaySortEnum, order: HolidaySortOrderEnum) => void; // Callback function
}


export const HolidaySortPanel: React.FC<HolidaySortPanelProps> = ({ defaultSort, defaultOrder, onSortOrderChanged }) => {
  const [currentSort, setSort] = useState<HolidaySortEnum>(defaultSort);
  const [currentOrder, setOrder] = useState<HolidaySortOrderEnum>(defaultOrder);

    // Sets the Sort Order for the Component
    // Logic should intake the sortEnum
    // If the new sortEnum is the same as the current sortEnum, switch between ASC/DESC
    // If the new sortEnum is different from the current sortEnum, choose the default ASC
    const setCurrentSortOrder = (clickedSortEnum: HolidaySortEnum) => {
      let newOrder = currentOrder;
      let newSort = currentSort;

      if(clickedSortEnum == currentSort) {
        newOrder = currentOrder === HolidaySortOrderEnum.ASC ? HolidaySortOrderEnum.DESC : HolidaySortOrderEnum.ASC;
      } else {
        newSort = clickedSortEnum;
        newOrder = HolidaySortOrderEnum.ASC;
      }

      setSort(newSort);
      setOrder(newOrder);

      // Communicate out from the component
      onSortOrderChanged(newSort, newOrder);
    }

    const getActiveSortClass = (sortType: HolidaySortEnum) => {
      return classNames(styles.holidaySortPanelButton, {
        [styles.selected]: currentSort === sortType,
      });
    };

    // I could iterate across an array of Sort Objects but I'm keen to move quickly, not quite DRY but I'm aware its not
    return (
      <div className={styles.holidaySortPanel}>
        <button data-testid="sort-alphabetically" className={getActiveSortClass(HolidaySortEnum.ALPHABETICALLY)} onClick={() => setCurrentSortOrder(HolidaySortEnum.ALPHABETICALLY)}>
          sort <strong>alphabetically</strong>
        </button>
        <button data-testid="sort-price" className={getActiveSortClass(HolidaySortEnum.PRICE)} onClick={() => setCurrentSortOrder(HolidaySortEnum.PRICE)}>
          sort by <strong>price</strong>
        </button>
        <button data-testid="sort-rating" className={getActiveSortClass(HolidaySortEnum.STAR_RATING)} onClick={() => setCurrentSortOrder(HolidaySortEnum.STAR_RATING)}>
          sort by <strong>star rating</strong>
        </button>
      </div>
    );
  };