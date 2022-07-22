import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

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
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {card.map((item, i) => (
          <SwiperSlide key={i}>
            <Card nft={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
