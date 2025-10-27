// BrandSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; 

// Brand Images
import logo1 from "/asset/images/logo1.jpg";
import logo2 from "/asset/images/logo2.jpg";
import logo3 from "/asset/images/logo3.jpg";
import logo4 from "/asset/images/logo4.jpg";
import logo5 from "/asset/images/logo5.jpg";
import logo6 from "/asset/images/logo6.png";
import logo7 from "/asset/images/logo7.jpg";
import logo8 from "/asset/images/logo8.jpg";

const BrandSlider = () => {
  const brands = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8
  ];

  return (
    <div className="w-full bg-white">
      <h2 className="text-center text-lg md:text-2xl font-semibold text-gray-700 mb-10">
        Trusted by Top Furniture Brands
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="max-w-6xl mx-auto"
      >
        {brands.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt={`brand-${i}`}
                className="h-20 md:h-30 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;