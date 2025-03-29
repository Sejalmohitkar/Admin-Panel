import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TfiBarChart } from "react-icons/tfi";
import {
  Home,
  Package,
  BarChart,
  Flame,
  Box,
  Heart,
  Headset,
  BookOpenText,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`sidebar ${sidebarToggle ? "icon-only" : "full"} d-none d-lg-block d-md-block d-sm-none`}>
      <div
        className="text-white p-4 rounded-end-4 overflow-auto d-flex flex-column"
        style={{ backgroundColor: "#6C60F3", minHeight: "100vh" }}
      >
        {/* Logo */}
        <div className="d-flex justify-content-center fw-bold fs-5 mb-2">
          <TfiBarChart size={22} />
        </div>
        <h4 className={`logo text-center fw-bold fs-5 mb-3 ${sidebarToggle ? "d-none" : ""}`}>
          RECREATE
        </h4>

        {/* Navigation Menu */}
        <Nav className="flex-column menu gap-2">
          <Link to="/home" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <Home size={18} className="icon me-2" />
            {!sidebarToggle && <span>Dashboard</span>}
          </Link>
          <Link to="/order" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <Package size={18} className="icon me-2" />
            {!sidebarToggle && <span>Users</span>}
          </Link>
          <Link to="/revenue" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <BarChart size={18} className="icon me-2" />
            {!sidebarToggle && <span>Revenue</span>}
          </Link>
          <Link to="/hotDeals" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <Flame size={18} className="icon me-2" />
            {!sidebarToggle && <span>Cards</span>}
          </Link>
          <Link to="/product" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <Box size={18} className="icon me-2" />
            {!sidebarToggle && <span>Products</span>}
          </Link>
          <Link to="/wishlist" className="menu-item text-white d-flex align-items-center p-2 text-decoration-none rounded">
            <Heart size={18} className="icon me-2" />
            {!sidebarToggle && <span>Wishlist</span>}
          </Link>
        </Nav>

        {/* Help Section */}
        <div className="text-center mt-5">
          <div className="text-white p-2 rounded mb-2" style={{ backgroundColor: "#7C71F4" }}>
            <p className="mb-0 fw-bold">
              <span className="d-flex justify-content-center fw-bold fs-5 mb-2">
                <BookOpenText size={22} />
              </span>
              {!sidebarToggle && "Need Help?"}
            </p>
            {!sidebarToggle && <small>Check our documentation</small>}
          </div>
          <button
            className="btn text-white w-100 d-flex align-items-center justify-content-center rounded border-0 mt-3"
            style={{ backgroundColor: "#7C71F4" }}
          >
            <Headset size={18} className="me-2" />
            {!sidebarToggle && "Live Support"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
