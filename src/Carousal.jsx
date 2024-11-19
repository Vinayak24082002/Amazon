import React, { useState } from 'react';

const images = [
  "https://amazonclonewebapp.netlify.app/assets/bannerImgOne-cff4a2d0.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/18.CB543076903.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/November/GW/Hero/Badminton/image-1_33._CB541567629_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1.CB582889946.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Phase3b/929712._CB542298789_.png"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className=" flex">
      <div 
        className="absolute  top-1/5 left-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent-100" 
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      
      <div className="flex w-full items-center justify-center">
        {images.map((item, index) => (
          current === index && (
            <img 
              key={index} 
              src={item} 
              alt="carousel slide" 
              className="w-full h-[90vh] transition duration-200 ease-in-out no-scrollbar" 
            />
          )
        ))}
      </div>
      
      <div 
        className="absolute top-1/5 right-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent-100" 
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;