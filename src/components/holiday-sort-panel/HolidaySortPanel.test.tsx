import { fireEvent, render, within } from "@testing-library/react";
import { HolidaySortPanel } from "./HolidaySortPanel";
import { HolidaySortEnum, HolidaySortOrderEnum } from "../../types/holiday-sort.enum";

describe("testing for HolidaySortPanel", () => {
  let mockOnSortOrderChanged: jest.Mock;
  let holidaySortPanel: HTMLElement;

  const renderComponent = () => {
    mockOnSortOrderChanged = jest.fn();

    const renderObject = render(<HolidaySortPanel defaultSort={HolidaySortEnum.ALPHABETICALLY} defaultOrder={HolidaySortOrderEnum.ASC} onSortOrderChanged={mockOnSortOrderChanged}/>);
    holidaySortPanel = renderObject.container;

    return renderObject;
  };

  beforeEach(() => {
    renderComponent(); // Re-renders a new instance for each test
  });

  test("renders HolidaySortPanel Component", async () => {
      // Scoped List
      const holidaySortPanelScope = within(holidaySortPanel);

      const alphaSortButton = holidaySortPanelScope.getByTestId('sort-alphabetically');
      const priceSortButton = holidaySortPanelScope.getByTestId('sort-price');
      const ratingSortButton = holidaySortPanelScope.getByTestId('sort-rating');

      expect(alphaSortButton).toBeDefined();
      expect(priceSortButton).toBeDefined();
      expect(ratingSortButton).toBeDefined();
  });

  test("testing to see if clicking the same button changes the order", async () => {
      // Scoped List
      const holidaySortPanelScope = within(holidaySortPanel);

      // Expect the function to have been called no times with "alpha"
      expect(mockOnSortOrderChanged).toHaveBeenCalledTimes(0);

      const alphaSortButton = holidaySortPanelScope.getByTestId('sort-alphabetically');

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