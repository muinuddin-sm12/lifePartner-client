// eslint-disable-next-line react/prop-types
const BannerSlider = ({ image }) => {
  return (
    <div
      className="w-full min-h-[28rem] md:min-h-[40rem] bg-center bg-cover "
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default BannerSlider;
