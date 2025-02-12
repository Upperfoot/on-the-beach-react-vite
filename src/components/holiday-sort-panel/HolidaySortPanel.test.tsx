import { fireEvent, render, within } from "@testing-library/react";
import { HolidaySortPanel } from "./HolidaySortPanel";
import { HolidaySortEnum, HolidaySortOrderEnum } from "../../types/holiday-sort.enum";

describe("testing for HolidaySortPanel", () => {
  test("renders HolidaySortPanel Component", async () => {
      // Mock Callback Function for Sort Order Change
      const mockOnSortOrderChanged = jest.fn();

      const { container: holidaySortPanel } = render(<HolidaySortPanel defaultSort={HolidaySortEnum.ALPHABETICALLY} defaultOrder={HolidaySortOrderEnum.ASC} onSortOrderChanged={mockOnSortOrderChanged}/>);

      // Scoped List
      const holidaySortPanelScope = within(holidaySortPanel);

      const alphaSortButton = holidaySortPanelScope.getByTestId('sort-alphabetically');
      const priceSortButton = holidaySortPanelScope.getByTestId('sort-price');
      const ratingSortButton = holidaySortPanelScope.getByTestId('sort-rating');

      expect(alphaSortButton).toBeDefined();
      expect(priceSortButton).toBeDefined();
      expect(ratingSortButton).toBeDefined();

      // Expect the function to have been called no times with "alpha"
      expect(mockOnSortOrderChanged).toHaveBeenCalledTimes(0);

      // Click the alphaSortButton
      fireEvent.click(alphaSortButton);

      // Expect the function to have been called once with "alpha"
      expect(mockOnSortOrderChanged).toHaveBeenCalledTimes(1);
      expect(mockOnSortOrderChanged).toHaveBeenCalledWith(HolidaySortEnum.ALPHABETICALLY, HolidaySortOrderEnum.DESC); // Should be changing the order from ASC (default) to DESC

      // Click the alphaSortButton again!
      fireEvent.click(alphaSortButton);

      // Expect the function to have been called once with "alpha"
      expect(mockOnSortOrderChanged).toHaveBeenCalledTimes(2);
      expect(mockOnSortOrderChanged).toHaveBeenCalledWith(HolidaySortEnum.ALPHABETICALLY, HolidaySortOrderEnum.ASC); // Should be changing the order from DESC (previous) to ASC
  });
})