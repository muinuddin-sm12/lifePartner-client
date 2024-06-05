import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import EditBiodata from "../components/dashboard/EditBiodata";
import ViewBiodata from "../components/dashboard/ViewBiodata";
import MyContactRequest from "../components/dashboard/MyContactRequest";
import FavouritesBiodatas from "../components/dashboard/FavouritesBiodatas";
import Biodatas from "../components/Biodatas";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import ViewProfile from "../components/ViewProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/biodatas',
          element: <Biodatas/>
        },
        {
          path: '/about-us',
          element: <AboutUs/>
        },
        {
          path: '/contact-us',
          element: <ContactUs/>
        },
        {
          path: '/view-profile/:id',
          element: <ViewProfile/>
        }
    ]
  },
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>},
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: 'edit-biodata',
        element: <EditBiodata/>
      },
      {
        path: 'view-biodata',
        element: <ViewBiodata/>
      },
      {
        path: 'my-contact-request',
        element: <MyContactRequest/>
      },
      {
        path: 'favourites-biodatas',
        element: <FavouritesBiodatas/>
      }
    ]
  }
]);
