import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { LinkButton } from './Button';

const Berandabanner = () => {
  return (
    <>
        <div className="hero-beranda-wrapper">
            <Swiper
            slidesPerView={1}
							spaceBetween={1}
							slidesPerGroup={1}
							loop={true}
              autoplay={true}
							modules={[Autoplay]}
							className="mySwiper">
                <SwiperSlide >
                  <img src="/hero-landing-page.png" className='landing-hero-bg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/hero-landing-page2.png" className='landing-hero-bg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/hero-landing-page3.png" className='landing-hero-bg'/>
                </SwiperSlide>
            </Swiper>
  
            <div className="card-beranda-hero">
            <h1>Bersama 4R, Kelola Sampah Menjadi Produk</h1>
            <p>
                Ketahui bagaimana anda bisa menghasilkan produk inovatif sekaligus
                mengurangi sampah di Indonesia
            </p>
            <LinkButton type="PRIMARY_LONG">Belanja Sekarang</LinkButton>
            </div>
        </div>
     </>
  );
};

export default Berandabanner;
