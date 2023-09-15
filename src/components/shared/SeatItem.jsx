import React from "react"

function SeatItem({ seat, reload }) {
  const reserve = () => {
    fetch(import.meta.env.VITE_api_url + "/api/seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seat),
    }).then((response) => reload((prev) => !prev))
  }

  return (
    <button
      onClick={reserve}
      className={`p-4 aspect-square rounded-full w-fit border-gray-500 border ${
        seat.reserved
          ? "bg-red-600"
          : seat.type === "Oberschicht"
          ? "bg-teal-400"
          : "bg-[#ffe81f]"
      }`}></button>
  )
}

export default SeatItem
