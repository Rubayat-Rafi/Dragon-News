import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
        path:'auth',
        element: <h1>this is auth section</h1>
    },
    {
        path:'*',
        element:<h1>This is an error page</h1>
    }
    
  ]);