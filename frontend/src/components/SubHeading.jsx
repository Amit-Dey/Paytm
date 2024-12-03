import PropTypes from 'prop-types';

const SubHeading = ({ label }) => {
    return (
        <h2 className=" text-md  text-text text-center p-1 mt-1">{label}</h2>
    )
}

SubHeading.propTypes = {
    label: PropTypes.string.isRequired
};

export default SubHeading