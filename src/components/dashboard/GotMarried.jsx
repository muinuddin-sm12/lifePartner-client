import axios from "axios";
import toast from "react-hot-toast";

const gotMarried = () => {
    const handleForm = async (event) => {
        event.preventDefault()
        const form = event.target 
        const selfId = form.selfId.value 
        const partnerId = form.partnerId.value 
        const coupleImage = form.imgUrl.value 
        const marryDate = form.date.value 
        const rating = form.rating.value 
        const story = form.successStory.value 
        const successStory = {selfId, partnerId, coupleImage,marryDate, rating, story}
        // console.log(successStory)
        try{
            await axios.post('http://localhost:9000/success-stories', successStory)
            toast.success('Story saved successfully.')
            form.reset()
        }catch(err){
            toast.error(err.message)
        }
    }
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm border p-4 rounded-lg">
        <h2 className="text-center text-lg font-medium py-3">Success Story</h2>
        <form onSubmit={handleForm}>
          <div className="pt-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="selfId" className="text-gray-600">
                Self Biodata Id
              </label>
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="selfId"
                id="selfId"
                type="number"
                placeholder="Self Biodata id"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="partnerId" className="text-gray-600">
                Partner Biodata Id
              </label>
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="partnerId"
                id="partnerId"
                type="number"
                placeholder="Partner Biodata id"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="imgUrl" className="text-gray-600">
                Couple Image Link
              </label>
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="imgUrl"
                id="imgUrl"
                type="text"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="date" className="text-gray-600">
                Select Marriage Date
              </label>
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="date"
                id="date"
                type="date"
                placeholder="Marriage Date"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="rating" className="text-gray-600">
                Give a Rating
              </label>
              <input
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="rating"
                id="rating"
                type="number"
                placeholder="Give rating between 1 to 5"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="successStory" className="text-gray-600">
                Success Story
              </label>
              <textarea
                className="w-full px-3 py-2 mb-2 text-gray-800 border border-[#E5007D] focus:outline-[#E5007D] rounded-md "
                name="successStory"
                id="successStory"
                type="text"
                placeholder="Write your success story"
                required
              />
            </div>
            <div>
                <input className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#E5007D]" type="submit" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default gotMarried;
