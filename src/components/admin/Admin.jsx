import React from "react";
import AdminMainbar from "./AdminMainbar";
import AdminSideBar from "./AdminSideBar";
import Styles from "./_admin.module.css";

const Admin = () => {
  return (
    <section id={Styles.adminPanel}>
      <article>
        <AdminSideBar />
        <AdminMainbar />
      </article>
    </section>
  );
};

export default Admin;
