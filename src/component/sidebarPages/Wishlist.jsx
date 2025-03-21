import React, { useEffect, useState } from 'react'
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import Table from 'react-bootstrap/Table';
import {Badge, Dropdown, Button } from "react-bootstrap";
import {Settings} from "lucide-react";
import axios from 'axios';

function Wishlist() {
    
  const [wishlist, SetWishlist] = useState([]);

  const loadData = async () => {
    try{
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response.data.users);
      SetWishlist(response.data.users);
    }catch(error){
      console.log("Error Fetching Wishlist", error);
    }
  }
  
  useEffect(() => {
    loadData();
  }, []);

  const statusVariant = {
    Pending: "warning",
    Dispatch: "info",
    Completed: "success",
  };


        // const wishlist = [
        //   { id: "#2632", name: "Brooklyn Zoe", date: "31 Jul 2020", price: "$44.00", status: "In Stock" },
        //   { id: "#2633", name: "John McCormick", date: "01 Aug 2020", price: "$35.00", status: "In Stock"},
        //   { id: "#2634", name: "Sandra Pugh", date: "02 Aug 2020", price: "$74.00", status: "In Stock" },
        //   { id: "#2635", name: "Vernie Hart", date: "02 Aug 2020", price: "$82.00", status: "In Stock" },
        //   { id: "#2636", name: "Mark Clark", date: "03 Aug 2020", price: "$39.00", status: "In Stock" },
        //   { id: "#2637", name: "Rebekah Foster", date: "03 Aug 2020", price: "$57.00", status: "In Stock" }
        // ];
      
  return (
    <div>
      <div className="col-12 d-flex ">
          <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <Navbar1 />
              <div className="container mt-3 mx-3">
              <h3>Wishlist</h3>
      <Table hover responsive className="shadow-sm rounded">
        <thead className="bg-light">
          <tr>
            <th>Customer</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((wishlist, index) => (
            <tr key={index} className={wishlist.highlight ? " text-dark" : ""}>
              <td>{wishlist.image}</td>
              <td>{wishlist.firstName} {wishlist.lastName}</td>
              <td>{wishlist.email}</td>
              <td>{wishlist.age}</td>
              <td>{wishlist.gender}</td>
              <td>
              <Badge bg={statusVariant[wishlist.status] || "secondary"}>
              {wishlist.status || "Pending"}
              </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
            </div>
          </div>
    </div>
  )
}

export default Wishlist;
