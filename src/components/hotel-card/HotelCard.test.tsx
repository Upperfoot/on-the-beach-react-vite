import { render, screen } from "@testing-library/react";
import { HotelCard } from "./HotelCard";

test("renders HotelCard Component", async () => {
    render(<HotelCard />);

    const hotelCard = screen.findByText('Hello');

    expect(hotelCard).toBeDefined();
});