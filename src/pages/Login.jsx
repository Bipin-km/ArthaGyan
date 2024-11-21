import { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const submissionHandler = (event) => {
    event.preventDefault();
    console.log(formData.dob);

    if (formData.password.length == 0) {
      alert("Password cannot be empty");
      return;
    }

    if (formData.username.length < 5 || formData.username.length > 64) {
      alert("Username length : 5-64 characters");
      return;
    }

    const form = document.getElementById("form");
    form.submit();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="login">
    <div className="main-content">
      <h1>User Login</h1>
      <form
        id="form"
        className="main-form"
        method="GET"
        action="./"
        onSubmit={submissionHandler}
      >
        <div className="form-group">
          <span>
          <label className="input-label">Username: </label>
          <input
            type="text"
            name="username"
            className="input-box"
            value={formData.username}
            onChange={handleInputChange}
          />
          </span>
          <span>
          <label className="input-label">Password: </label>
          <input
            type="password"
            name="password"
            className="input-box"
            value={formData.password}
            onChange={handleInputChange}
          />
        </span>
        <div className="button_div" >          
          <div>
            {" "}
            <input
              type="submit"
              id="submitbtn"
              name="submitbtn"
              className="submit-btn"
              value={"Login"}
            ></input>
          </div>
        </div>
        </div>

      </form>
      <Link to="/register" className="link">
        Don't have an account? Register here!
      </Link>
    </div>
    </section>
  );
}

export default Login;
