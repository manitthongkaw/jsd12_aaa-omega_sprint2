import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./components/admin/Layout";
import AdminHome from "./pages/admin/Home";
import AdminProducts from "./pages/admin/Products";
import AdminOrders from "./pages/admin/Orders";
import './assets/css/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            index: "./",
            element: <AdminHome />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "orders",
            element: <AdminOrders />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}