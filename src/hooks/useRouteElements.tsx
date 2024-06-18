/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";
import { useContext } from "react";
import { AppContext } from "../contexts/app.context";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);
  console.log(isAuthenticated);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          ),
        },
        {
          path: "/ca-he-thong",
          element: (
            <MainLayout>
              <p>Ca he thong</p>
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <RejectedRoute />,
      children: [
        {
          path: "login",
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          ),
        },
      ],
    },

    {
      path: "*",
      element: <p>Not found</p>,
    },
  ]);

  return routeElements;
}
