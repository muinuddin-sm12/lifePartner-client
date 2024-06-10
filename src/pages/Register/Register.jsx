import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import registerImg from '../../assets/image/registerImg.jpg'

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state || '/'
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading
  } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const userData = {name, email, role:'User', status: 'Normal'}

    try {
      setLoading(true);
      //   1. User Registration
      // eslint-disable-next-line no-unused-vars
      const result = await createUser(email, password);
      //   2. Save username and photo in firebase
      await updateUserProfile(name, image);

      await axios.post('https://life-partner-server.vercel.app/users', userData)
      navigate(from);
      toast.success("Signup Successful");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };
  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const {displayName, email} = result.user;
      const userData = {name: displayName, email, role: 'User', status: 'Normal'}

      await axios.post('https://life-partner-server.vercel.app/users', userData)

      navigate(from);
      toast.success("Signup Successful");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex rounded-lg overflow-hidden sm:m-10">
        <div className="max-w-md hidden lg:block">
          <img src={registerImg} className="h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col max-w-md p-6 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Life Partner</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Image URL
              </label>
              <input
                required
                type="text"
                id="image"
                name="image"
                placeholder="Enter Your Image URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#E5007D] w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#E5007D] text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Register;
