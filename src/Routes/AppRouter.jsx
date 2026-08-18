import React from "react";
import { createBrowserRouter } from "react-router-dom";

//Layouts Import
import MainLayout from "../Layout/MainLayout/MainLayout.jsx";
import AdminLayout from "../Layout/AdminLayout/AdminLayout.jsx";

//Customer Pages Import
import HomePage from "../Pages/Customer/HomePage/HomePage.jsx";
import ProductDetailPage from "../Pages/Customer/ProductDetailPage/ProductDetailPage.jsx";
import NotFoundPage from "../Component/NotFoundPage/NotFoundPage.jsx";

// Admin Pages Import
// import AdminDashboardPage from "../Pages/Admin/AdminDashboardPage";
import AdminDashboardPage from "../Pages/Admin/AdminDashboardPage/AdminDashboardPage.jsx";
import AddProductPage from "../Pages/Admin/AddProductPage/AddProductPage.jsx";
import AddCategoryPage from "../Pages/Admin/AddCategoryPage/AddCategoryPage.jsx";
import CartProduct from "../Component/CartProduct/CartProduct.jsx";

// Customer StoreFront Branch (MainLayout Wrapper)
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, //URL '/' hone par default child render hoga
        element: <HomePage />,
      },
      {
        path: "/product/:id", //URL -> Dynamic ID route
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartProduct />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, //URL: "/admin" hone pardashboard khulega
        element: <AdminDashboardPage />,
      },
      {
        path: "add-product", //URL: "/admin/add-product"
        element: <AddProductPage />,
      },
      {
        path: "add-category", //URL: "/admin/add-category"
        element: <AddCategoryPage />,
      },
    ],
  },
]);

export default router;
