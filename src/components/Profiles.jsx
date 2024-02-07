'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ServiceData } from "../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", backgroundColor: '#1F271B', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', height: '30px', width: '30px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", backgroundColor: '#1F271B', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', height: '30px', width: '30px' }}
      onClick={onClick}
    />
  );
}

function Profiles() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="flex items-center justify-center flex-col h-[600px] sm:hidden lg:flex">
        <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
      {ServiceData.map((item) => (
          <div key={item.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={item.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-center">{item.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};

// import React from 'react'
// import { Carousel, Card } from 'flowbite-react';
// import Jenny from '../assets/Jenny_img.jpg'
// import mexflag from '../assets/flag.png'
// import Bauzan from '../assets/bauzan_img.jpg'


//     function Profiles() {

     
//       return (
//         <div className="h-64 sm:h-full xl:h-96 2xl:h-96 justify-center lg:flex xl:flex 2xl:flex sm:hidden">
//           <Carousel indicators={false} className='h-full sm:h-full lg:h-full my-12 max-w-4xl 'leftControl="←" rightControl="→" >
//           <Card className="max-w-sm sm:max-w-xs">
//               <div className="flex flex-col items-center py-8  ">
//                 <div className='h-28 m-4'>
//                 <img src={Jenny} className='h-full rounded-full' />
//                 </div>

//                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jennyfer Bauzan Jr</h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//                 <div className="mt-4 flex space-x-3 lg:mt-6">
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                    <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
//                     <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
//                   </svg>  
    
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                     <img src={mexflag} alt="" className='h-6 my-2' />
//                   </a>
//                 </div>
//               </div>
//             </Card>
//             <Card className="max-w-sm">
//               <div className="flex flex-col items-center py-8  ">
//                 <div className='h-28 m-4'>
//                 <img src={Jenny} className='h-full rounded-full' />
//                 </div>

//                 <h5 className="mb-1 text-xl font-medium text-gray-900">Jennyfer Bauzan Jr</h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//                 <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center"
//                   >
//                     {/* <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
//                     <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
//                   </svg> */}
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                   <img src={mexflag} alt="" className='h-6 my-2' />
//                   </a>
//                 </div>
//               </div>
//             </Card>
//           </Carousel>
//         </div>

//   )
// }

export default Profiles