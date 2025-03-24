import React from "react";
import Dashboard from "../component/Dashboard/Dashboard";
import Sidebar from "../layout/Sidebar";
import Navbar1 from "../layout/Navbar";
import myImage from "../assets/hero.png";
import { useState } from "react";

function Home() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

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
          <Sidebar sidebarToggle={sidebarToggle} />
        </div>
        <div className="col-10">
          <Navbar1 toggleSidebar={() => setSidebarToggle(!sidebarToggle)} />

          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
