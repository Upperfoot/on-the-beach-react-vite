import { render, within } from "@testing-library/react";
import { HolidayCardList } from "./HolidayCardList";
import { Holiday } from "../../types/holiday.interface";

describe("HolidayCardList Component", () => {
    test("renders HolidayCardList Component and checks if there are 2 results from example data", async () => {
        const holidayA: Holiday = {
            "resort": {
            "id": "7dd27e42-2b5c-4237-86ac-97c26f72eb5b",
            "name": "Iberostar Grand Salome",
            "regionName": "Costa Adeje",
            "countryName": "Tenerife",
            "starRating": 5,
            "overview": "The Iberostar Grand Salomehas an exceptional location in the south of Tenrife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf Courses, and is an ideal hotel for families couples and groups who are looking for a holiday full of sport, sun and sea.",
            "image": {
                "url": "https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg",
                "description": "A tranquil resort swimming pool with clear blue water, surrounded by two-story villas with terracotta roofs under a bright blue sky."
            }
            },
            "flightDetails": {
            "departureAirport": "East Midlands",
            "departureDate": "2030-07-03T00:00:00.000Z"
            },
            "bookingDetails": {
            "party": { "adults": 2, "children": 2, "infants": 1 },
            "lengthOfStay": 7,
            "price": {
                "amount": 1136.5,
                "currency": "GBP"
            }
            }
        };

        const holidayB: Holiday = {
            "resort": {
            "id": "f0ec3974-fb4e-4fb5-b964-2ac8a2e2c1a4",
            "name": "Aguamarina Golf Hotel",
            "regionName": "Costa Adeje",
            "countryName": "Tenerife",
            "starRating": 4,
            "overview": "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
            "image": {
                "url": "https://static.onthebeach.co.uk/fe-code-test/hotel-image-2.jpg",
                "description": "A bustling resort pool complex with palm trees, white buildings with red roofing, and guests enjoying sunbeds under blue parasols."
            }
            },
            "flightDetails": {
            "departureAirport": "Liverpool",
            "departureDate": "2030-05-27T00:00:00.000Z"
            },
            "bookingDetails": {
            "party": { "adults": 2, "children": 1 },
            "lengthOfStay": 7,
            "price": {
                "amount": 696.8,
                "currency": "GBP"
            }
            }
        };

        // Our List of Holidays
        const holidayList: Holiday[] = [holidayA, holidayB];
        
        // Get our List Container
        const { container: holidayCardList } = render(<HolidayCardList holidayList={holidayList} />);

        // Scoped List
        const holidayCardListScope = within(holidayCardList);

        // Get our Holiday Cards by Test ID (these should be stripped by Babel or a Test/Live Mode via process.env)
        const holidayCards = await holidayCardListScope.findAllByTestId('holiday-card');

        // Should be a set of 2 results
        expect(holidayCards.length).toBe(2);
    });
});