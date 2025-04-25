import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import OverView from "../pages/OverView";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>error this page</p>,
      children: [
        {   index: true,
            Component : Home
        },
        {
          path: '/product',
          Component: Product
        },
        {
            path: '/overview',
            Component: OverView
          },

      ]
    },
    
  ]);