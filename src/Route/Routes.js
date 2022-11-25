import { createBrowserRouter } from "react-router-dom";
import About from "../componets/About";
import Blog from "../componets/Blog";
import Contact from "../componets/Contact";
import Home from "../componets/Home";
import Phones from "../componets/Phones";
import Main from "../layout/Main";

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
        element:<Phones></Phones>,
        loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      }
    ],
  },
]);
