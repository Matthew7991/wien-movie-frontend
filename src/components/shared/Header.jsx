import React from "react"
import { Link, useLocation } from "react-router-dom"

function Header({ text }) {
  const location = useLocation().pathname

  return (
    <section className="bg-[#ffe81f] py-4 px-2 border-gray-500 border flex justify-between items-baseline gap-4">
      <h1 className="text-2xl">{text}</h1>
      {location === "/" ? (
        <Link
          className="text-blue-400 underline"
          to={"/dashboard"}>
          Admin
        </Link>
      ) : (
        <Link
          className="text-blue-400 underline"
          to={"/"}>
          Home
        </Link>
      )}
    </section>
  )
}

export default Header
