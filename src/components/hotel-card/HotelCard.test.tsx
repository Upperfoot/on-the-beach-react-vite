import { render } from "@testing-library/react";
import { HotelCard } from "./HotelCard";
import { Hotel } from "../../types/hotel.interface";

test("renders HotelCard Component", async () => {
    const hotel: Hotel = {
        uuid: "test-uuid",
        name: "Hello Hotel",
        location: "Manchester",
        stars: 5,
        image: "image.jpg",
        price: 999.99,
        summary: "Luxurious Hotel located in the heart of Manchester"
    };
    
    const { container: hotelCard } = render(<HotelCard hotel={hotel} />);

    expect(hotelCard.textContent).toEqual("Hello Hotel");
    expect(hotelCard.textContent).not.toEqual("Does Not Exist");
});