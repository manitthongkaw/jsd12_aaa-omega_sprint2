
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestimonialsPage from "./pages/TestimonialsPage";
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
        index: true, // หน้าแรกสุด (/)
        element: <HomePage />,
      },
      {
        path: "testimonials", // หน้ารีวิวลูกค้า (/testimonials)
        element: <TestimonialsPage />,
      },
      {
        path: "admin", // โซน Admin (/admin)
        element: <AdminLayout />,
        children: [
          {
            index: true, // หน้าหลักของ admin (/admin)
            element: <AdminHome />,
          },
          {
            path: "products", // (/admin/products)
            element: <AdminProducts />,
          },
          {
            path: "orders", // (/admin/orders)
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