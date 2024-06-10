import image from '../../assets/image/profile.jpeg'

const AboutMe = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className='flex items-center gap-20'>
                <div className='h-60 w-60 rounded-full overflow-hidden'>
                    <img className='h-full' src={image} alt="" />
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='font-medium text-sm italic mb-2'>Hello, I'm</p>
                    <h3 className='text-2xl font-bold'>Muin</h3>
                    <h1 className='text-xl font-bold'>Front End Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <a href='https://drive.google.com/file/d/1BZOFNzhLrye5jm7GiLuLQym-KVMEEGGE/view?usp=sharing' target='blank' className='bg-[#E5007D] text-white px-4 py-1 rounded-full font-medium'>
                            View Resume
                        </a>
                        <div className='bg-black text-white px-4 py-1 rounded-full font-medium'>
                            Contact Info
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;