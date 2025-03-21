import React from 'react'
import { Nav } from "react-bootstrap";
import {Link } from 'react-router-dom'
import { TfiBarChart } from "react-icons/tfi";
import { 
  Home, Package, BarChart, Flame, Box, Heart, Headset, BookOpenText
} from "lucide-react";
import './Sidebar.css'
// import Order from '../component/sidebarPages/Order';

const Sidebar = () => {
  return (
    <div>
      <div className=" sidebar text-white  p-4 rounded-end-4 overflow-auto d-flex flex-column" style={{ backgroundColor: "#6C60F3" }}>
        <div className="d-flex justify-content-center text-align-center fw-bold fs-5 mb-2">
          <TfiBarChart size={22} />
        </div>
        <h4 className="logo text-center fw-bold fs-5 mb-3">RECREATE</h4>

        <Nav className="flex-column menu gap-2">
          <Link to={"/home"} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <Home size={18} className="icon me-2" />
            Dashboard
          </Link>
          <Link to={'/order'} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <Package size={18} className="icon me-2" />
            Users
          </Link>
          <Link to={'/revenue'} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <BarChart size={18} className="icon me-2" />
            Revenue
          </Link>
          <Link to={"/hotDeals"} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <Flame size={18} className="icon me-2" />
            Cards
          </Link>
          <Link to={"/product"} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <Box size={18} className="icon me-2" />
            My Products
          </Link>
          <Link to={"/wishlist"} className="menu-item active text-white d-flex align-items-center p-2 text-decoration-none hover:bg-light hover:text-dark rounded">
            <Heart size={18} className="icon me-2" />
            Wishlist
          </Link>
        </Nav>

        <div className="text-center mt-5">
          <div className="text-white p-2 rounded mb-2" style={{ backgroundColor: "#7C71F4" }}>
            <p className="mb-0 fw-bold">
              <span className="d-flex justify-content-center text-align-center fw-bold fs-5 mb-2">
                <BookOpenText size={22} />
              </span>
              Need Help?
            </p>
            <small>Check our documentation</small>
          </div>
          <button className="btn text-white w-100 d-flex align-items-center justify-content-center rounded border-0 mt-3" style={{ backgroundColor: "#7C71F4" }}>
            <Headset size={18} className="me-2" />
            Live Support
          </button>
        </div>
      </div>
      {/* <Order/> */}
    </div>
    
  )
}

export default Sidebar
