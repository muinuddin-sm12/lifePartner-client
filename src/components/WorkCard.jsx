// eslint-disable-next-line react/prop-types
const WorkCard = ({ icon, text, number }) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-10 gap-8 border border-white rounded-3xl ">
      <img src={icon} alt="" className="h-10 lg:h-20" />
      <h3 className="text-sm md:text-base font-semibold">{text}</h3>
      <div className=" absolute bottom-[-20px] h-10 w-10 flex justify-center items-center rounded-full bg-white">
        <h4 className="text-base font-bold">{number}</h4>
      </div>
    </div>
  );
};

export default WorkCard;
