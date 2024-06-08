import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import StorySlides from "../../../components/StorySlides";
import { useEffect, useState } from "react";
const SuccessStory = () => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/success-stories")
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, []);
  // console.log(story);
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
            {story.map((data) => (
              <SwiperSlide key={data._id}>
                <StorySlides img={data?.coupleImage} story={data?.story} date={data?.date} rating={data?.rating}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default SuccessStory;
