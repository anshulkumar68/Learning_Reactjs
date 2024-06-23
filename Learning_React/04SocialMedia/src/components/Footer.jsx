import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center text-white">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                        <a href="#" className="hover:text-gray-300">Contact Us</a>
                    </div>
                    <div className="text-sm">
                        &copy; 2024 MyApp. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
