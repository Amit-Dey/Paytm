import { Link } from 'react-router-dom'

const TextLevelBtn = ({ text, level, path }) => {
    return (
        <div className='text-center mb-2'>
            <span className='text-text opacity-80 text-sm'>{text}</span>
            <Link to={path} className='text-primary text-sm underline underline-offset-4'>{level}</Link>
        </div>
    )
}

export default TextLevelBtn