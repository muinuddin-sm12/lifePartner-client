import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const AdminDash = () => {
  const [total, setTotal] = useState('')
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  useEffect(()=> {
    fetch('http://localhost:9000/biodatas')
    .then(res => res.json())
    .then(data => {
      setTotal(data.length)
      const filterMale = data.filter(male => male.biodataType === 'Male')
      setMale(filterMale.length)
      const filterFemale = data.filter(female => female.biodataType === 'Female')
      setFemale(filterFemale.length)
    })
  },[])

  const data = [
    { name: 'Total Biodatas', value: total },
    { name: 'Premium Biodatas', value: 5 },
    { name: 'Female Biodatas', value: female },
    { name: 'Male Biodatas', value: male },
  ];
  return (
    <div className="flex justify-center items-center">
      <PieChart  width={600} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#E5007D"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
  );
};

export default AdminDash;