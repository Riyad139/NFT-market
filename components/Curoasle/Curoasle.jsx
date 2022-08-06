import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { reactRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Card from "../utils/Card/Card";

const onClick = (url) => {
  reactRouter.push(url);
};

const card = [
  "/Carosel/Caros1.jpeg",
  "/Carosel/Caros2.jpeg",
  "/Carosel/Caros3.jpeg",
  "/Carosel/Caros4.jpeg",
  "/Carosel/Caros5.jpeg",
  "/Carosel/Caros6.jpeg",
  "/Carosel/Caros7.jpeg",
  "/Carosel/Caros8.jpeg",
  "/Carosel/Caros9.jpeg",
];

export default function Curoasle(params) {
  const data = {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 680px
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <Swiper
        id="swiperBin"
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={data}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center"
      >
        {card.map((item, i) => (
          <SwiperSlide key={"robin" + i}>
            <Card nft={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
