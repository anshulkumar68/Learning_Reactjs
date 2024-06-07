import React from 'react'

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <aside className="bg-gray-700 text-white w-64 h-screen p-4">
            <nav className="flex flex-col space-y-4">
                <a href="#" onClick={() => {
                    setSelectedTab("Home")}} 
                    className={`px-2 py-1 rounded ${selectedTab === 'Home' && 'bg-orange-600'}`}>Home</a>
                <a href="#" onClick={() => {
                    setSelectedTab("Create Post")}} className={`px-2 py-1 rounded ${selectedTab === 'Create Post' && 'bg-orange-600'}`}>Create Post</a>
            </nav>
        </aside>
    )
}

export default Sidebar
