// import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

   const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      values.email === loggeduser.email && 
      values.password === loggeduser.password)
    {
      localStorage.setItem("loggedin", true);
      navigate("/home")
    }
    else{
      alert("Invalid email or password!")
    }
   };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 bg-white rounded">
        <form onSubmit={handleLogin}>
            <h3 className='text-center'>Login Form</h3>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
             type="email"
             name="email"
             value={values.email}
             placeholder="Enter Email"
             className="form-control"
             onChange={handleInput}
            />
            
          </div>
          <div className="mb-2 ">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="Enter Password"
              className="form-control"
              onChange={handleInput}
            />
           
          </div>
          <div className="mb-2 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2 ms-2">
            Forgot <a href="#">Password?</a><Link to={"/registration"} href="#" className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
