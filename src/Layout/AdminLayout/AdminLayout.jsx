import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => { 
  return (
    <div className="flex min-h-screen">
      {/* Persistent Admin Sidebar Navigation */}
      <aside className="w-60 bg-[#232f3e] text-white p-5">
        <h3 className="text-lg font-bold">Admin Portal</h3>
        <hr className="my-4 border-gray-600" />
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-amber-400">Dashboard</li>
          <li className="cursor-pointer hover:text-amber-400">Add Product</li>
          <li className="cursor-pointer hover:text-amber-400">Add Category</li>
        </ul>
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