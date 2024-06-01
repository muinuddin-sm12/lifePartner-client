import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const Main = () => {
    return (
        <div>
            {/* Navbar  */}
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            {/* Footer  */}
            <Footer/>
        </div>
    );
};

export default Main;