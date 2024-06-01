import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Work from "../HowItWorks/Work";
import PremiumCard from "../PremiumCard/PremiumCard";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PremiumCard/>
            <Work/>
            <SuccessCounter/>
            <SuccessStory/>
            <Footer/>
        </div>
    );
};

export default Home;