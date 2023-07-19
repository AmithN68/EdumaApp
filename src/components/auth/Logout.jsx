import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_auth.module.css";
import AxiosInstance from "../Services/AxiosInstance";
import AdminRoute from "../../routes/AdminRoutes";

const Logout = () => {
  let token = window.localStorage.getItem("token");
  let logout = async () => {
    let { data } = await AxiosInstance.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.localStorage.removeItem("token");
    window.location.assign("/");
  }

  let AuthUser = () => {
    return (
      <>
        {/* <AdminRoute>
          <div className={Styles.bootCampBtn}>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </div>
        </AdminRoute> */}
        <div className={Styles.logoutMain}>
          <li onClick={logout} className={Styles.logout}>
            <Link to="/">Logout</Link>
          </li>
        </div>
      </>
    );
  };

  let GuestUser = () => {
    return (
      <section className={Styles.menuSectionBlock}>
        <div className={Styles.menuBlock}>
          <ul className={Styles.menu}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  return (
    <section className={Styles.btns}>
      <>{token ? <AuthUser /> : <GuestUser />}</>
    </section>
  );
};

export default Logout;
