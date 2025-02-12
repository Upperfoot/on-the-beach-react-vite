import { Hotel } from "../../types/hotel.interface";

interface HotelCardListProps {
    hotelList: Hotel[]
}

export const HotelCardList: React.FC<HotelCardListProps> = ({ hotelList }) => {
    return (
      <div className="hotel-card-list">
        { hotelList.length }
      </div>
    );
  };