import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import "./styles.css";
import data from './constant.json';

export default function App() {

  const [hotelData, setHotelData ] = useState(data);

  return (
    <div className="App">
      <Header />
      <Banner />
      <HotelInfo data={hotelData} />
    </div>
  );
}
