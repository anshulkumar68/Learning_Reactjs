import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></Sidebar>
            <main className="flex-grow p-4">
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
