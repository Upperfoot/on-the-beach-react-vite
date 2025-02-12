import { render } from "@testing-library/react";
import { HotelCardList } from "./HotelCardList";
import { Hotel } from "../../types/hotel.interface";

test("renders HotelCardList Component", async () => {
    const hotelA: Hotel = {
        uuid: "test-uuid",
        name: "Hello Hotel",
        location: "Manchester",
        stars: 5,
        image: "image.jpg",
        price: 999.99,
        summary: "Luxurious Hotel located in the heart of Manchester"
    };

    const hotelB: Hotel = {
        uuid: "test-uuid-2",
        name: "Hello Hotel 2",
        location: "Liverpool",
        stars: 4,
        image: "image.jpg",
        price: 799.99,
        summary: "Luxurious Hotel located in the heart of Liverpool"
    };

    const hotelList: Hotel[] = [hotelA, hotelB];
    
    const { container: hotelCardList } = render(<HotelCardList hotelList={hotelList} />);

    expect(hotelCardList.textContent).toEqual("Hotel Card List Here");
    expect(hotelCardList.textContent).not.toEqual("Not Here At All");
});