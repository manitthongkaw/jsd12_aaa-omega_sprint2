import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// นำเข้า Header
import Header from "./components/HeaderSection"; 
import HeroSection from "./components/HeroSection";
import ProductHighlight from "./components/ProductHighlight";  
import CalculatorSection from "./components/CalculatorSection"; 
import FooterSection from "./components/FooterSection";     
// นำเข้า CSS และหน้าฝั่ง Admin
import AdminLayout from "./components/admin/Layout";
import AdminHome from "./pages/admin/Home";
import AdminProducts from "./pages/admin/Products";

import AdminOrders from "./pages/admin/Orders";
import AdminOrderItem from "./pages/admin/OrderItem";
import './assets/css/App.css';

// นำเข้าหน้าฝั่ง User
import TestimonialsPage from './pages/TestimonialsPage';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true, 
        // ใส่ Header เฉพาะหน้า HomePage
        element: (
          <>
            <Header />
            <HeroSection />
            <ProductHighlight />
            <CalculatorSection />
            <FooterSection />
          </>
        ),
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