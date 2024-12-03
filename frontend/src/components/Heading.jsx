import PropTypes from 'prop-types';

const Heading = ({ label }) => {
    return (
        <h1 className="text-3xl font-bold text-primary text-center">{label}</h1>
    )
}

Heading.propTypes = {
    label: PropTypes.string.isRequired
};
export default Heading