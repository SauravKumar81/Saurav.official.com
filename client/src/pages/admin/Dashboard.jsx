import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Saurav!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium mb-1">Total Projects</h3>
            <p className="text-3xl font-bold text-dark">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium mb-1">Total Skills</h3>
            <p className="text-3xl font-bold text-dark">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium mb-1">New Messages</h3>
            <p className="text-3xl font-bold text-dark">5</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
