import React from 'react'

const Nav = () => {
    return (
        <div className="bg-background h-fit w-full text-text flex justify-between px-16 py-4 border-b-[1px] border-text">
            <h1 className="text-4xl text-center font-bold text-primary tracking-widest">Payments App</h1>
            <div className="flex gap-3 items-center ">
                <div className="text-text text-2xl font-semibold tracking-wider">User Name</div>
                <div className="rounded-full bg-primary w-10 h-10 flex justify-center items-center text-3xl text-secondary">U</div>
            </div>
        </div>
    )
}

export default Nav