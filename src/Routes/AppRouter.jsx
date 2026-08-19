import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout/MainLayout.jsx";
import AdminLayout from "../Layout/AdminLayout/AdminLayout.jsx";
import HomePage from "../Pages/Customer/HomePage/HomePage.jsx";
import ProductDetailPage from "../Pages/Customer/ProductDetailPage/ProductDetailPage.jsx";
import NotFoundPage from "../Component/NotFoundPage/NotFoundPage.jsx";
import AddProductPage from "../Pages/Admin/AddProductPage/AddProductPage.jsx";
import AddCategoryPage from "../Pages/Admin/AddCategoryPage/AddCategoryPage.jsx";
import CartProduct from "../Component/CartProduct/CartProduct.jsx";

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
        path: "/product/:id", //Dynamic ID route
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
        index: true,
        element: <AddCategoryPage />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
    ],
  },
]);

export default router;
