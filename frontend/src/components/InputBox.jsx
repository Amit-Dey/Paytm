
const InputBox = ({ level, placeholder }) => {
    return (
        <div className="w-full h-fit p-2">
            <level className=" text-md  text-text text-center mt-1 font-medium">{level}</level>
            <input className="w-full h-9 border border-gray-300 rounded-sm p-2 mt-1 text-secondary" placeholder={placeholder} />
        </div>
    )
}

export default InputBox