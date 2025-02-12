import { render, screen } from "@testing-library/react";
import { HotelCard } from "./HotelCard";
import { Hotel } from "../../types/hotel.interface";

test("renders HotelCard Component", async () => {
    const hotel: Hotel = {
        uuid: 'test-uuid',
        name: 'Hello Hotel'
    };
    
    render(<HotelCard hotel={hotel} />);

    const hotelCard = screen.findByText('Hello');

    expect(hotelCard).toBeDefined();
});