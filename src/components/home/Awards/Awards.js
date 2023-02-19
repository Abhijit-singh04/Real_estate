import React from 'react'
import Heading from '../../common/Heading'
import "./awards.css"
import { awards } from '../../../Data'

function Awards() {
    return (
        <>
            {/* <div>Awards</div> */}
            <section className='awards padding'>
                <div className='container'>
                    <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

                    <div className='content grid4 mtop'>
                        {awards.map((e, index) => {
                            const { icon, num, name } = e;
                            return (
                                <div className='box' key={index}>
                                    <div className='icon'>
                                        <span>{icon}</span>
                                    </div>
                                    <h1>{num}</h1>
                                    <p>{name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Awards