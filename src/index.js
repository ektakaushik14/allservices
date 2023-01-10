import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/404Page/404Page";
import Support from "./Components/Support/Support";
import Pricing from "./Components/Pricing/Pricing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Profile from "./Components/Profile/Profile";
import TermsAndConditions from "./Components/Terms&Conditions/TermsAndConditions";
import Privacy from "./Components/Privacy/Privacy";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms&conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
