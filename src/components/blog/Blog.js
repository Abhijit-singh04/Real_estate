import React from 'react'
import Back from '../common/Back'
import Room_PricesCard from '../home/Room_Prices/Room_PricesCard'
import img from "../images/about.jpg"
import '../home/Room_Prices/Room_Prices.css'


function Blog() {
    return (
        <>
            <section className='blog-out mb'>
                <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
                <div className='container Room_Prices'>
                    <Room_PricesCard />
                </div>
            </section>
        </>
    )
}

export default Blog