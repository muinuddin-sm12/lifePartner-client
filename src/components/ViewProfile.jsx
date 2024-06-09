/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ScrollToTop from "./ScrollToTop";

const ViewProfile = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const { user } = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();
  // const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:9000/biodatas/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        const matchUser = data.filter((item) => item.email === user.email);
        setCurrent(matchUser[0]);
      });
  }, [user]);
  // console.log(data);
  if (!data) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        Loading....
      </div>
    );
  }
  const handleFavourite = async () => {
    try {
      const newData = { ...data, favEmail: user.email };
      const response = axios.post("http://localhost:9000/favourites", newData);
      const data2 = response.data;
      // console.log(data2);
      toast.success("Added to Favourite");
      setIsFavourite(true);
      setIsDisabled(true);
      // navigate('/favourites-biodatas')
    } catch (err) {
      // console.log(err.message);
      toast.error(err.message);
    }
  };
  return (
    <div className="p-6 border max-w-2xl mx-auto  rounded-2xl my-10">
      <ScrollToTop />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#E5007D]">
            <img src={data?.imgUrl} alt="" />
          </div>
          <div>
            <p className="font-medium">Biodata No: {data?.id}</p>
          </div>
        </div>
        <div>
          <button
            disabled={isDisabled}
            onClick={handleFavourite}
            className="py-2 px-5 border rounded-lg"
          >
            {isFavourite ? (
              <FaHeart className="text-lg text-[#E5007D]" />
            ) : (
              <FaRegHeart className="text-lg text-[#E5007D]" />
            )}
          </button>
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

          {/* Premium user can see this */}
          {current?.status === "Premium" && (
            <div>
              <p>Contact Email: {data?.email}</p>
              <p>Mobile Number: {data?.phone}</p>
            </div>
          )}
        </div>
      </div>
      {current?.status === "Normal" && (
        <div className="w-full">
          <button className="w-full bg-[#E5007D] py-2 text-white font-medium rounded-md my-3">
            Request Contact Information
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
