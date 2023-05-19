import './HotelCard.css';

const HotelCard = ({ data }) => {
  return (
    <div className='card-container'>
      <div className='card-header'>
        <img src={data.image} width="200px" alt=""/>
      </div>
      <div className='card-body'>
        <img width="20px" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt=""/>
        <span>{data.rating}</span>
        <img width="20px" src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt=""/>
        <span>{data.like}</span>
        <span>{data.location}</span>
      </div>
      <p>Price : $ {data.price}</p>
    </div>
  )
}

export default HotelCard;