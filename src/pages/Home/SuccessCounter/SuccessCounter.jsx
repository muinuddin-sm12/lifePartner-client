import { useEffect, useState } from "react";

const SuccessCounter = () => {
  const [total, setTotal] = useState('')
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  const [success, setSuccess] = useState('')
  useEffect(()=> {
    fetch('https://life-partner-server.vercel.app/biodatas')
    .then(res => res.json())
    .then(data => {
      setTotal(data.length)
      const filterMale = data.filter(male => male.biodataType === 'Male')
      setMale(filterMale.length)
      const filterFemale = data.filter(female => female.biodataType === 'Female')
      setFemale(filterFemale.length)
    })
  },[])
  useEffect(() => {
    fetch('https://life-partner-server.vercel.app/success-stories')
    .then(res => res.json())
    .then(data => setSuccess(data.length))
  })
  return (
    <div className="px-4 md:mx-10 my-16 md:my-32">
      <div className="w-full text-center pb-20">
        <h3 className="text-3xl font-bold">Success Counter</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 w-full md:px-20 mx-auto">
        <div className="flex flex-col items-center justify-between md:w-[200px] border rounded-xl px-4 py-8 h-36">
          <h2 className="text-xl font-medium">Total Biodata</h2>
          <p className="text-3xl font-bold"><span className="text-[#E5007D]">{total}</span>+</p>
        </div>
        <div className="flex flex-col items-center justify-between md:w-[200px] border rounded-xl px-4 py-8 h-36">
          <h2 className="text-xl font-medium">Total Girls</h2>
          <p className="text-3xl font-bold"><span className="text-[#E5007D]">{female}</span>+</p>
        </div>
        <div className="flex flex-col items-center justify-between md:w-[200px] border rounded-xl px-4 py-8 h-36">
          <h2 className="text-xl font-medium">Total Boys</h2>
          <p className="text-3xl font-bold"><span className="text-[#E5007D]">{male}</span>+</p>
        </div>
        <div className="flex flex-col items-center justify-between md:w-[200px] border rounded-xl px-4 py-8 h-36">
          <h2 className="text-xl font-medium">Total Marriages</h2>
          <p className="text-3xl font-bold"><span className="text-[#E5007D]">{success}</span>+</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
