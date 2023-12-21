import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <div>
        <p>lorem5lorememem</p>
        <img src="https://www.course-api.com/images/store/product-2.jpeg" alt="Girl in a jacket" width="500" height="600"/>

      </div>
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
