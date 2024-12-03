import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => {
    return (
        <div className="p-2">

            <button onClick={onClick} className="bg-primary text-background hover:text-text w-full h-10 rounded-sm hover:bg-background font-bold tracking-widest">
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button