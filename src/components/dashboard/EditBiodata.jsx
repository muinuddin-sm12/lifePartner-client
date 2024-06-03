import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const EditBiodata = () => {
  const { user } = useContext(AuthContext);
  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const biodataType = form.biodata_type.value;
    const dateOfBirth = form.birth.value;
    const age = form.age.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const occupation = form.occupation.value;
    const imgUrl = form.image_url.value;
    const race = form.race.value;
    const fatherName = form.father.value;
    const motherName = form.mother.value;
    const permanentDivision = form.permanent_division.value;
    const presentDivision = form.present_division.value;
    const expectedAge = form.expected_age.value;
    const expectedHeight = form.expected_height.value;
    const expectedWeight = form.expected_weight.value;
    const email = user.email;
    const phone = form.phone.value;

    try{
      const response = await axios.get('http://localhost:9000/next-id');
      const { id } = response.data;
      const biodata = {
        id,
        name,
        biodataType,
        dateOfBirth,
        age,
        height,
        weight,
        occupation,
        imgUrl,
        race,
        fatherName,
        motherName,
        permanentDivision,
        presentDivision,
        expectedAge,
        expectedHeight,
        expectedWeight,
        email,
        phone,
      };
      await axios.post('http://localhost:9000/biodatas', biodata)
      form.reset()
      toast.success('Biodata Saved Successfully.')
    }catch(err){
      toast.error(err.message)
    }
  };
  return (
    <div className="w-full px-4 py-6 min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleForm}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="biodata-type" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="biodata_type" className="text-gray-600">
                  Biodata Type
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="biodata_type"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="birth" className="block text-gray-600">
                  Date of Birth
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                  name="birth"
                  id="birth"
                  type="date"
                  placeholder="Date of Birth"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="age" className="block text-gray-600">
                  Age
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                  name="age"
                  id="age"
                  type="number"
                  placeholder="Age"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="height" className=" text-gray-600">
                  Height
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="height"
                >
                  <option value="">Feet</option>
                  <option value="5'1''">5'1''</option>
                  <option value="5'2''">5'2''</option>
                  <option value="5'3''">5'3''</option>
                  <option value="5'4''">5'4''</option>
                  <option value="5'5''">5'5''</option>
                  <option value="5'6''">5'6''</option>
                  <option value="5'7''">5'7''</option>
                  <option value="5'8''">5'8''</option>
                  <option value="5'9''">5'9''</option>
                  <option value="5'10''">5'10''</option>
                  <option value="5'11''">5'11''</option>
                  <option value="6'">6'</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="weight" className=" w-full text-gray-600">
                  Weight
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="weight"
                >
                  <option value="">Select Weight</option>
                  <option value="50">50</option>
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                  <option value="70">70</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="occupation" className="text-gray-600">
                  Occupation
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="occupation"
                >
                  <option value="">Select Occupation</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Pilot">Pilot</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Lawyer">Lawyer</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="image_url" className="block text-gray-600">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                  placeholder="Image URL"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="race" className="text-gray-600">
                  Race
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="race"
                >
                  <option value="">Select Country</option>
                  <option value="Bangladeshi">Bangladeshi</option>
                  <option value="Indian">Indian</option>
                  <option value="Australian">Australian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="father" className="block text-gray-600">
                  Father Name
                </label>
                <input
                  type="text"
                  name="father"
                  id="father"
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                  placeholder="Father Name"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="mother" className="block text-gray-600">
                  Mother Name
                </label>
                <input
                  type="text"
                  name="mother"
                  id="mother"
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                  placeholder="Mother Name"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="permanent_division" className="text-gray-600">
                  Permanent Division
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="permanent_division"
                >
                  <option value="">Select Permanent Division</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="present_division" className="text-gray-600">
                  Present Division
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="present_division"
                >
                  <option value="">Select Present Division</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="expected_age" className="block text-gray-600">
                  Expected Partner Age
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="expected_age"
                  id="expected_age"
                  type="number"
                  placeholder="Age"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="expected_height" className=" text-gray-600">
                  Expected Partner Height
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="expected_height"
                >
                  <option value="">Feet</option>
                  <option value="5'1''">5'1''</option>
                  <option value="5'2''">5'2''</option>
                  <option value="5'3''">5'3''</option>
                  <option value="5'4''">5'4''</option>
                  <option value="5'5''">5'5''</option>
                  <option value="5'6''">5'6''</option>
                  <option value="5'7''">5'7''</option>
                  <option value="5'8''">5'8''</option>
                  <option value="5'9''">5'9''</option>
                  <option value="5'10''">5'10''</option>
                  <option value="5'11''">5'11''</option>
                  <option value="6'">6'</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="expected_weight" className=" text-gray-600">
                  Expected Partner Weight
                </label>
                <select
                  required
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="expected_weight"
                >
                  <option value="">Select Weight</option>
                  <option value="50">50</option>
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                  <option value="70">70</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-gray-600">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="expected-age"
                  id="expected-age"
                  type="text"
                  placeholder={user?.email}
                  readOnly
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="phone" className="block text-gray-600">
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md"
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#E5007D]"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default EditBiodata;
