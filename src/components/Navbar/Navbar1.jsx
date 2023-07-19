import React from "react";
import Styles from "./_navbar.module.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Logout from "../auth/Logout";

const Navbar1 = () => {
  return (
    <section className={Styles.navBlock1}>
      <article>
        <aside className={Styles.aside}>
          <ul>
            <li>Contact us:</li>
            <li>
              {" "}
              <span>
                <BsTelephone />
              </span>{" "}
              (+88) 1990 6886
            </li>
            <li>
              {" "}
              <span>
                <AiOutlineMail />
              </span>{" "}
              contact@thimpress.com
            </li>
            <li>
              {" "}
              <span>
                <HiOutlineUsers />
              </span>{" "}
              Demo account
            </li>
          </ul>
        </aside>

        <aside className={Styles.aside1}>
          <Logout />
        </aside>
      </article>
    </section>
  );
};

export default Navbar1;



// import React from "react";
// import { Link } from "react-router-dom";
// // import AdminRoute from "../../routes/AdminRoute";
// import AxiosInstance from "../../services/AxiosInstance";

// import Styles from "./Navbar.module.css";
// import AdminRoute from "./../../routes/AdminRoute";
// import Navbar1 from './Navbar1';

// const Navbar1 = () => {
//   let token = window.localStorage.getItem("token");
//   let logout = async () => {
//     let { data } = await AxiosInstance.get("/auth/logout", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     window.localStorage.removeItem("token");
//     window.location.assign("/");
//   };
//   let AuthUser = () => {
//     return (
//       <section className={Styles.AuthBlock}>
//         <article>
//           <AdminRoute>
//             <div>
//               <button className={Styles.BootCampBlock}>
//                 <Link to="/dashboard">Dashboard</Link>
//               </button>
//             </div>
//           </AdminRoute>

//           <div>
//             <button onClick={logout} className={Styles.logoutBlock}>
//               Logout
//             </button>
//           </div>
//         </article>
//       </section>
//     );
//   };

//   let GuestUser = () => {
//     return (
//       <section className={Styles.menuBlock}>
//         <article>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/register">Register</Link>
//               </li>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             </ul>
//           </nav>
//         </article>
//       </section>
//     );
//   };
//   return (
//     <section className={Styles.btns}>
//       <>{token ? <AuthUser /> : <GuestUser />}</>
//     </section>
//   );
// };

// export default Navbar1;
