import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const HomeBanner = ({img, header, subheader}) => {
  return (
    <div>
        <section className="home-banner relative">
            <div className="container">
            <img src={`${imgPath}/${img}`} alt="" className="rounded-3xl h-screen w-full object-cover"/>
            <div className="banner-details absolute bottom-10 left-20 text-white w-[1700px] mx-auto">
                <h1 className="font-semibold mb-10">{header}</h1>
                <div className="texts flex justify-between">
                <small>{subheader}</small>
                <button className="bg-white text-black px-5 py-1 rounded-full text-sm hover:bg-black hover:text-white">
                  <Link to="/buynow">Buy Now</Link> 
                </button>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default HomeBanner
