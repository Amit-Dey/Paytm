import PropTypes from 'prop-types';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const User = ({ user }) => {
    const navigate = useNavigate()
    return (
        <div className="bg-secondary px-5  py-1 rounded-md shadow-md w-full flex justify-between">
            <div className="flex gap-3 items-center ">
                <div className="rounded-full bg-primary w-10 h-10 flex justify-center items-center text-3xl text-secondary">{user.firstname.charAt(0).toUpperCase()}</div>
                <h1 className="text-xl font-bold">{user.firstname}</h1>
            </div>
            <div className="w-[10rem]">
                <Button label="Send Money" onClick={() => navigate(`/send?username=${user.firstname}&id=${user._id}`)} />
            </div>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User