import { fireEvent, render, within } from "@testing-library/react";
import { HolidayListContainer, sortHolidays } from "./HolidayListContainer";
import { HolidaySortEnum, HolidaySortOrderEnum } from "../../types/holiday-sort.enum";
import { Holiday } from "../../types/holiday.interface";
import { HolidayService } from "../../services/holiday.service";

describe("HolidayListContainer Component and Sorting Logic Within", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Reset Axios Mocks - Otherwise it'll cause leak issues between tests
  });

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

  test("unit test sorting logic within the HolidayListContainer Component", async () => {
    const holidays: Holiday[] = JSON.parse('[{"resort":{"id":"7dd27e42-2b5c-4237-86ac-97c26f72eb5b","name":"Iberostar Grand Salome","regionName":"Costa Adeje","countryName":"Tenerife","starRating":5,"overview":"The Iberostar Grand Salomehas an exceptional location in the south of Tenrife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf Courses, and is an ideal hotel for families couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg","description":"A tranquil resort swimming pool with clear blue water, surrounded by two-story villas with terracotta roofs under a bright blue sky."}},"flightDetails":{"departureAirport":"East Midlands","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2,"infants":1},"lengthOfStay":7,"price":{"amount":1136.5,"currency":"GBP"}}},{"resort":{"id":"f0ec3974-fb4e-4fb5-b964-2ac8a2e2c1a4","name":"Aguamarina Golf Hotel","regionName":"Costa Adeje","countryName":"Tenerife","starRating":4,"overview":"The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-2.jpg","description":"A bustling resort pool complex with palm trees, white buildings with red roofing, and guests enjoying sunbeds under blue parasols."}},"flightDetails":{"departureAirport":"Liverpool","departureDate":"2030-05-27T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":1},"lengthOfStay":7,"price":{"amount":696.8,"currency":"GBP"}}},{"resort":{"id":"674b4c76-4527-4a5b-a07a-717e3c4891ed","name":"Las Piramides Resort","regionName":"Costa Adeje","countryName":"Tenerife","starRating":3,"overview":"What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That\'s what. Hugely popular with the young and lively crowd, the Las Piramides Resort offers simple, budget accommodation for those looking to be right amongst it. At just 350m from the famous Veronicas Strip and 50m from the nearest shops, bars and restaurants, the property is perfectly located for nights out on the town. There’s also an outdoor swimming pool that is perfect for a chill-out session too.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-3.jpg","description":"A serene poolside view at dusk, with calm waters reflecting palm trees and blue sun loungers, bordered by a beachfront promenade."}},"flightDetails":{"departureAirport":"Manchester","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2},"lengthOfStay":7,"price":{"amount":499.99,"currency":"GBP"}}}]');
    const sortedHolidays = sortHolidays(holidays, HolidaySortEnum.ALPHABETICALLY, HolidaySortOrderEnum.ASC);

    expect(sortedHolidays.length).toEqual(3);
  });

  test("should pull through mock data and render HolidayCards", async () => {
      // Don't mind me throwing the entire response here!
      const mockResponse: Holiday[] = JSON.parse('[{"resort":{"id":"7dd27e42-2b5c-4237-86ac-97c26f72eb5b","name":"Iberostar Grand Salome","regionName":"Costa Adeje","countryName":"Tenerife","starRating":5,"overview":"The Iberostar Grand Salomehas an exceptional location in the south of Tenrife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf Courses, and is an ideal hotel for families couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg","description":"A tranquil resort swimming pool with clear blue water, surrounded by two-story villas with terracotta roofs under a bright blue sky."}},"flightDetails":{"departureAirport":"East Midlands","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2,"infants":1},"lengthOfStay":7,"price":{"amount":1136.5,"currency":"GBP"}}},{"resort":{"id":"f0ec3974-fb4e-4fb5-b964-2ac8a2e2c1a4","name":"Aguamarina Golf Hotel","regionName":"Costa Adeje","countryName":"Tenerife","starRating":4,"overview":"The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-2.jpg","description":"A bustling resort pool complex with palm trees, white buildings with red roofing, and guests enjoying sunbeds under blue parasols."}},"flightDetails":{"departureAirport":"Liverpool","departureDate":"2030-05-27T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":1},"lengthOfStay":7,"price":{"amount":696.8,"currency":"GBP"}}},{"resort":{"id":"674b4c76-4527-4a5b-a07a-717e3c4891ed","name":"Las Piramides Resort","regionName":"Costa Adeje","countryName":"Tenerife","starRating":3,"overview":"What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That\'s what. Hugely popular with the young and lively crowd, the Las Piramides Resort offers simple, budget accommodation for those looking to be right amongst it. At just 350m from the famous Veronicas Strip and 50m from the nearest shops, bars and restaurants, the property is perfectly located for nights out on the town. There’s also an outdoor swimming pool that is perfect for a chill-out session too.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-3.jpg","description":"A serene poolside view at dusk, with calm waters reflecting palm trees and blue sun loungers, bordered by a beachfront promenade."}},"flightDetails":{"departureAirport":"Manchester","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2},"lengthOfStay":7,"price":{"amount":499.99,"currency":"GBP"}}}]');

      // mock the Holiday Service
      jest.spyOn(HolidayService.prototype, "fetchAll").mockResolvedValue(mockResponse);

      // Get our List Container
      const { container: holidayCardList } = render(<HolidayListContainer />);

      // Scoped List
      const holidayCardListScope = within(holidayCardList);

      // Get our Holiday Cards by Test ID (these should be stripped by Babel or a Test/Live Mode via process.env)
      const holidayCards = await holidayCardListScope.findAllByTestId('holiday-card');

      // Should be a set of 3 results
      expect(holidayCards.length).toBe(3);
  });


  test("integration test to change sort order", async () => {
    // Don't mind me throwing the entire response here!
    const mockResponse: Holiday[] = JSON.parse('[{"resort":{"id":"7dd27e42-2b5c-4237-86ac-97c26f72eb5b","name":"Iberostar Grand Salome","regionName":"Costa Adeje","countryName":"Tenerife","starRating":5,"overview":"The Iberostar Grand Salomehas an exceptional location in the south of Tenrife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf Courses, and is an ideal hotel for families couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-1.jpg","description":"A tranquil resort swimming pool with clear blue water, surrounded by two-story villas with terracotta roofs under a bright blue sky."}},"flightDetails":{"departureAirport":"East Midlands","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2,"infants":1},"lengthOfStay":7,"price":{"amount":1136.5,"currency":"GBP"}}},{"resort":{"id":"f0ec3974-fb4e-4fb5-b964-2ac8a2e2c1a4","name":"Aguamarina Golf Hotel","regionName":"Costa Adeje","countryName":"Tenerife","starRating":4,"overview":"The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-2.jpg","description":"A bustling resort pool complex with palm trees, white buildings with red roofing, and guests enjoying sunbeds under blue parasols."}},"flightDetails":{"departureAirport":"Liverpool","departureDate":"2030-05-27T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":1},"lengthOfStay":7,"price":{"amount":696.8,"currency":"GBP"}}},{"resort":{"id":"674b4c76-4527-4a5b-a07a-717e3c4891ed","name":"Las Piramides Resort","regionName":"Costa Adeje","countryName":"Tenerife","starRating":3,"overview":"What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That\'s what. Hugely popular with the young and lively crowd, the Las Piramides Resort offers simple, budget accommodation for those looking to be right amongst it. At just 350m from the famous Veronicas Strip and 50m from the nearest shops, bars and restaurants, the property is perfectly located for nights out on the town. There’s also an outdoor swimming pool that is perfect for a chill-out session too.","image":{"url":"https://static.onthebeach.co.uk/fe-code-test/hotel-image-3.jpg","description":"A serene poolside view at dusk, with calm waters reflecting palm trees and blue sun loungers, bordered by a beachfront promenade."}},"flightDetails":{"departureAirport":"Manchester","departureDate":"2030-07-03T00:00:00.000Z"},"bookingDetails":{"party":{"adults":2,"children":2},"lengthOfStay":7,"price":{"amount":499.99,"currency":"GBP"}}}]');

    // mock the Holiday Service
    jest.spyOn(HolidayService.prototype, "fetchAll").mockResolvedValue(mockResponse);

    // Get our List Container
    const { container: holidayCardList } = render(<HolidayListContainer />);

    // Scoped List
    const holidayCardListScope = within(holidayCardList);

    // Get our Holiday Cards by Test ID (these should be stripped by Babel or a Test/Live Mode via process.env)
    let holidayCards = await holidayCardListScope.findAllByTestId('holiday-card');

    // Should be a set of 3 results
    expect(holidayCards.length).toBe(3);

    // First result should be Aguamarina
    expect(await within(holidayCards[0]).findByText('Aguamarina Golf Hotel')).not.toBeNull();

    // Lets click on the Alpha Sort Button
    const alphaSortButton = holidayCardListScope.getByTestId('sort-alphabetically');

    // Click the alphaSortButton
    fireEvent.click(alphaSortButton);
    
    // Get Our Cards Again
    holidayCards = await holidayCardListScope.findAllByTestId('holiday-card');

    // Should now be AlphaNumeric Descending - First result should be Las Piramides Resort
    expect(await within(holidayCards[0]).findByText('Las Piramides Resort')).not.toBeNull();
  });
});