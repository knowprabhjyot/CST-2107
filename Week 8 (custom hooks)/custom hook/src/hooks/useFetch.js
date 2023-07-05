import { useState } from "react";
import { useEffect } from "react";

function useFetch(url) {
    // it will call the api, and it will tell us if we have to load..., if the data is receieved, if there was an error
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data from API");
                }
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, isLoading, error};
}


export default useFetch;


// Promises 
    // Three states in promise ? Pending State, FullFilled, Rejected

// 1. Then Catch block

// fetch('url').then((response ) => setData(response)).catch((error) => setError(error));



// // 2. Async Await (ES7)

// try {
//     const response  = await fetch('url');
//     setData(response);
// } catch(error) {
//     setError(error);
// }
