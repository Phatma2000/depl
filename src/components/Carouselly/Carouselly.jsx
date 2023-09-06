import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Ionicon } from "react-ionicons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./carouselly.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import firstCard1 from "./photos/firstCard1.jpg";
import firstCard2 from "./photos/firstCard2.jpg";
import secondCard1 from "./photos/secondCard1.jpg";
import secondCard2 from "./photos/secondCard2.jpg";
import thirdCard1 from "./photos/thirdCard1.jpg";
import thirdCard2 from "./photos/thirdCard2.jpg";
import Store from "../context/store";

export default function Carouselly() {
  const { chooseCard, setChooseCard } = useContext(Store);

  const handleImageClick = (value) => {
    setChooseCard(value);
  };

  return (
    <>
      {/* <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={firstCard1} onClick={() => handleImageClick(1)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firstCard2} onClick={() => handleImageClick(1)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard1} onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard2} onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdCard1} onClick={() => handleImageClick(3)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdCard2} onClick={() => handleImageClick(3)} />
          </SwiperSlide>
          <SwiperSlide>
              <img src={secondCard1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={secondCard2} />
            </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper> */}
      {/* </div> */}
      {/* <a href="#" className="button button--hoo">
        <div className="button__wrapper">
          <span className="button__text">ENTRY</span>
        </div>
        <div className="characterBox">
          <div className="character wakeup">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
            <div className="charactor__body"></div>
          </div>
          <div className="character wakeup">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
            <div className="charactor__body"></div>
          </div>
          <div className="character">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
            <div className="charactor__body"></div>
          </div>
        </div>
      </a> */}
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={firstCard1} onClick={() => handleImageClick(1)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firstCard2} onClick={() => handleImageClick(1)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard1} onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard2} onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdCard1} onClick={() => handleImageClick(3)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdCard2} onClick={() => handleImageClick(3)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard1} onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondCard2} onClick={() => handleImageClick(2)} />
          </SwiperSlide>

          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
