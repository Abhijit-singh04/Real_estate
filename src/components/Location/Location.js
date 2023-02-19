import React from 'react'
import Heading from '../common/Heading'
import './Location.css'
import {location} from '../../Data'

function Location() {
  return (
    <>
    <section className='location padding'>
      <div className='container'>
        <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

        <div className='content grid3 mtop'>
          {location.map((e, index) => (
            <div className='box' key={index}>
              <img src={e.cover} alt='' />
              <div className='overlay'>
                <h5>{e.name}</h5>
                <p>
                  <label>{e.Villas}</label>
                  <label>{e.Offices}</label>
                  <label>{e.Apartments}</label>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}

export default Location