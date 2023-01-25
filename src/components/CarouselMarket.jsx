import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

const CarouselMarket = () => {
  return (
    <div className="hero-marketplace">
      <div className="left-hero-marketplace">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={true}
          navigation={true}
          autoplay={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="MySwiper"
        >
          <SwiperSlide>
            <img src="/hero-marketplace.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/hero-marketplace2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/hero-marketplace.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <img
        src="/right-hero-marketplace.svg"
        className="right-hero-marketplace"
      />
    </div>
  );
};

export default CarouselMarket;

export const CarouselMarketPenjual = () => {
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={false}
      navigation={true}
      autoplay={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="MySwiper"
    >
      <SwiperSlide>
        <img src="/hero-landing-penjualan.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-landing-penjualan2.png" />
      </SwiperSlide>
    </Swiper>
  );
};
