import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <aside className="bg-gray-700 text-white w-64 min-h-screen p-4">
            <nav className="flex flex-col space-y-4">
                <Link to="/" onClick={() => {
                    setSelectedTab("Home")}} 
                    className={`px-2 py-1 rounded ${selectedTab === 'Home' && 'bg-orange-600'}`}>Home</Link>
                <Link to="/createpost" onClick={() => {
                    setSelectedTab("Create Post")}} className={`px-2 py-1 rounded ${selectedTab === 'Create Post' && 'bg-orange-600'}`}>Create Post</Link>
            </nav>
        </aside>
    )
}

export default Sidebar
