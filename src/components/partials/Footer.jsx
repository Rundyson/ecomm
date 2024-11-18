import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="container">
        <div className="flex flex-col md:flex md:flex-row md:justify-between pb-10 px-4">
          <div className="left-footer flex flex-col gap-5 text-gray-500">
            <img src={`${imgPath}/footerlogo.png`} alt="" />
            <p className="text-gray-500 ">Get newsletter update for upcoming product <br/> and best discount for all item</p>
            <div className="flex gap-5 items-center">
              <input className=" border border border-gray-500 rounded-3xl w-[20rem] py-2 px-5" type="text" placeholder="Your Email"/>
              <Link><button className="bg-black px-5 py-1 text-white rounded-3xl border border-white hover:bg-white hover:text-black hover:border hover:border-black">Submit</button></Link>
            </div>
          </div>
          <div className="right-footer flex gap-16 md:flex md:gap-36 mt-10 md:mt-0">
            <div>
              <h6 className="mb-5">Product</h6>
              <Link><p>Tshirt</p></Link>
              <Link><p>Jacket</p></Link>
              <Link><p>Shoes</p></Link>
              <Link><p>Pants</p></Link>
              <Link><p>Sunglasses</p></Link>
              <Link><p>Tuxedo</p></Link>
            </div>
            <div>
              <h6 className="mb-5">Categories</h6>
              <Link><p>Man</p></Link>
              <Link><p>Woman</p></Link>
              <Link><p>Kids</p></Link>
              <Link><p>Gift</p></Link>
              <Link><p>New Arrival</p></Link>
            </div>
            <div>
              <h6  className="mb-5">Our Social Media</h6>
              <Link><p>Instagram</p></Link>
              <Link><p>Facebook</p></Link>
              <Link><p>Youtube </p></Link>
              <Link><p>Twitter</p></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5 text-white flex flex-col text-center gap-5 px-12 md:gap-0 md:flex md:flex-row md:justify-between">
        <p>©2023 Tulos Production</p>
        <div className="flex gap-5">
          <Link><p>Terms and Conditon</p></Link>
          <Link><p>Privay Policy</p></Link>
          <Link><p>Cookie Policy</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
