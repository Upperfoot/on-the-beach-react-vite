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

    const getSortIcon = (sortType: HolidaySortEnum) => {
      if(sortType !== currentSort) {
        return;
      }

      if(currentOrder === HolidaySortOrderEnum.ASC) {
        return (
          <span className="material-symbols-outlined">arrow_drop_down</span>
        );
      } else {
        return (
          <span className="material-symbols-outlined">arrow_drop_up</span>
        );
      }

    }

    // I could iterate across an array of Sort Objects but I'm keen to move quickly, not quite DRY but I'm aware its not
    return (
      <div className={styles.holidaySortPanel}>
        <div className={styles.holidaySortPanelContent}>
          <button data-testid="sort-alphabetically" className={getActiveSortClass(HolidaySortEnum.ALPHABETICALLY)} onClick={() => setCurrentSortOrder(HolidaySortEnum.ALPHABETICALLY)}>
            <span className={styles.holidaySortPanelButtonText}>
              <span className={styles.holidaySortPanelButtonInnerText}>
                <span>sort</span>
                &nbsp;
                <strong className={styles.holidaySortPanelButtonInnerTextLarge}>alphabetically</strong>
                <strong className={styles.holidaySortPanelButtonInnerTextSmall}>name</strong>
              </span>
            </span>
            {getSortIcon(HolidaySortEnum.ALPHABETICALLY)}
            <span className={classNames(styles.holidaySortPanelButtonIcon, 'material-symbols-outlined')}>sort_by_alpha</span>
          </button>
          <button data-testid="sort-price" className={getActiveSortClass(HolidaySortEnum.PRICE)} onClick={() => setCurrentSortOrder(HolidaySortEnum.PRICE)}>
            <span className={styles.holidaySortPanelButtonText}>
              <span className={styles.holidaySortPanelButtonInnerText}>
                <span>sort by</span> <strong>price</strong>
              </span> 
            </span>
            {getSortIcon(HolidaySortEnum.PRICE)}
            <span className={classNames(styles.holidaySortPanelButtonIcon, 'material-symbols-outlined')}>currency_pound</span>
          </button>
          <button data-testid="sort-rating" className={getActiveSortClass(HolidaySortEnum.STAR_RATING)} onClick={() => setCurrentSortOrder(HolidaySortEnum.STAR_RATING)}>
            <span className={styles.holidaySortPanelButtonText}>
              <span className={styles.holidaySortPanelButtonInnerText}>
              <span>sort by</span>
              &nbsp;
              <strong className={styles.holidaySortPanelButtonInnerTextLarge}>star rating</strong>
              <strong className={styles.holidaySortPanelButtonInnerTextSmall}>rating</strong>
              </span>
            </span>
            {getSortIcon(HolidaySortEnum.STAR_RATING)}
            <span className={classNames(styles.holidaySortPanelButtonIcon, 'material-symbols-outlined')}>star</span>
          </button>
        </div>
      </div>
    );
  };