import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Card from "../utils/Card/Card";

const card = [
  "/Carosel/Caros-1.jpeg",
  "/Carosel/Caros-2.jpeg",
  "/Carosel/Caros-3.jpeg",
  "/Carosel/Caros-4.jpeg",
  "/Carosel/Caros-5.jpeg",
  "/Carosel/Caros-6.jpeg",
  "/Carosel/Caros-7.jpeg",
  "/Carosel/Caros-8.jpeg",
  "/Carosel/Caros-9.jpeg",
];

export default function Curoasle(params) {
  const data = {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 680px
    770: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1000: {
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
        modules={[ Navigation]}
        className="mySwiper flex justify-center"
      >
        {card.map((item, i) => (
          <SwiperSlide key={"card-" + i}>
            <Card nft={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
