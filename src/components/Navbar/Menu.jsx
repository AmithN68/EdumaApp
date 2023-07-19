import React, { useState } from "react";
import Styles from "./_navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import AxiosInstance from "../Services/AxiosInstance";
import { Link } from "react-router-dom";

const Menu = () => {
  let [role, setRole] = useState("");
  let token = window.localStorage.getItem("token");
  if (token) {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let { role } = data.data;
        console.log(role);
        setRole(role);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return (
      <section id={Styles.menuBlock}>
        <article>
          <aside>
            <ul>
              <li>Event</li>
              <li>Demos</li>
              <li>Pages</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>
                <AiOutlineSearch />
              </li>
              <li>
                <Link to="/dashboard">
                  {role !== "user" ||
                  (role !== null && (role == "admin" || role === "publisher"))
                    ? "Dashboard"
                    : ""}
                </Link>
              </li>
            </ul>
          </aside>
        </article>
      </section>
    );
  };
}
export default Menu;
