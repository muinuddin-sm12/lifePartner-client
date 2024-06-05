/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BiodataCard = ({ data }) => {
  return (
    <div className="border w-[350px] rounded-xl p-6 shadow-lg">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#E5007D]">
            <img src={data?.imgUrl} alt="" />
          </div>
          <div>
            <p className="font-medium">Biodata No: {data?.id}</p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="flex justify-between items-center py-1">
          <div className="w-1/2 font-medium">Name</div>
          <div className="w-1/2">{data?.name}</div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="w-1/2 font-medium">Merital Status</div>
          <div className="w-1/2">Unmarried</div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="w-1/2 font-medium">Permanent Division</div>
          <div className="w-1/2">{data?.permanentDivision}</div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="w-1/2 font-medium">Date of Birth</div>
          <div className="w-1/2">{data?.dateOfBirth}</div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="w-1/2 font-medium">Occupation</div>
          <div className="w-1/2">{data?.occupation}</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link
          to={`/view-profile/${data?._id}`}
          className="bg-[#E5007D] text-center text-white w-full py-2 rounded-lg font-semibold"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default BiodataCard;
