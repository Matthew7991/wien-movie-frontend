import React from "react"

function Header({ text }) {
  return (
    <section className="bg-[#ffe81f] py-4 px-2 border-gray-500 border">
      <h1 className="text-2xl">{text}</h1>
    </section>
  )
}

export default Header
