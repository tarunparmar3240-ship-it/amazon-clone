import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from '../../Component/Footer/Footer';
import { getUserCart } from "../../features/cartSlice/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
