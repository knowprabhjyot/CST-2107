"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface CountryPageParams {
    params: {
        name: string;
    }
}

interface Country {
    name: {
        common: string
    },
    currencies: {
        [key: string]: {
            name: string;
        }
    },
    flags: {
        png: string
    }
}

export default function CountryPage({ params }: CountryPageParams) {

    const [countryList, setCountryList] = useState<Country[]>([]);

    const handleApiCall = async () => {
        const URL = `https://restcountries.com/v3.1/name/${params.name}`;
        return await (await fetch(URL)).json();
    }

    useEffect(() => {
        handleApiCall().then((response) => {
            setCountryList(response);
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [params.name]);

    return (
        <div className='flex flex-col items-start p-4'>
            <Link className='border p-2 shadow-md bg-cyan-500 hover:bg-cyan-600 rounded text-white font-semibold' href={'/'}>Go Back!</Link>

            <div className='inline-grid grid-cols-3 gap-4'>
                {
                    countryList.map((country, index: number) => {
                        return <div className='rounded border p-2 shadow-md text-center' key={index}>
                            <h1 className='font-bold'>{country.name.common}</h1>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img width={400} height={400} src={country.flags.png} alt={country.name.common} />
                            {
                                Object.entries(country.currencies).map(([key, value], index) => {
                                    return <p key={index}>Currencies: {key}</p>
                                })
                            }
                        </div>
                    })
                }
            </div>

        </div>
    )
}
