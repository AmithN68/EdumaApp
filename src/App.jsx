import React from "react";
import Home from "./components/main/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import BootCampForm from "./components/bootCamp/BootCampForm";
import AdminRoute from "./routes/AdminRoutes";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
// import PopularCourses from "./components/main/PopularCourses";
import ListOfUsers from "./components/admin/ListOfUsers";
import Users from "./components/admin/Users";
import Admin from "./components/admin/Admin";

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/bootCampForm"
            element={
              <AdminRoute>
                <BootCampForm />
              </AdminRoute>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route path="/bootcamps" element={<BootCampForm />} />
          {/* <Route path="courses" element={<PopularCourses />} /> */}
          <Route path="/listofusers" element={<ListOfUsers />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

