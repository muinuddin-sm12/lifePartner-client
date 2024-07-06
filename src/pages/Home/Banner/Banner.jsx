import { Link } from "react-router-dom";
import banner_3 from "../../../assets/image/hisu-lee-FTW8ADj5igs-unsplash.jpg";
import banner_1 from "../../../assets/image/Photo of Traditional bride and groom in maroon outfits.jpeg";
import banner_2 from "../../../assets/image/samantha-gades-7JUDLPlA114-unsplash.jpg";
import BannerSlider from "../../../components/BannerSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full px-4 md:px-10 banner pt-12">
      <div className=" flex flex-col-reverse min-h-[28rem] md:min-h-[40rem] justify-center h-full mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold leading-none sm:text-5xl">
            Find Your <span className="text-[#E5007D]">Perfect</span> Life
            Partner
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Find your soulmate and write your love story together. Let our
            trusted matchmaking service be your guide.
          </p>
          <div>
            <div className="flex items-center w-52 gap-2 px-6 py-2 text-lg  font-semibold border rounded-full bg-[#E5007D] hover:bg-black text-white">
              <Link
                to="/biodatas"
              >
                Find Partner
              </Link>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full overflow-hidden lg:rounded-3xl mt-8 lg:mt-0 mb-10 md:mb-0">
          {/* <img src={banner} alt="" className="object-cover h-full"/> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BannerSlider
                image={banner_1}
                text="Gain strength and confidence through shared learning and feedback."
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlider
                image={banner_2}
                text="Join a community of learners - share, learn, and grow together!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlider
                image={banner_3}
                text="Unlock your potential with interactive learning and peer feedback!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
