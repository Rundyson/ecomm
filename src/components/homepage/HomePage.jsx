import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import HomeBanner from './HomeBanner'
import ItemCards from './ItemCards'
import WearToWedding from './WearToWedding'

const HomePage = () => {
  return (
    <>
      <Header/>
      <HomeBanner img="banner.jpg" header="TOLUS SPRING COLLECTION" subheader="Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection."/>
      <ItemCards/>
      <WearToWedding img="secondbanner.png" header="WEAR TO WEDDING" subheader="A symphony of exquisite designs tailored for your unforgettable moments" button="See Details"/>
      <Footer/>
    </>
  )
}

export default HomePage
