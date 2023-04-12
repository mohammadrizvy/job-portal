import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import AppliedJob from "./Components/AppliedJob";
import Statistics from "./Components/Statistics";
import JobDetail from "./Components/JobDetail";
import ErronPage from "./Components/ErronPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErronPage></ErronPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/featuredJob.json"),
      },
      {
        path: "job/:id",
        element: <JobDetail></JobDetail>,
        loader: ({params}) => fetch("/featuredJob.json"),                                
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "appliedjob",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
