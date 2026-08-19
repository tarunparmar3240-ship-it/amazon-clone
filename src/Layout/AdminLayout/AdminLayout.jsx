import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="lg:flex flex-row min-h-screen">
      {/* Persistent Admin Sidebar Navigation */}
      <aside className="lg:w-60 w-full bg-[#232f3e] text-white p-5">
        <h3 className="text-lg font-bold">Admin Portal</h3>
        <hr className="my-4 border-gray-600" />
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-amber-400">
            <Link to="/admin">Add Category </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400">
            <Link to="/admin/add-product">Add Product</Link>
          </li>
        </ul>

        <Link to="/">
          <button className="text-lg font-bold my-10">Back Home</button>
        </Link>
      </aside>

      {/* Dynamic Admin Content Slot */}
      <main className="flex-1 p-5 bg-gray-50">
        <header className="mb-5 border-b border-gray-300 pb-2.5">
          <h2 className="text-xl font-bold">Admin Control</h2>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
