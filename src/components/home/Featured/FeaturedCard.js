import React from 'react'
import {featured} from '../../../Data'

function FeaturedCard() {
  return (
    <>
    <div className='content grid5 mtop'>
      {featured.map((e, index) => (
        <div className='box' key={index}>
          <img src={e.cover} alt='' />
          <h4>{e.name}</h4>
          <label>{e.total}</label>
        </div>
      ))}
    </div>
  </>
  )
}

export default FeaturedCard