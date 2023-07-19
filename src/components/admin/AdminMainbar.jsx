import React from "react";
import { Outlet } from "react-router-dom";
// import BootCampForm from "../../pages/Bootcamp/BootCampForm";

import Styles from "./_admin.module.css";

const AdminMainbar = () => {
  return (
    <div className={Styles.adminMain}>
      <aside className={Styles.users}>
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminMainbar;
