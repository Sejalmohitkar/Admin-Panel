import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import {FaSearch, FaCog, FaBell, FaUserCircle } from "react-icons/fa";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = ({ toggleSidebar }) => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#282743",
      }}
    >
      <Navbar
        className="d-flex align-items-center px-4 py-2"
      >
        <Container fluid className="">
          <Form className="d-flex flex-grow-1">
            
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
          </div>

          {/* Icons */}
          <FaCog size={24} className="cursor-pointer text-white" />
          <FaBell size={24} className="cursor-pointer text-white" />

          {/* User Avatar */}
          <div>
          <FaUserCircle size={32} 
          className="cursor-pointer text-white" 
          onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div
            style={{
              position: 'absolute',
              right: 0,
              top: '40px',
              background: '#fff',
              borderRadius: "8px",
              boxShadow : '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              zIndex: 1000,
              minWidth: '150px',
            }}>
             <Link to='/'> <Button variant='primary' className="w-100 mb-2 p-1">Login</Button></Link>
             <Link to='/register'> <Button variant='primary' className="w-100">Signup</Button></Link>

            </div>
          )}

          </div>
          
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar1;


