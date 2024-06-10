import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ApprovePremium = ({ id }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Assuming there's a function to get premium data based on id
    if (id) {
      fetch(`http://localhost:9000/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [id]);
  console.log(user)
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y text-sm divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Biodata Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Make Premium
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{user?.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user?.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {user?.status === "Normal" ? (
                <button className="bg-green-500 hover:bg-black text-white font-medium text-sm py-1 px-2 rounded">
                  Make Premium
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="font-medium">Premium</p>
                  <button className=" hover:bg-black text-black border hover:text-white font-light text-sm py-1 px-2 rounded">
                    Make Normal
                  </button>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApprovePremium;
