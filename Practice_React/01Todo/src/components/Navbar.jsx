import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between py-[1rem] px-[3rem]">
                <div className="text-2xl">
                    My Brand
                </div>
                <ul className="flex">
                    <a className="mr-[3rem] " href="#"><li>Home</li></a>
                    <a className="mr-[3rem]" href="#"><li>About</li></a>
                    <a className="mr-[3rem]" href="#"><li>Products</li></a>
                    <a className="mr-[3rem]" href="#"><li>Demo</li></a>
                    <a className="mr-[3rem]" href="#"><li>Let's chat</li></a>
                </ul>
            </nav>
        </>

    )
}

export default Navbar