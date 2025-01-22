import React from 'react';
import img1 from '../../assets/woman/women4.jpg';
import img2 from '../../assets/woman/women2.jpg';
import img3 from '../../assets/woman/women3.jpg';
import img4 from '../../assets/woman/women4.jpg';
import img5 from '../../assets/woman/women2.jpg';
import { FaStar } from "react-icons/fa";


const ProductsData = [
    { id: 1, img: img1, title: "Women Ethnic", rating: 5.0, author: "white", aosDelay: "0" },
    { id: 2, img: img2, title: "Women western", rating: 4.0, author: "red", aosDelay: "200" },
    { id: 3, img: img3, title: "Goggles", rating: 4.4, author: "brown", aosDelay: "0" },
    { id: 4, img: img4, title: "Women Ethnic", rating: 5.0, author: "white", aosDelay: "0" },
    { id: 5, img: img5, title: "Women Ethnic", rating: 5.0, author: "white", aosDelay: "0" },
  ];
  

const Product = () => {
  return (
  <>
   <div className='mt-14 mb-12 '>
     <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-orange-300'>Top Selling Products For You</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat culpa rem atque necessitatibus autem perspiciatis alias libero, ex odio.
          </p>
        </div>

        {/* Body Section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
          {/* Card Section */}
           {
            ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className='space-y-3'>
                  <img src={data.img} alt="" 
                  className='h-[220px] w-[150px] object-cover rounded-md cursor-pointer hover:scale-1'
                  />
                   <div>
                    <h3 className='font-semibold '>{data.title}</h3>
                    <p className='text-sm text-gray-600'>{data.author}</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400'/>
                        <span>{data.rating}</span>
                    </div>
                   </div>
                </div>
            ))
           }
          </div> 
        </div>
     </div>
   </div>
  </>
  )
}

export default Product
