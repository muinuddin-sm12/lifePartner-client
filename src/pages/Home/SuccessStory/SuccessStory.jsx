import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import StorySlides from "../../../components/StorySlides";
const SuccessStory = () => {
  return (
    <div className="px-4 md:mx-10 my-16 md:my-32 ">
      <div className="max-w-[76%] mx-auto">
      <div className="w-full text-center mb-16">
        <h3 className="text-3xl font-bold">Our Success Stories</h3>
      </div>
      <>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <StorySlides />
          </SwiperSlide>
          <SwiperSlide>
            <StorySlides />
          </SwiperSlide>
          <SwiperSlide>
            <StorySlides />
          </SwiperSlide>
          <SwiperSlide>
            <StorySlides />
          </SwiperSlide>
        </Swiper>
      </>
      </div>
    </div>
  );
};

export default SuccessStory;
