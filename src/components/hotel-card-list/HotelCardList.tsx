import { Hotel } from "../../types/hotel.interface";
import { HotelCard } from "../hotel-card/HotelCard";

interface HotelCardListProps {
    hotelList: Hotel[]
}

export const HotelCardList: React.FC<HotelCardListProps> = ({ hotelList }) => {
    return (
      <div className="hotel-card-list">
        <span>Hotel Card List Here</span>
        {hotelList.map(hotel => 
            <HotelCard hotel={hotel} />
        )}
      </div>
    );
  };