import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PremiumCard = () => {
  const [user, setUser] = useState("");
  const [sort, setSort] = useState("");
  const [biodata, setBiodata] = useState([]);

  useEffect(() => {
    fetch("https://life-partner-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const premiumUser = data.filter((d) => d.status === "Premium");
        setUser(premiumUser);
      });
  }, []);
  useEffect(() => {
    if (user.length > 0) {
      fetch("https://life-partner-server.vercel.app/biodatas")
        .then((res) => res.json())
        .then((data) => {
          const premiumBiodata = data.filter((p) =>
            user.some((u) => u.email === p.email)
          );
          setBiodata(premiumBiodata);
        });
    }
  }, [user]);
  const sortedBiodata = React.useMemo(() => {
    if (sort === "Ascending") {
      return [...biodata].sort((a, b) => a.age - b.age);
    } else if (sort === "Descending") {
      return [...biodata].sort((a, b) => b.age - a.age);
    } else {
      return biodata;
    }
  }, [sort, biodata]);
  // console.log(biodata);
  return (
    <div className="px-4 md:px-10 my-16 md:my-32 ">
      <div className="w-full text-center pb-16">
        <h3 className="text-3xl font-bold">Our Premium Members</h3>
      </div>
      <div className="w-full flex justify-end max-w-[1536px] mx-auto px-4 md:px-10 mt-8 mb-4">
        <select
          onChange={(e) => {
            setSort(e.target.value);
          }}
          value={sort}
          name="age"
          id="age"
          className="rounded-lg btn bg-[#E5007D] px-4 py-2 border-none text-white outline-none"
        >
          <option value="">Sort By Age</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {sortedBiodata?.map((data) => (
          <div
            key={data?._id}
            className="w-full max-w-sm mx-auto rounded-lg p-6 flex flex-col overflow-hidden  border-[1px] shadow-lg dark:bg-gray-800 hover:border-[#E5007D] hover:scale-105 duration-200"
          >
            <div className="border-b pb-6">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#E5007D]">
                  <img src={data?.imgUrl} alt="" />
                </div>
                <div>
                  <p className="font-medium">Biodata ID: {data?.id}</p>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="flex justify-between items-center py-1">
                <div className="w-1/2 font-medium">Name</div>
                <div className="w-1/2">{data?.name}</div>
              </div>
              <div className="flex justify-between items-center py-1">
                <div className="w-1/2 font-medium">Biodata Type</div>
                <div className="w-1/2">{data?.biodataType}</div>
              </div>
              <div className="flex justify-between items-center py-1">
                <div className="w-1/2 font-medium">Permanent Division</div>
                <div className="w-1/2">{data?.permanentDivision}</div>
              </div>
              <div className="flex justify-between items-center py-1">
                <div className="w-1/2 font-medium">Age</div>
                <div className="w-1/2">{data?.age}</div>
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
        ))}
      </div>
    </div>
  );
};

export default PremiumCard;
