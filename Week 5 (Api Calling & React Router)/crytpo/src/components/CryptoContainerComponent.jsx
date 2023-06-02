import { useEffect, useState } from "react";

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

    return (
        <div>
            {
                cryptoData.map((cryptoInfo) => {
                    return <div>{cryptoInfo.name}</div>
                })
            }
        </div>
    )
}

export default CryptoContainerComponent;