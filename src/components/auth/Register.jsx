import React, { useState } from "react";
import Styles from "./_auth.module.css";
import AxiosInstance from "../Services/AxiosInstance";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";


const Register = () => {
  let Navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let { name, email, password, confirmpassword } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      if (password === confirmpassword) {
        let payload = { name, email, password,confirmpassword };
        console.log(payload);
        await AxiosInstance.post("auth/register", payload);
        toast.success(`successfully ${name} registered`);
        Navigate("/login");
      } else {
        toast.error("password not matched");
      }
    } catch (error) {
      // toast.error("please fill all the input fields");
      console.log(error);
    }
    // setState({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmpassword: "",
    // });
  };
  return (
    <section id={Styles.registerBlock}>
      <article>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="enter username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="enter your email id"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter the password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmpassword"></label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="confirm password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <button>Sign Up</button>
          </div>
          <div className={Styles.login1}>
            <span>Are you a member?</span>
            <span>
              <Link to="/login">Login here</Link>
            </span>
          </div>
          <div className={Styles.account1}>
            <p>Wanna see how Student, Instructor, or Admin look?</p>
            <h1>
              <a href="">Click here to access Demo Account</a>
            </h1>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
