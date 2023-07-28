"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Home() {

  const [countryName, setCountryName] = useState("");
  const router = useRouter();


  // Just keeping any as type for now
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/country/${countryName}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold py-4">Search for a country name</h1>
        <div>
          <input className="border border-gray-300 rounded p-4" onChange={(event) => setCountryName(event.target.value)} value={countryName} type="text" placeholder="Search for a country" />
          <button className="bg-sky-500 text-white font-bold p-4 rounded hover:bg-blue-600">Search</button>
        </div>
      </form>
    </div>
  )
}
