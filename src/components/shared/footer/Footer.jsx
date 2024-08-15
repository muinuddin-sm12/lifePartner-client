import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-200 w-full max-w-full overflow-x-hidden">
        <div className="flex flex-col items-start md:items-center justify-start py-8 md:flex-row md:justify-evenly">
          <div className="flex flex-col md:flex-row">
            <ul className="m-5 text-sm">
              <h3 className="mb-2 text-xl font-semibold">Life Partner</h3>
              <li className="my-1">
                <a href="/" className="text-gray-500">
                  Home
                </a>
              </li>
              <li className="my-1">
                <a href="/biodatas" className="text-gray-500">
                  Biodatas
                </a>
              </li>
              <li className="my-1">
                <a href="/dashboard" className="text-gray-500">
                  Dashboard
                </a>
              </li>
              <li className="my-1">
                <a href="/about-us" className="text-gray-500">
                  About
                </a>
              </li>
              <li className="my-1">
                <a href="/contact-us" className="text-gray-500">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="m-5 text-sm">
              <h3 className="mb-2 text-base font-medium">Careers</h3>
              <li className="my-1">
                <a href="#" className="text-gray-500 ">
                  Apply Online
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-gray-500">
                  Available Positions
                </a>
              </li>
            </ul>

            <ul className="m-5 text-sm">
              <h3 className="mb-2 text-base font-medium">About Us</h3>
              <li className="my-1">
                <a href="#" className="text-gray-500">
                  Meet Our Team
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-gray-500">
                  Our Responsibilities
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-gray-500">
                  Our Codes
                </a>
              </li>
              <li className="my-1">
                <a href="#" className="text-gray-500">
                  Our Values
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0 mx-auto md:mx-0">
            <h3 className="mb-2">Stay in Touch</h3>
            <form className="flex items-center">
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Email"
                className="px-2 py-1 border outline-none rounded-l-lg border-gray-400"
              />
              <input
                type="button"
                value="Submit"
                className="px-3 py-1 bg-[#E5007D] text-white rounded-r-lg border border-[#E5007D] cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center py-6 bg-gray-50">
          <div className="flex items-center text-[#E5007D] justify-center space-x-4">
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
            <FaYoutube className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col items-center py-4 bg-gray-200 text-sm">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-500">
              Privacy Policy
            </a>
          </div>
          <div className="mt-2 text-center">2024 Copyright &copy; Life Partner</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
