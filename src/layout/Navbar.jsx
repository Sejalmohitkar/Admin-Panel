import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import {FaSearch, FaCog, FaBell, FaUserCircle } from "react-icons/fa";
import { Menu } from "lucide-react";

// import { useState } from "react";
// import myImage from '../assets/hero.png'

const Navbar1 = ({ toggleSidebar }) => {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#282743",
      }}
    >
      <Navbar
        className="d-flex align-items-center px-4 py-2"
        // className={`d-flex align-items-center px-4 py-2 ${
        //   darkMode ? "bg-dark text-white" : "bg-white"
        // }`}
      >
        <Container fluid className="">
          <Form className="d-flex flex-grow-1">
           {/* Sidebar toggle button (only visible on mobile)  */}
            <Button
              variant="light"
              onClick={toggleSidebar}
              className="d-lg-none"
            >
               <Menu size={24} />
            </Button>
            <InputGroup
              className="w-50"
              style={{
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search here..."
                className="me-2"
              />
            </InputGroup>
          </Form>
        </Container>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Dark Mode Toggle */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" />
            {/* checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} */}
          </div>

          {/* Icons */}
          <FaCog size={24} className="cursor-pointer text-white" />
          <FaBell size={24} className="cursor-pointer text-white" />

          {/* User Avatar */}
          <FaUserCircle size={32} className="cursor-pointer text-white" />
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar1;


