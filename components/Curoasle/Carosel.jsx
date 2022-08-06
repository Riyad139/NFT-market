import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Card from "../utils/Card/Card";

const card = [
  "/CardCarosel/CardCaros1.jpg",
  "/CardCarosel/CardCaros2.jpg",
  "/CardCarosel/CardCaros3.jpg",
  "/CardCarosel/CardCaros4.jpg",
  "/CardCarosel/CardCaros5.jpg",
  "/CardCarosel/CardCaros6.jpg",
];

export default function Carosel(params) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        //showsPagination={false}

        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {card.map((item, i) => (
          <SwiperSlide key={i}>
            <Card isCardSection={true} nft={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
