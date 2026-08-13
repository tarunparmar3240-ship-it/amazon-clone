import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from '../../Component/Footer/Footer';

const MainLayout = () => {
  // use
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
