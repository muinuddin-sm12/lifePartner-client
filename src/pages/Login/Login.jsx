import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import loginImg from '../../assets/image/loginImg.jpg'
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signInWithGoogle, signIn, setLoading } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password)

    try {
      setLoading(true);
      // 1. sign in user
      await signIn(email, password);
      navigate(from);
      toast.success("Signup Successful");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  //   handle google signin
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
    <div className="flex justify-center items-center h-screen">
      <div className="flex md:h-[85vh] rounded-lg overflow-hidden sm:m-10">
        <div className="max-w-md h-full hidden lg:block">
          <img className="h-full object-cover bg-center" src={loginImg} alt="" />
        </div>
        <div className="flex flex-col max-w-md px-6 py-6 md:py-0 bg-gray-100 text-gray-900">
          <div className="mb-5 text-center">
            <h1 className="my-3 text-3xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-2">
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
                  className="w-full px-2 py-1 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
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
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-2 py-1 border rounded-md border-gray-300 focus:outline-[#E5007D] bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#E5007D] w-full rounded-md py-2 text-white"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-2 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={25} />

            <p>Continue with Google</p>
          </button>

          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
