import React from "react";
import Styles from "./_admin.module.css";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

const AdminSideBar = () => {
  return (
    <aside className={Styles.adminSidebar}>
      <nav>
        <Link>
          <span className={Styles.icons}>
            <AiOutlineDashboard />
          </span>
          <span className={Styles.content1}>Dashboard</span>
        </Link>
      </nav>
      <main>
        <Link to="/listofusers">
          <span className={Styles.content}>AddUsers</span>
        </Link>
      </main>
      <main>
        <Link to="/bootcamps">
          <span className={Styles.content}>CreateBootCamp</span>
        </Link>
      </main>
      {/* <main>
        <Link to="courses">
          <span className={Styles.content}>CreateCourses</span>
        </Link>
      </main> */}
      <main>
        <Link to="/">
          <span className={Styles.content}>Home</span>
        </Link>
      </main>
    </aside>
  );
};

export default AdminSideBar;
