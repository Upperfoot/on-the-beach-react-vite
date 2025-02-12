import { render } from "@testing-library/react";
import { HolidaySortPanel } from "./HolidaySortPanel";

test("renders HolidaySortPanel Component", async () => {
    const { container: holidaySortPanel } = render(<HolidaySortPanel />);

    expect(holidaySortPanel.textContent).toEqual("Sort Panel Here");
    expect(holidaySortPanel.textContent).not.toEqual("Does Not Exist");
});