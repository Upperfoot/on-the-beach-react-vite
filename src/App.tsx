import './App.css'
import { HotelCardList } from './components/hotel-card-list/HotelCardList'
import { Hotel } from './types/hotel.interface';

function App() {
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

  return (
    <>
      <HotelCardList hotelList={hotelList} />
    </>
  )
}

export default App
