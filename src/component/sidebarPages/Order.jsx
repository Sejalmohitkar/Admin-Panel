import React, { useEffect, useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import Table from "react-bootstrap/Table";
import { Badge, Dropdown } from "react-bootstrap";
import { Settings } from "lucide-react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const statusVariant = {
    Pending: "warning",
    Dispatch: "info",
    Completed: "success",
  };

  return (
    <div className="col-12 d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar1 />
        <div className="container mt-4 mx-3">
          <h3>Orders</h3>
          <p>{users.length} Orders found</p>
          <Table hover responsive className="shadow-sm rounded">
            <thead className="bg-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.address.address}</td>
                  <td>{user.address.city}, {user.address.state}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge bg={statusVariant[user.status] || "secondary"}>
                      {user.status || "Pending"}
                    </Badge>
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" size="sm">
                        <Settings size={18} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>View</Dropdown.Item>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Users;
