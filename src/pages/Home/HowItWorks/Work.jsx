import icon_1 from '../../../assets/icons/profile.png'
import icon_2 from '../../../assets/icons/browse.png'
import icon_3 from '../../../assets/icons/connect.png'
import icon_4 from '../../../assets/icons/interact.png'
import WorkCard from '../../../components/WorkCard';


const Work = () => {
    return (
        <div className="px-4 md:px-10 my-16 md:my-32 ">
            <div className=' bg-gray-200 rounded-3xl'>
            <div className="w-full text-center py-16 ">
                <h3 className="text-3xl font-bold">How Does It Works?</h3>
            </div>
            <div className=" w-full px-52 mx-auto pt-10 pb-24">
                {/* card  */}
                <div className='flex justify-between items-center'>
                    <WorkCard icon={icon_1} text='Create Account' number='1'/>
                    <WorkCard icon={icon_2} text='Browse Profiles' number='2'/>
                    <WorkCard icon={icon_3} text='Connect' number='3'/>
                    <WorkCard icon={icon_4} text='Interact' number='4'/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Work;