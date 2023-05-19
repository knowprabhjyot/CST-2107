import HotelCard from "../HotelCard/HotelCard";
import './HotelInfo.css';

const HotelInfo = ({ data }) => {

  return (
    <div className='hotel-card-container'>
      {
        data.map((hotelData) => {
          return  <HotelCard data={hotelData} />
        })
      }
    </div>
  )
}

export default HotelInfo;