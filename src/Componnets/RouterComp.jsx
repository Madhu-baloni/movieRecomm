import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import MovieDetailPage from "./MovieDetailPage";
import ResultPage from "./ResultPage";
import CheckoutPage from "./CheckoutPage";
import ProfilePage from "./ProfilePage";
import LoginPage from "./LoginPage";
import { AuthLoader } from "../utils/AuthLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: "/",
        element: <HomePage />,
      },
      {
        path: "/deatilpage/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "resultpage",
        element: <ResultPage />,
      },
      {
        path: "profilepage",
        loader: AuthLoader,
        element: <ProfilePage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
