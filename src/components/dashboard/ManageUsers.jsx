import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // Make user status "Premium"
  const handlePremium = async (id) => {
    try {
      const updatedUser = {
        status: "Premium",
      };
      const response = await axios.put(
        `http://localhost:9000/users/${id}`,
        updatedUser
      );
      // Assuming the API returns the updated user data
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, status: response.data.status } : user
      );
      setUsers(updatedUsers);
      toast.success("User Become Premium");
    } catch (error) {
      console.error("Error updating user status", error);
    }
  };
  // Make user status "Normal"
  const handleNormal = async (id) => {
    try {
      const updatedUser = {
        status: "Normal",
      };
      const response = await axios.put(
        `http://localhost:9000/users/${id}`,
        updatedUser
      );
      // Assuming the API returns the updated user data
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, status: response.data.status } : user
      );
      setUsers(updatedUsers);
      toast.success("User Become Normal");
    } catch (error) {
      console.error("Error updating user status", error);
    }
  };
  // Make user role to "Admin" 
  const handleAdmin = async (id) => {
    try {
      const updatedUser = {
        role: "Admin",
      };
      const response = await axios.put(
        `http://localhost:9000/users/${id}`,
        updatedUser
      );
      // Assuming the API returns the updated user data
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, role: response.data.role } : user
      );
      setUsers(updatedUsers);
      toast.success("User Become Admin");
    } catch (error) {
      console.error("Error updating user status", error);
    }
  };
  // Make user role to "User"
  const handleUser = async (id) => {
    try {
      const updatedUser = {
        role: "User",
      };
      const response = await axios.put(
        `http://localhost:9000/users/${id}`,
        updatedUser
      );
      // Assuming the API returns the updated user data
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, role: response.data.role } : user
      );
      setUsers(updatedUsers);
      toast.success("User Become User");
    } catch (error) {
      console.error("Error updating user status", error);
    }
  }
  // console.log(users);
  return (
    <div>
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
              Make Admin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Make Premium
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((data) => (
            <tr key={data._id}>
              <td className="px-6 py-4 whitespace-nowrap">{data?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data?.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data?.role === "User" ? (
                  <button
                    onClick={() => handleAdmin(data?._id)}
                    className="bg-[#E5007D] hover:bg-black text-white font-medium text-sm py-1 px-2 rounded"
                  >
                    Make Admin
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Admin</p>
                    <button
                      onClick={() => handleUser(data?._id)}
                      className=" hover:bg-black text-black border hover:text-white font-light text-sm py-1 px-2 rounded"
                    >
                      Make User
                    </button>
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data?.status === "Normal" ? (
                  <button
                    onClick={() => handlePremium(data?._id)}
                    className="bg-green-500 hover:bg-black text-white font-medium text-sm py-1 px-2 rounded"
                  >
                    Make Premium
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Premium</p>
                    <button
                      onClick={() => handleNormal(data?._id)}
                      className=" hover:bg-black text-black border hover:text-white font-light text-sm py-1 px-2 rounded"
                    >
                      Make Normal
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
