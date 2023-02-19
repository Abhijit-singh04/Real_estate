import React, { useState } from 'react'
import "./header.css"
import { nav } from '../../../Data'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function Header() {

  const [navList, setNavList] = useState(false)

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className='nav'>
          <ul className={navList ? "small" : "flex"}>
            {nav.map((e, index) => (
              <li key={index}>
                <Link to={e.path}>{e.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='button flex'>
          <h4>
            <span>2</span> My List
          </h4>
          <button className='btn1'>
            <i className='fa fa-sign-out'></i> Sign In
          </button>
        </div>

        <div className='toggle'>
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </div>
        {/* <h1>hello</h1> */}
      </div>
    </header>
  )
}

export default Header