import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// นำเข้า Header
import Header from "./components/HeaderSection";

// นำเข้า CSS และหน้าฝั่ง Admin
import AdminLayout from "./components/admin/Layout";
import AdminHome from "./pages/admin/Home";
import AdminProducts from "./pages/admin/Products";

import AdminOrders from "./pages/admin/Orders";
import AdminOrderItem from "./pages/admin/OrderItem";
import './assets/css/App.css';

// นำเข้าหน้าฝั่ง User
import HomePage from './pages/HomePage';
import TestimonialsPage from './pages/TestimonialsPage';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "products",        // สินค้า
        element: <div>Products Page (Coming Soon)</div>,
      },
      {
        path: "services",        // บริการ
        element: <div>Services Page (Coming Soon)</div>,
      },
      {
        path: "portfolio",       // ผลงาน 
        element: <div>Portfolio Page (Coming Soon)</div>,
      },
      {
        path: "contact",         // ติดต่อเรา 
        element: <div>Contact Page (Coming Soon)</div>,
      },
      {
        path: "testimonials",
        // ใส่ Header เฉพาะหน้า TestimonialsPage
        element: (
          <>
            <Header />
            <TestimonialsPage />
          </>
        ),
      },
      {
        path: "admin",

        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminHome /> },
          { path: "products", element: <AdminProducts /> },
          { path: "orders", element: <AdminOrders /> },
          { path: "orders/:orderId", element: <AdminOrderItem /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}