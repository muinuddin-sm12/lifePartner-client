
// eslint-disable-next-line react/prop-types
const Button = ({name}) => {
    return (
        <div>
            <button className="bg-[#E5007D] px-3 py-1 rounded-md text-white font-semibold">{name}</button>
        </div>
    );
};

export default Button;