import React from "react";
import img1 from "../../assets/shert/shirt.png";
import img2 from "../../assets/shert/shirt2.png";
import img3 from "../../assets/shert/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProduct = () => {
  return (
    <>
      <div>
        <div className="container">
          {/* Header Section */}
          <div className="text-left mb-24">
            <p data-aos="fade-up" className="text-sm text-orange-300">
              Top Rated Products For You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              repellat culpa rem atque necessitatibus autem perspiciatis alias
              libero, ex odio.
            </p>
          </div>

          {/* Body Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div key={data.id} 
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-orange-300 hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                {/* Image Section */}
                <div className="h-[300px]">
                  <img src={data.img} alt={data.title} 
                  className="mx-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
                </div>

                {/* Detail Section */}
                <div className="p-4 text-center">
                 {/* Star rating */}
                 <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                 </div>
                 <h1 className="text-xl font-bold">{data.title}</h1>
                 <p className="text-gray-500 text-sm line-clamp-2">{data.description}</p>
                 <button
                 className="bg-orange-300 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400"
                //  onClick={handleOrderPopup} 
                 >
                   Order Now
                 </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
