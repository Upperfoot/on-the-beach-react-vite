import { Hotel } from "../../types/hotel.interface";
import styles from "./HotelCard.module.css";

interface HotelCardProps {
    hotel: Hotel
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
      <div className={styles.hotelCard}>
        { hotel.name }
      </div>
    );
  };