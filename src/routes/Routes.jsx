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
import ContactUs from "../components/ContactUs";
import ViewProfile from "../components/ViewProfile";
import AdminDash from "../components/dashboard/AdminDash";
import PrivateRoutes from "./PrivateRoutes";
import GotMarried from "../components/dashboard/GotMarried";
import ManageUsers from "../components/dashboard/ManageUsers";
import ApprovePremium from "../components/dashboard/ApprovePremium";
import ApprovedContact from "../components/dashboard/ApprovedContact";
import AboutMe from "../pages/About/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biodatas",
        element: <Biodatas />,
      },
      {
        path: "/about-us",
        element: <AboutMe />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/view-profile/:id",
        element: (
          <PrivateRoutes>
            <ViewProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "edit-biodata",
        element: <EditBiodata />,
      },
      {
        path: "view-biodata",
        element: <ViewBiodata />,
      },
      {
        path: "my-contact-request",
        element: <MyContactRequest />,
      },
      {
        path: "favourites-biodatas",
        element: <FavouritesBiodatas />,
      },
      {
        path: "got-married",
        element: <GotMarried />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDash />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "approved-premium",
        element: <ApprovePremium/>
      },
      {
        path: "approved-contact",
        element: <ApprovedContact/>
      }
    ],
  },
]);
