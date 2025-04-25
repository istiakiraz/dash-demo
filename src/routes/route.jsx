import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import OverView from "../pages/OverView";
import Users from "../pages/Users";
import Vendors from "../pages/Vendors";
import Category from "../pages/Category";

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
        {
            path: '/users',
            Component: Users
          },
        {
            path: '/vendors',
            Component: Vendors
          },
        {
            path: '/category',
            Component: Category
          },

      ]
    },
    
  ]);