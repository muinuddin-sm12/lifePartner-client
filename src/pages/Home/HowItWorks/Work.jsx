import icon_1 from '../../../assets/icons/profile.png'
import icon_2 from '../../../assets/icons/browse.png'
import icon_3 from '../../../assets/icons/connect.png'
import icon_4 from '../../../assets/icons/interact.png'


const Work = () => {
    return (
        <div className="px-4 md:px-10 my-16 md:my-32">
            <div className="w-full text-center pb-16 ">
                <h3 className="text-3xl font-bold">How Does It Works?</h3>
            </div>
            <div className=" max-w-[70%] mx-auto h-40">
                {/* card  */}
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col items-center justify-center px-4 py-8 gap-4 border border-white rounded-3xl '>
                        <img src={icon_1} alt="" className='h-20' />
                        <h3 className='text-xl font-semibold'>Create Account</h3>
                    </div>
                    <div className=' flex flex-col items-center justify-center gap-4'>
                        <img src={icon_2} alt="" className='h-20' />
                        <h3 className='text-xl font-semibold'>Browse Profiles</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <img src={icon_3} alt="" className='h-20' />
                        <h3 className='text-xl font-semibold'>Connect</h3>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4'>
                        <img src={icon_4} alt="" className='h-20' />
                        <h3 className='text-xl font-semibold'>Interact</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;