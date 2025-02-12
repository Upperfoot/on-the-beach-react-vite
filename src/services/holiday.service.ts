import { Holiday } from "../types/holiday.interface";

export class HolidayService {
    // If the API had Sort / Order Functions, I would pass this as a Parameter
    fetchAll = async (): Promise<Holiday[]> => {
        return [];
    };
}