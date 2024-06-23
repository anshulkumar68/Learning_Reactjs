import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                        <a href="#" className="text-white hover:text-gray-300">Services</a>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded"
                        />
                        <a href="#" className="text-white hover:text-gray-300 p-2 rounded border-[1px]">Login</a>
                        <a href="#" className="text-white hover:text-gray-300 bg-orange-600 p-2 rounded">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
