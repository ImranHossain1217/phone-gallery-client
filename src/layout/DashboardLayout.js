import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Header from "../componets/Header";
import Loading from "../componets/Loading";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const {user, loading} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile w-10/12 mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My Order</Link>
            </li>
            {
              isAdmin && <>
              <li>
              <Link to='/dashboard/allUsers'>All User</Link>
            </li>
              </>
            }
            <li>
              <Link to='/dashboard/addProducts'>Add New Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
