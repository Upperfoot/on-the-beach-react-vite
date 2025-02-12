import { render, within } from "@testing-library/react";
import { HolidayListContainer } from "./HolidayListContainer";

test("renders HolidayListContainer Component", async () => {
    // Get our List Container
    const { container: holidayCardList } = render(<HolidayListContainer />);

    // Scoped List
    const holidayCardListScope = within(holidayCardList);

    // Get our Holiday Cards by Test ID (these should be stripped by Babel or a Test/Live Mode via process.env)
    const holidayList = await holidayCardListScope.findAllByTestId('holiday-list-container');

    // Should be a set of 1 result
    expect(holidayList.length).toBe(1);
});