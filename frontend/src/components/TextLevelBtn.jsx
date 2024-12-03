import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const TextLevelBtn = ({ text, label, to }) => {
    return (
        <div className='text-center mb-2'>
            <span className='text-text opacity-80 text-sm'>{text}</span>
            <Link to={to} className='text-primary text-sm underline underline-offset-4'>{label}</Link>
        </div>
    )
}

TextLevelBtn.propTypes = {
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default TextLevelBtn