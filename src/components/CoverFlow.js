// // import Swiper core and required modules
import './CoverFlow.css';

// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-coverflow';

// function CoverFlow() {
//     //   return (
//   return (
//     <div className="photo-container">
//         <Swiper
//             effect={"coverflow"}
//             grabCursor={"true"}
//             centeredSlides={"true"}
//             spaceBetween={0}
//             slidesPerView={4}
//             loop={"true"}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             coverflowEffect={{
//                 rotate: 20,
//                 stretch: 25,
//                 depth: 250,
//                 modifier: 1,
//                 slideShadows: false,
//             }}
//             breakpoints={{
//                 700: {
//                     spaceBetween: 0,
//                     slidesPerView: 4,
//                 },
//                 500: {
//                     spaceBetween: 100,
//                     slidesPerView: 2,
//                 },
//                 411: {
//                     spaceBetween: 100,
//                     slidesPerView: 2,
//             },
//                 300: {
//                     spaceBetween: 0,
//                     slidesPerView: 1,
//             },
//           }}
//         >

//           <SwiperSlide>
//             <img src={require('../img/ppnft_001.png')} alt="pic1" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={require('../img/ppnft_002.png')} alt="pic2" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={require('../img/ppnft_003.png')} alt="pic3" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={require('../img/ppnft_004.png')} alt="pic4" className="photos" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     //   <SwiperSlide><img src={require('../img/ppnft_001.png')} /></SwiperSlide>
//     //   <SwiperSlide><img src={require('../img/ppnft_002.png')} /></SwiperSlide>
//     //   <SwiperSlide><img src={require('../img/ppnft_003.png')} /></SwiperSlide>
//     //   <SwiperSlide><img src={require('../img/ppnft_004.png')} /></SwiperSlide>
      

//   );
// };
// export default CoverFlow;

// import React from "react";
// import "./App.css";

// // stock photos downloaded from pexels.com were added to the src folder and 
// // imported to this file as below.
// import photo1 from "./photo1.jpg";
// import photo2 from "./photo2.jpg";
// import photo3 from "./photo3.jpg";
// import photo4 from "./photo4.jpg";
// import photo5 from "./photo5.jpg";

// // import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-coverflow/effect-coverflow.scss";

// // import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules. In this example, 
// // we will use Pagination and Coverflow
// import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

// // configure Swiper to use modules
// SwiperCore.use([Pagination, EffectCoverflow]);

// function CoverFlow() {
//   return (
//       <div className="photo-container">
//         <Swiper
//           effect="coverflow"
//           grabCursor="true"
//           centeredSlides="true"
//           spaceBetween={0}
//           slidesPerView={4}
//           loop="true"
//           pagination={{ clickable: true, dynamicBullets: true }}
//           coverflowEffect={{
//             rotate: 20,
//             stretch: 25,
//             depth: 250,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           breakpoints={{
//             700: {
//               spaceBetween: 0,
//               slidesPerView: 4,
//             },
//             500: {
//               spaceBetween: 100,
//               slidesPerView: 2,
//             },
//             411: {
//               spaceBetween: 100,
//               slidesPerView: 2,
//             },
//             300: {
//               spaceBetween: 0,
//               slidesPerView: 1,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <img src={photo1} alt="pic1" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={photo2} alt="pic2" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={photo3} alt="pic3" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={photo4} alt="pic4" className="photos" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={photo5} alt="pic5" className="photos" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//   );
// }



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function CoverFlow() {
  
  
  
  return (
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
        <SwiperSlide>
            <img src={require('../img/ppnft_001.png')} alt="pic1" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../img/ppnft_002.png')} alt="pic2" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../img/ppnft_003.png')} alt="pic3" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../img/ppnft_004.png')} alt="pic4" className="photos" />
        </SwiperSlide>
    </Swiper>
    </>
  )
}
