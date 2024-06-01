import { Link } from "react-router-dom";
import banner_3 from "../../../assets/image/hisu-lee-FTW8ADj5igs-unsplash.jpg";
import banner_1 from "../../../assets/image/Photo of Traditional bride and groom in maroon outfits.jpeg";
import banner_2 from "../../../assets/image/samantha-gades-7JUDLPlA114-unsplash.jpg";
import BannerSlider from "../../../components/BannerSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <div className="w-full px-4 md:px-10 banner">
      <div className=" flex flex-col-reverse min-h-[28rem] md:min-h-[40rem] justify-center h-full mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold leading-none sm:text-6xl">
            Ac mattis
            <span className="">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/"
              className="px-8 py-3 text-lg bg-[#E5007D] text-white hover:bg-black font-semibold border rounded-full"
            >
              Find Partner
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full overflow-hidden lg:rounded-3xl mt-8 lg:mt-0">
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
                <BannerSlider image={banner_1} text='Gain strength and confidence through shared learning and feedback.'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerSlider image={banner_2} text='Join a community of learners - share, learn, and grow together!'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerSlider image={banner_3} text='Unlock your potential with interactive learning and peer feedback!'/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
