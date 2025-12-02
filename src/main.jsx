/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Inventory from "./Pages/inventory/Inventory.jsx";
import AddQuantityPage from "./Pages/Inventory/AddQuantityPage.jsx";
import ReportDamage from "./Pages/Inventory/ReportDamage.jsx";
import Homepage from "./Pages/Homepage.jsx";

const ProtectedRoute = ({ children }) => {
  {
    /*For number inputs only*/
  }
  document.addEventListener(
    "wheel",
    function (e) {
      if (document.activeElement.type === "number") {
        // Prevents scroll-based number increment/decrement
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener("keydown", function (e) {
    if (document.activeElement.type === "number") {
      // Prevents arrow key-based number increment/decrement
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
      }
    }
  });
  const isAuthenticated = localStorage.getItem("email");
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};
const AuthRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("email");

  // if (isAuthenticated) {
  //   return <Navigate to="/" replace />;
  // }

  return children;
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/inventory",
        element: <Inventory />,
      },
      { path: "/inventory/add-quantity", element: <AddQuantityPage /> },
      { path: "/inventory/report-damage", element: <ReportDamage /> },
      { path: "/home", element: <Homepage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />
);
