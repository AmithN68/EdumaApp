import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { AiFillEye } from "react-icons/ai";
import AxiosInstance from "../Services/AxiosInstance";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  let [state, setState] = useState({
    password: "",
    email: "",
  });
  let { password, email } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    console.log({email,password});
      try {
        let payload = { password, email };
        let { data } = await AxiosInstance.post("/auth/login", payload);
        toast.success(`successfully ${email} logged in`);
        if (data.success === true) {
          window.localStorage.setItem("token",data.token)
        } else {
          window.localStorage.removeItem("token");
        }
        window.location.assign("/");
      } catch (error) {
        toast.error("incorrect password");
      }
  };
  
  return (
    <section id={Styles.loginBlock}>
      <article>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="enter the username or email"
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter the password"
              required
            />
          </div>
          <div className={Styles.passwordBlock}>
            <span>
              <AiFillEye />
            </span>
          </div>
          <div className={Styles.checkBlock}>
            <label htmlFor="password"></label>
            <input type="checkbox" name="checkbox" /> Remember Me
            <span>Last Your password ?</span>
          </div>
          <div>
            <label htmlFor=""></label>
            <button>Login</button>
          </div>
          <div className={Styles.login1}>
            <span>Not a member yet?</span>
            <span>
              <Link to="/register">Register Now</Link>
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

export default Login;
