import React, { useEffect, useState } from "react";
import AxiosInstance from "../Services/AxiosInstance";
import Styles from "./_admin.module.css";

const Users = () => {
  let [user, setUser] = useState([]);
  let token = window.localStorage.getItem("token");
  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/all-users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fetchData();
  }, []);
  return (
    <section className={Styles.UsersBlock}>
      <article>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Photo</th>
              {/* <th>Gender</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((val, ind) => {
              return (
                <tr key={ind}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.role}</td>
                  <td>{val.photo}</td>
                  {/* <td>{val.photo}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Users;
