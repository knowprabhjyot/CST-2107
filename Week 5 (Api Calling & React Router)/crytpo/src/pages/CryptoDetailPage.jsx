import { Button, Card, CardContent, CardMedia, Divider, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CryptoDetailPage = () => {
    // React router dom also provides a way to access what is present in the URL as a param
    const { coin } = useParams();
    const [cryptoData, setCryptoData] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getCryptoDataById();
    }, [coin]);
    


    const getCryptoDataById = async () => {
        setLoading(true);
        const data = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
        const convertedJSONData = await data.json();
        setCryptoData(convertedJSONData);
        setLoading(false);
    }

    const handleGoBack = () => {
        navigate('/');
    }

    return loading ?  <LinearProgress /> :  <>
    
    <Button variant="contained" onClick={handleGoBack}>
    Go Back!
    </Button>
    
    <Divider />

     <Card sx={{
        width: 400,
        marginTop: 20
    }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cryptoData.image?.large}
        />
        <CardContent>
            <Typography gutterBottom variant="h4">
                {cryptoData.name}
            </Typography>
            <Typography variant="h5">
                Rank  : {cryptoData.market_cap_rank}
            </Typography>
            <Typography variant="h5">
                Algorithm Used  : {cryptoData.hashing_algorithm}
            </Typography>
        </CardContent>
    </Card>
    </>
}

export default CryptoDetailPage;