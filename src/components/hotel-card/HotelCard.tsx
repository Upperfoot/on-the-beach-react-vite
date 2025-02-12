import { Hotel } from "../../types/hotel.interface";

interface HotelCardProps {
    hotel: Hotel
}

export const HotelCard: React.FC<HotelCardProps> = () => {
    return (
      <div>
        Hello
      </div>
    );
  };