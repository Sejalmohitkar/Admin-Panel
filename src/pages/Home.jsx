
import Dashboard from "../component/Dashboard/Dashboard";
import Sidebar from "../layout/Sidebar";
import Navbar1 from "../layout/Navbar";
import myImage from "../assets/hero.png";
import { useState, useEffect } from "react";

function Home() {
  
  const [sidebarToggle, setSidebarToggle] = useState(window.innerWidth < 992); // Mobile: collapsed

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSidebarToggle(true); // Collapse on mobile
      } else {
        setSidebarToggle(false); // Expand on larger screens
      }
    };

    handleResize(); // Check on first load
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <>
      <div
        className="d-flex"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="col-2">
          <Sidebar sidebarToggle={sidebarToggle} toggleSidebar={() => setSidebarToggle(!sidebarToggle)} />
        </div>
        <div className="col-10">
          <Navbar1 toggleSidebar={() => setSidebarToggle(!sidebarToggle)}  />
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
