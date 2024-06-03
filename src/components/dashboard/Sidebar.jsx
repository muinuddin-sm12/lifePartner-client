import { useContext, useEffect, useState } from "react";
import { AiFillEdit, AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../../public/logo.png";
import { FaEye, FaHeart } from "react-icons/fa";
import { RiContactsBookUploadFill, RiLogoutBoxRFill } from "react-icons/ri";
import axios from "axios";
import { MdManageAccounts, MdSpaceDashboard, MdWorkspacePremium } from "react-icons/md";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [users, setUsers] = useState([]);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:9000/users");
        const match = response.data.find((u) => u.email === user.email);
        setUsers(match);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="30"
                />
                <p className="font-semibold">Life Partner</p>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg  justify-center items-center  mx-auto">
              <Link to="/">
                <div className="flex items-center gap-2">
                  <img
                    // className='hidden md:block'
                    src={logo}
                    alt="logo"
                    width="30"
                  />
                  <p className="font-semibold">Life Partner</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            {/*  Menu Items */}
            <nav>
              {/* Edit Biodata */}
              {users?.role === "User" && (
                <NavLink
                  to="edit-biodata"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <AiFillEdit className="w-5 h-5" />
                  <span className="mx-4 font-medium">Edit Biodata</span>
                </NavLink>
              )}
              {/* View Biodata */}
              {users?.role === "User" && (
                <NavLink
                  to="view-biodata"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FaEye className="w-5 h-5" />
                  <span className="mx-4 font-medium">View Biodata</span>
                </NavLink>
              )}
              {/* My Contact request */}
              {users?.role === "User" && (
                <NavLink
                  to="my-contact-request"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <RiContactsBookUploadFill className="w-5 h-5" />
                  <span className="mx-4 font-medium">My Contact Request</span>
                </NavLink>
              )}
              {/* Favourites Biodata */}
              {users?.role === "User" && (
                <NavLink
                  to="favourites-biodata"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FaHeart className="w-5 h-5" />
                  <span className="mx-4 font-medium">Favourites Biodata</span>
                </NavLink>
              )}
              {/* Admin Dashboard */}
              {users?.role === "Admin" && (
                <NavLink
                  to="admin-dashboard"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdSpaceDashboard className="w-5 h-5" />
                  <span className="mx-4 font-medium">Admin Dashboard</span>
                </NavLink>
              )}
              {/* Manage Users */}
              {users?.role === "Admin" && (
                <NavLink
                  to="manage-users"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdManageAccounts className="w-5 h-5" />
                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>
              )}
              {/* Approved Premium */}
              {users?.role === "Admin" && (
                <NavLink
                  to="approved-premium"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdWorkspacePremium className="w-5 h-5" />
                  <span className="mx-4 font-medium">Approved Premium</span>
                </NavLink>
              )}
              {/* Approved Contact Request */}
              {users?.role === "Admin" && (
                <NavLink
                  to="approved-contact-request"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <VscGitPullRequestNewChanges className="w-5 h-5" />
                  <span className="mx-4 font-medium">
                    Approved Contact Request
                  </span>
                </NavLink>
              )}
            </nav>
          </div>
        </div>

        <div>
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <RiLogoutBoxRFill className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
