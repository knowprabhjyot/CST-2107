/* eslint-disable react/prop-types */ 
import City from './City';

const Country = (props) => {
  console.log(props, 'props')
  return (
    <div>
      <img width="200" src={props.image} alt=""/>
      <p>{props.title}</p>

      <City name={props.cityName} />
      <hr/>
    </div>
  )
}

export default Country;