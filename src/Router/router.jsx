import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import CategoryNews from "../MainSections/CategoryNews";
import AuthLayout from "../AuthLayout/AuthLayout";
import Signin from "../Components/Signin";
import Register from "../Components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Signin></Signin>
      },
      {
        path:"/auth/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "*",
    element: <h1>This is an error page</h1>,
  },
]);
