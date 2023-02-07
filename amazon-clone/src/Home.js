import React from 'react'

import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='12312341'
            title="The Lean Startup How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={4}
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            image='https://m.media-amazon.com/images/I/61TbMV5bQqL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='49538050'
            title='Samsung Galaxy Watch4 44MM SM-R870 Aluminum Smartwatch GPS Only (Renewed) '
            price={199.99}
            image='https://m.media-amazon.com/images/I/61jGJOf9KSL._AC_SL1500_.jpg'
            rating={3}
          />
          <Product
            id='23445930'
            title='All-New Echo Dot (5th Gen, 2022 release) | Bigger vibrant sound in a compact smart speaker with Alexa | Charcoal '
            price={98.99}
            image='https://m.media-amazon.com/images/I/41qKwc0BAdL._AC_.jpg'
            rating={5}
          />
          <Product
            id='3254354345'
            title='Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (4th Generation)'
            price={598.99}
            image='https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='90829332'
            title='SAMSUNG 49” Odyssey G9 Gaming Monitor, 1000R Curved Screen, QLED, Dual QHD Display, 240Hz, NVIDIA G-SYNC and FreeSync Premium Pro, LC49G95TSSNXZA, Black '
            price={1094.98}
            image='https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
