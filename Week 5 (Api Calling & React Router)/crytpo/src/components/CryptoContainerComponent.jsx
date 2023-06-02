import { useEffect, useState } from "react";
import CryptoTableComponent from "./CryptoTableComponent";
import { TextField } from "@mui/material";

const CryptoContainerComponent = () => {


    const [cryptoData , setCryptoData] = useState([]);

    // UseEffect

    // This will be called only once 
    useEffect(() => {
        // This is the place where we will call our API
        getCryptoData();
    }, [])

    const getCryptoData = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
        const convertedJSONData = await data.json();
        setCryptoData(convertedJSONData);
    }

    // Try to write the search logic (So its an inclass assignment so it won't be graded)

    // I will give you another assignment where 

    return (
        <div>

            {/* You have to add search field through which you can filter cryptoData */}
            <TextField />

            {/* {
                cryptoData.map((cryptoInfo) => {
                    return <div>{cryptoInfo.name}</div>
                })
            } */}
            <CryptoTableComponent data={cryptoData} />
        </div>
    )
}

export default CryptoContainerComponent;