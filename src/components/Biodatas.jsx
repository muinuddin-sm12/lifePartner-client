import { useEffect, useState } from "react";
import BiodataCard from "./BiodataCard";

const Biodatas = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setMainData(data);
      });
  }, []);
  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const biodataType = form?.biodata_type.value;
    const division = form?.division.value;
    const from = parseInt(form.from.value, 10);
    const to = parseInt(form.to.value, 10);

    const filteredData = mainData.filter((item) => {
      const age = parseInt(item.age, 10);
      const typeMatches = biodataType ? item?.biodataType === biodataType : true;
      const divisionMatches = division ? item?.permanentDivision === division : true;
      const ageMatches = age >= from && age <= to;
      return typeMatches && divisionMatches && ageMatches;
    });
    setData(filteredData);
  };
  return (
    <div className="px-4 md:px-10 my-16 flex items-start">
      <div className="max-w-sm border p-4 rounded-lg">
        <h2 className="text-center text-lg font-medium py-3">Filter Options</h2>
        <form onSubmit={handleForm}>
          <div className="pt-4">
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
          <div className="pb-1">
            <div className="space-y-1 text-sm">
              <label htmlFor="division" className="text-gray-600">
                Division
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                name="division"
              >
                <option value="">Select Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barishal">Barishal</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-gray-600 text-sm pb-1">Filter by Age</h2>
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
              <input
                type="submit"
                value="Filter"
                className="w-full py-2 bg-[#E5007D] mt-5 rounded-lg text-white font-medium cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap justify-center mx-auto gap-6">
          {data.length > 0 ? (
            data.map((biodata) => (
              <BiodataCard key={biodata._id} data={biodata} />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <p className="font-medium">No Data Available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
