import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/biodatas/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, [user]);
  if (!data) {
    return <div>No Data Available</div>;
  }
  return (
    <div className="p-6 border max-w-2xl rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#E5007D]">
          <img src={data?.imgUrl} alt="" />
        </div>
        <div>
          <p className="font-medium">Biodata No: {data?.id}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-6 ">
        <div>
          <div>
            <p>Name: {data?.name}</p>
            <p>Father's Name: {data?.fatherName}</p>
            <p>Mother's Name: {data?.motherName}</p>
            <p>Permanent Division: {data?.permanentDivision}</p>
            <p>Pressent Division: {data?.presentDivision}</p>
            <p>Date of Birth: {data?.dateOfBirth}</p>
            <p>Gender: {data?.biodataType}</p>
            <p>Height: {data?.height}</p>
            <p>Weight: {data?.weight}kg</p>
            <p>Age: {data?.age}</p>
            <p>Occupation: {data?.occupation}</p>
            <p>Race: {data?.race}</p>
          </div>
        </div>
        <div>
          <p>Expected Partner Age: {data?.expectedAge}</p>
          <p>Expected Partner Height: {data?.expectedHeight}</p>
          <p>Expected Partner Weight: {data?.expectedWeight}</p>
          <p>Contact Email: {data?.email}</p>
          <p>Mobile Number: {data?.phone}</p>
        </div>
      </div>
      <div className="w-full">
        <button className="w-full bg-[#E5007D] py-2 text-white font-medium rounded-md my-3">
          Make Premium
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;