import { FaEye, FaRegHeart } from "react-icons/fa";

const BiodataCard = () => {
  return (
    <div className="border w-[350px] rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center border-b pb-6">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#E5007D]">
            <img src="" alt="" />
          </div>
          <div>
            <p className="font-medium">Biodata No: </p>
            <div className="flex items-center gap-1">
              <FaEye /> 1
            </div>
          </div>
        </div>
        <div className="py-2 px-5 border rounded-lg">
          <FaRegHeart className="text-lg text-[#E5007D]" />
        </div>
      </div>
      <div className="py-6">
        <div className="flex justify-between items-center py-2">
          <div className="w-1/2 font-medium">Merital Status</div>
          <div className="w-1/2">Unmarried</div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="w-1/2 font-medium">Permanent Address</div>
          <div className="w-1/2">Rajshahi</div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="w-1/2 font-medium">Date of Birth</div>
          <div className="w-1/2">17/12/1991</div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="w-1/2 font-medium">Occupation</div>
          <div className="w-1/2">Businessman</div>
        </div>
      </div>
        <div className="w-full">
            <button className="bg-[#E5007D] text-white w-full py-2 rounded-lg font-semibold">View Profile</button>
        </div>
    </div>
  );
};

export default BiodataCard;
