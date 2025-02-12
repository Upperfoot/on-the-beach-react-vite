import axios from "axios";
import { Holiday } from "../types/holiday.interface";

const API_URL = "https://static.onthebeach.co.uk/fe-code-test/data.json"; // Using hardcoded value for now, could use .env files, or derive from process

export class HolidayService {
    // If the API had Sort / Order Functions, I would pass this as a Parameter
    fetchAll = async (): Promise<Holiday[]> => {
        try {
            const response = await axios.get<Holiday[]>(API_URL); // I'm not manually mapping, just casting, the API may change in future however
            return response.data;
        } catch (error) {
            return []; // Return empty array if fetch fails
        }
    };
}