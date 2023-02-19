import React from "react"
import Awards from "./Awards/Awards"
import Location from "../Location/Location"
import Featured from "./Featured/Featured"
import Hero from "./hero/Hero"
import Price from "./prices/Price"
import Room_Prices from "./Room_Prices/Room_Prices"
import Team from "./Team/Team"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Room_Prices />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home