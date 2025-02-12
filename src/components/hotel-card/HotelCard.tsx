import { Hotel } from "../../types/hotel.interface";

interface HotelCardProps {
    hotel: Hotel
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
      <div className="hotel-card">
        { hotel.name }
      </div>
    );
  };