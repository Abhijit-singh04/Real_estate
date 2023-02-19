import React from 'react'
import { price } from '../../../Data'

function PriceCard() {
    return (
        <>
            <div className='content flex mtop'>
                {price.map((e, index) => (
                    <div className='box shadow' key={index}>
                        <div className='topbtn'>
                            <button className='btn3'>{e.best}</button>
                        </div>
                        <h3>{e.plan}</h3>
                        <h1> <span>$</span> {e.price} </h1>
                        <p>{e.ptext}</p>

                        <ul>
                            {e.list.map((e_val) => {
                                const { icon, text, change } = e_val
                                return (
                                    <li>
                                        <label
                                            style={{
                                                background: change === "color" ? "#dc35451f" : "#27ae601f",
                                                color: change === "color" ? "#dc3848" : "#27ae60",
                                            }}
                                        >
                                            {icon}
                                        </label>
                                        <p>{text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <button className='btn5'
                            style={{
                                background: e.plan === "Standard" ? "#27ae60" : "#fff",
                                color: e.plan === "Standard" ? "#fff" : "#27ae60",
                            }}
                        >
                            Start {e.plan}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PriceCard