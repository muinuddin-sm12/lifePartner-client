import { Link, NavLink } from "react-router-dom";
import {   useState } from "react";
import logo from '../../../../public/logo.png'
import Button from "../Button";
const Navbar = () => {
//   const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-base-100  z-[99]">
      <div className="flex justify-between items-center px-4 md:px-10 py-5">
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="flex flex-col space-y-2 absolute mt-3 z-[99] p-4 shadow rounded-box w-48 "
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                    : ""
                }
              >
                Homee
              </NavLink>
              <NavLink
                to="/biodatas"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                    : ""
                }
              >
                Biodatas
              </NavLink>
               {/* ( */}
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </>
              {/* ) */}
               {/* ( */}
                <>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    About Us
                  </NavLink>
                </>
              {/* ) */}
               {/* ( */}
                <>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </>
              {/* ) */}
            </ul>
          )}
        </div>
        <Link to="/" className="text-2xl  font-bold flex items-center">
          <img className="h-10" src={logo} alt="" />
          Life <span className="text-[#E5007D]">Partner</span>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="px-1 text-base flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#36a3f7] px-2 py-1" : "" 
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/biodatas"
            className={({ isActive }) =>
              isActive ? "text-[#08D5FF] px-2 py-1" : ""
            }
          >
            Biodatas
          </NavLink>
           {/* ( */}
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-[#08D5FF] px-2 py-1" : ""
              }
            >
              Dashboard
            </NavLink>
          {/* ) */}
          {/* ( */}
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-[#08D5FF] px-2 py-1" : ""
              }
            >
              About Us
            </NavLink>
          {/* ) */}
          {/* ( */}
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-[#08D5FF] px-2 py-1" : ""
              }
            >
              Contact Us
            </NavLink>
          {/* ) */}
        </ul>
      </div>
      <div className="flex items-center">
        {/* ( */}
         
            <div
              className="w-8 h-8 rounded-full border-[#E5007D] border-[2px] overflow-hidden"
            >
              <img
                className="rounded-full h-full w-full object-cover"
                src="https://i.ibb.co/MCJD3wJ/businessman-avatar-profile-vector-260nw-249652369.webp"
              />
            </div>
          
        {/* ) : ( */}
          <div className="flex  px-3 py-2  items-center gap-3">
            <Link to="/" className="">
              <Button name='Login'/>
            </Link>
            <Link to="/" className="hidden md:block">
              <Button name="Register"/>
            </Link>
          </div>
        {/* ) */}
      </div>
    </div>
    </div>
  );
};

export default Navbar;