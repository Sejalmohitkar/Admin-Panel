import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function Validation() {
    const errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!values.fname.trim()) {
      errors.fname = "First name is required!";
    }

    if (!values.lname.trim()) {
      errors.lname = "Last name is required!";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required!";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required!";
    } else if (!password_pattern.test(values.password)) {
      errors.password =
        "Password must be at least 6 characters long and include at least 1 letter and 1 number!";
    }

    return errors;
  }

  function handleValidation(e) {
    e.preventDefault();
    const validationErrors = Validation();

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 bg-white rounded">
        <form onSubmit={handleValidation}>
          <h3 className="text-center">Registration Form</h3>

          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              value={values.fname}
              placeholder="Enter first name"
              className="form-control"
              onChange={handleInput}
            />
            {errors.fname && <p style={{ color: "red" }}>{errors.fname}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              value={values.lname}
              placeholder="Enter last name"
              className="form-control"
              onChange={handleInput}
            />
            {errors.lname && <p style={{ color: "red" }}>{errors.lname}</p>}
          </div>

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
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div className="mb-2">
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
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>

          <div className="d-grid mt-2">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>

          <p className="text-end mt-2">
            Already Registered? <Link to="/">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
