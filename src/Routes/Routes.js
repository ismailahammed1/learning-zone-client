import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DownloadPdf from "../component/DownloadPdf/DownloadPdf";
import Blog from "../component/Pages/Blog/Blog";

import Category from "../component/Pages/Category/Category";
import ErrorPage from "../component/Pages/ErrorPage/ErrorPage";

import Home from "../component/Pages/Home/Home";
import SelectCourse from "../component/Pages/SelectCourse/SelectCourse";
import Register from "../component/Register/Register";
import MainPage from "../layout/MainPage";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/regis",
        element: <DownloadPdf></DownloadPdf>,
      },

      {
        path: "/category/:id",
        // @ts-ignore
        element: (
          <PrivateRoute>
            <SelectCourse></SelectCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-ismailahammed1.vercel.app/language/${params.id}`
          ),
      },
    ],
  },
]);
