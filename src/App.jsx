
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestimonialsPage from "./pages/TestimonialsPage";
import AdminLayout from "./components/admin/Layout";
import AdminHome from "./pages/admin/Home";
import AdminProducts from "./pages/admin/Products";
import AdminProductItem from "./pages/admin/ProductItem";
import AdminOrders from "./pages/admin/Orders";
import AdminOrderItem from "./pages/admin/OrderItem";
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
            path: "products/:productId",
            element: <AdminProductItem />,
          },
          {
            path: "orders", // (/admin/orders)
            element: <AdminOrders />,
          },
          {
            path: "orders/:orderId",
            element: <AdminOrderItem />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}