import './App.css'
import { HolidayCardList } from './components/holiday-card-list/HolidayCardList'
import { Holiday } from './types/holiday.interface';

function App() {
    const holidayA: Holiday = {
        uuid: "test-uuid",
        name: "Hello Hotel",
        location: "Manchester",
        stars: 5,
        image: "image.jpg",
        price: 999.99,
        summary: "Luxurious Hotel located in the heart of Manchester"
    };

    const holidayB: Holiday = {
        uuid: "test-uuid-2",
        name: "Hello Hotel 2",
        location: "Liverpool",
        stars: 4,
        image: "image.jpg",
        price: 799.99,
        summary: "Luxurious Hotel located in the heart of Liverpool"
    };

    const holidayList: Holiday[] = [holidayA, holidayB];

  return (
    <>
      <HolidayCardList holidayList={holidayList} />
    </>
  )
}

export default App
