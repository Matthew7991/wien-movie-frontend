import React, { useState, useEffect } from "react"
import Header from "../shared/Header"

function Dashboard() {
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

  const resetSeats = () => {
    fetch(import.meta.env.VITE_api_url + "/api/seats", {
      method: "DELETE",
    }).then((response) => setRefresh((prev) => !prev))
  }

  return (
    <main className="border-collapse w-fit">
      <Header text={"Willkommen Kinobesitzer"} />
      <section className="flex flex-col items-center gap-4 px-4 pt-2 pb-6 bg-gray-300 border border-gray-500 w-fit">
        <div className="flex justify-between gap-4 ">
          <div className="p-2 bg-white border border-gray-500">
            <p className="text-2xl">Freie Plätze</p>
            <p className="text-4xl font-bold text-center">
              {seats.filter((seat) => seat.reserved === false).length}
            </p>
          </div>
          <div className="p-2 bg-white border border-gray-500">
            <p className="text-2xl">Umsatz</p>
            <p className="text-4xl font-bold text-center">
              {seats
                .filter((seat) => seat.reserved === true)
                .reduce((prevValue, curValue) => {
                  // console.log(curValue)
                  return prevValue + curValue.price
                }, 0)}
              €
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={resetSeats}
          className="px-4 font-bold uppercase bg-red-700 border border-gray-500 rounded-full aspect-square w-fit">
          Reset
        </button>
      </section>
    </main>
  )
}

export default Dashboard
