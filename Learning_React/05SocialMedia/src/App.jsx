import { useState } from 'react'
import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar selectedTab = {selectedTab} setSelectedTab= {setSelectedTab}></Sidebar>
          <main className="flex-grow p-4">
            {selectedTab == "Home" ? <PostList/> : <CreatePost/>}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App