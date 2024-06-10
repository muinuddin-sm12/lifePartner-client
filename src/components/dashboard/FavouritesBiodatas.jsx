/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const FavouritesBiodatas = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user && user.email) {
      fetch(`https://life-partner-server.vercel.app/favourites`)
        .then((res) => res.json())
        .then((favourites) => {
          const userFavourites = favourites.filter(
            (item) => item.favEmail === user.email
          );
          setData(userFavourites);
        })
        .catch((error) => {
          console.error("Error fetching favourites:", error);
        });
    }
  }, [user]);
  const handleDelete = async (id) => {
    // console.log(id)
    try {
      const response = await axios.delete(
        `https://life-partner-server.vercel.app/favourites/${id}`
      );
      if (response.status === 200) {
        setData(data.filter((item) => item._id !== id));
        toast.success("Deleted successfully");
      }
    } catch (error) {
      toast.error("Error deleting item");
    }
  };
  // console.log(data.length)
  if (data.length < 1) {
    return (
      <div>
        <p>No data available</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-base text-left border-b">
            <th></th>
            <th className="py-2 pl-4">Name</th>
            <th className="py-2 pl-4">Biodata ID</th>
            <th className="py-2 pl-4">Permanent Address</th>
            <th className="py-2 pl-4">Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item?._id}>
              <td>
                <div className="w-16 h-16  bg-sky-200 rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={item?.imgUrl}
                  />
                </div>
              </td>
              <td className="font-medium pl-4">{item?.name}</td>
              <td className="text-sm pl-4">{item?.id}</td>
              <td className="text-sm pl-4">{item?.permanentDivision}</td>
              <td className="text-sm pl-4">{item?.occupation}</td>
              <td className="pl-5">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-[#E5007D] text-sm font-medium text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FavouritesBiodatas;
