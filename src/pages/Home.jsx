// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//      const navigate = useNavigate();

//     const userName = JSON.parse(localStorage.getItem("user"));

//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         navigate("/");
//     }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
//       <div className="form_container p-5 bg-white rounded">
//             <h3 className='text-center'>Home Page</h3>
//             <p className='d-flex justify-content-center align-items-center'> Welcome - {userName.fname} {userName.lname} </p>
//             <p className='d-flex justify-content-center align-items-center'> Your Email - {userName.email}</p>
//             <p className='d-flex justify-content-center align-items-center'> Your Password - {userName.password}</p>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>

//       </div>
//     </div>
//   )
// }

// export default Home;

import React from "react";
import Dashboard from "../component/Dashboard/Dashboard";
import Sidebar from "../layout/Sidebar";
import Navbar1 from "../layout/Navbar";
import myImage from '../assets/hero.png'

function Home() {
  return (
    <>
      <div className="col-12 d-flex " style={{ 
      backgroundImage: `url(${myImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh',
    }}>
      <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Navbar1 />
          <div className="">
          <Dashboard />
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
