import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Product from './Components/Products/Product'
import AOS from 'aos'
import "aos/dist/aos.css";
import TopProduct from './Components/TopProducts/TopProduct'
import Banner from './Components/Banner/Banner'
import Subcribe from './Components/Subscribe/Subcribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

const App = () => {
 
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProduct/>
      <Banner />
      <Subcribe />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default App