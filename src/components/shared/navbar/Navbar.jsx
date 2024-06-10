import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../../../../public/logo.png";
import Button from "../Button";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import avatarImg from '../../../assets/image/avatar.webp'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = async () => {
    await logOut()
    toast.success('Logout Successful')
  }
  return (
    <div className="w-full bg-base-100  z-[99]">
      <div className="flex justify-between items-center px-4 md:px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="dropdown ">
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
                className="flex flex-col space-y-2 bg-gray-50 rounded-xl absolute mt-3 z-[99] p-4 shadow rounded-box w-48 "
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E5007D] border border-[#E5007D] rounded-md px-2 py-1"
                      : ""
                  }
                >
                  Homee
                </NavLink>
                <NavLink
                  to="/biodatas"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E5007D] border border-[#E5007D] rounded-md px-2 py-1"
                      : ""
                  }
                >
                  Biodatas
                </NavLink>
                {user && (
                  <>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#E5007D] border border-[#E5007D] rounded-md px-2 py-1"
                          : ""
                      }
                    >
                      Dashboard
                    </NavLink>
                  </>
                )}
                <>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#E5007D] border border-[#E5007D] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    About Me
                  </NavLink>
                </>
                <>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#E5007D] border border-[#E5007D] rounded-md px-2 py-1"
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
                isActive ? "text-[#E5007D] px-2 py-1" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/biodatas"
              className={({ isActive }) =>
                isActive ? "text-[#E5007D] px-2 py-1" : ""
              }
            >
              Biodatas
            </NavLink>
            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-[#E5007D] px-2 py-1" : ""
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-[#E5007D] px-2 py-1" : ""
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-[#E5007D] px-2 py-1" : ""
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full border-[#E5007D] border-[2px] overflow-hidden">
            <img
              className="rounded-full h-full w-full object-cover"
              src={user && user.photoURL ? user.photoURL : avatarImg}
            />
          </div>

          {user ? (
            <>
              <div
                onClick={handleLogOut}
                className="ml-3"
              >
                <Button name='Logout'/>
              </div>
            </>
          ) : (
            <div className="flex  px-3 py-2  items-center gap-3">
              <Link to="/login" className="">
                <Button name="Login" />
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button name="Register" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
