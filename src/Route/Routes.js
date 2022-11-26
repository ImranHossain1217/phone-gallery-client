import { createBrowserRouter } from "react-router-dom";
import About from "../componets/About";
import Blog from "../componets/Blog";
import Contact from "../componets/Contact";
import Home from "../componets/Home";
import Login from "../componets/Login";
import Phones from "../componets/Phones";
import SignUp from "../componets/SignUp";
import Main from "../layout/Main";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:'/category/:id',
        element:<PrivateRoute><Phones></Phones></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
    ],
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]

  }
 
]);
