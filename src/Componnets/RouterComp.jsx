import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import MovieDetailPage from "./MovieDetailPage";
import ResultPage from "./ResultPage";
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
