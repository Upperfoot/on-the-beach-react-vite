import axios from "axios";
import { HolidayService } from "./holiday.service";

jest.mock("axios"); // Mock

describe("Holiday API Service", () => {
  const holidayService = new HolidayService();

  afterEach(() => {
    jest.clearAllMocks(); // Reset Axios Mocks - Otherwise it'll cause leak issues between tests
  });

  test("fetch all hotels, should return an empty array when the API fails", async () => {
    // Let's simulate API failure
    (axios.get as jest.Mock).mockRejectedValue(new Error("API error"));

    const hotels = await holidayService.fetchAll();

    expect(hotels).toEqual([]);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});