import React from 'react'
import Heading from '../../common/Heading'
import Room_PricesCard from './Room_PricesCard'
import './Room_Prices.css'



function Room_Prices() {
  return (
    <>
      <section className='Room_Prices padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <Room_PricesCard/>
        </div>
      </section>
    </>
  )
}

export default Room_Prices