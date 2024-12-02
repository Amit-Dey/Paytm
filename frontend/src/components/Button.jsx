
const Button = ({ level }) => {
    return (
        <div className="p-2">

            <button className="bg-primary text-background hover:text-text w-full h-10 rounded-sm hover:bg-background font-bold tracking-widest">
                {level}
            </button>
        </div>
    )
}

export default Button