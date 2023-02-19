import React from 'react'
import "./Footer.css"
import {footer} from '../../../Data'
import logo_light from '../../images/logo-light.png'

function Footer() {
  return (
    <>
    <section className='footerContact'>
      <div className='container'>
        <div className='send flex'>
          <div className='text'>
            <h1>Do You Have Questions ?</h1>
            <p>We'll help you to grow your career and growth.</p>
          </div>
          <button className='btn5'>Contact Us Today</button>
        </div>
      </div>
    </section>

    <footer>
      <div className='container'>
        <div className='box'>
          <div className='logo'>
            <img src={logo_light} alt='' />
            <h2>Do You Need Help With Anything?</h2>
            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

            <div className='input flex'>
              <input type='text' placeholder='Email Address' />
              <button >Subscribe</button>
            </div>
          </div>
        </div>

        {footer.map((val) => (
          <div className='box'>
            <h3>{val.title}</h3>
            <ul>
              {val.text.map((items) => (
                <li> {items.list} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
    <div className='legal'>
      <span> @2022 | Singage</span>
    </div>
  </>
  )
}

export default Footer