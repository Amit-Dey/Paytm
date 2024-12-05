
import PropTypes from 'prop-types';

const InputBox = ({ label, placeholder, name, onChange, error }) => {
    let type = ""
    if (name === "password") {  
        type = "password"
    } else if (name === "username") {
        type = "email"
    } else if (name === "amount") {
        type = "number"
    } else {
        type = "text"
    }


    return (
        <div className="w-full h-fit p-2">
            <label className=" text-md  text-text text-center mt-1 font-medium">{label}</label>
            <input name={name} type={type} onChange={onChange} className="w-full h-9 border border-gray-300 rounded-sm p-2 mt-1 text-secondary" placeholder={placeholder} />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default InputBox