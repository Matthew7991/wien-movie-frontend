import Header from "../shared/Header"
import SeatItem from "../shared/SeatItem"
import React, { useState, useEffect } from "react"

function Home() {
  const [seats, setSeats] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch(import.meta.env.VITE_api_url + "/api/seats")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setSeats(data)
      })
  }, [refresh])

  return (
    <main className="border-collapse w-fit">
      <Header text={"Willkommen"} />
      <section className="flex flex-col gap-4 px-4 pt-2 pb-6 bg-gray-300 border border-gray-500 w-fit">
        <div className="grid grid-cols-6 gap-4 px-2">
          {seats.map((seat) => {
            return (
              <SeatItem
                seat={seat}
                key={seat.id}
                reload={setRefresh}
              />
            )
          })}
        </div>
        <div className="w-full h-4 bg-red-800 border border-gray-500"></div>
      </section>
    </main>
  )
}

export default Home
