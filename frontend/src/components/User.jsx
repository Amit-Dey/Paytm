import Button from '../components/Button'

const User = ({ name }) => {
    return (
        <div className="bg-secondary px-5  py-1 rounded-md shadow-md w-full flex justify-between">
            <div className="flex gap-3 items-center ">
                <div className="rounded-full bg-primary w-10 h-10 flex justify-center items-center text-3xl text-secondary">U</div>
                <h1 className="text-xl font-bold">{name}</h1>
            </div>
            <div className="w-[10rem]">
                <Button level="Send Money" />
            </div>
        </div>
    )
}

export default User