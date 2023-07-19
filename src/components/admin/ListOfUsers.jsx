import React, { useEffect, useState } from "react";
import Styles from "./_admin.module.css";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AxiosInstance from "../Services/AxiosInstance";

const ListOfUsers = () => {
  let [users, setUsers] = useState([]);
  let token = window.localStorage.getItem("token");
  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/all-users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={Styles.card}>
      <h2>
        <span>
          <FaUserAlt />
        </span>
        Users
      </h2>
      <p>
        <span>total Users</span>
        <span>{users.length > 0 && users.length}</span>
      </p>
      <p>
        <Moment format="DD/MMM/YYYY" withTitle>
          {new Date()}
        </Moment>
      </p>
      <p>
        <Link to="/users">View Users</Link>
      </p>
    </div>
  );
};

export default ListOfUsers;
