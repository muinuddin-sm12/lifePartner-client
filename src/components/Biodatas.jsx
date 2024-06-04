import { useEffect, useState } from "react";
import BiodataCard from "./BiodataCard";

const Biodatas = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  const handleForm = async(event) => {
    event.preventDefault()
    const form = event.target
    const biodataType = form.biodata_type.value 
    const from = form.from.value 
    const to = form.to.value 
    console.log(biodataType, from, to)
  }
  return (
    <div className="px-4 md:px-10 my-16 flex">
      <div className="max-w-sm min-h-screen border p-4 rounded-lg">
        <h2 className="text-center text-lg font-medium py-3">Filter Options</h2>
        <form onSubmit={handleForm}>
          <div className="py-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="biodata_type" className="text-gray-600">
                Biodata Type
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                name="biodata_type"
              >
                <option value="">Select Type</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 text-sm">Search by Age</h2>
            <div className=" text-sm">
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="from"
                id="from"
                type="number"
                placeholder="from"
                required
              />
            </div>
            <div className=" text-sm">
              <input
                className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="to"
                id="to"
                type="number"
                placeholder="to"
                required
              />
            </div>
            <div>
              <input type="submit" value="Filter" className="w-full py-2 bg-[#E5007D] mt-5 rounded-lg text-white font-medium cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap justify-center mx-auto gap-6">
          {data.map((biodata) => (
            <BiodataCard key={biodata._id} data={biodata} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
