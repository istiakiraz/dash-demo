import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  Scatter,
  Legend,
} from "recharts";

const OverView = () => {
  const siteStatistics = {
    totalVisitors: 3421,
    totalOrdersBooked: 876,
    pendingOrders: 123,
    availableProducts: 1578,
  };

  const dailyBreakdown = [
    { date: "2025-04-10", visitors: 210, orders: 45, pendingOrders: 8,  availableProducts: 1590, rating: 4.1 },
    { date: "2025-04-11", visitors: 225, orders: 52, pendingOrders: 9,  availableProducts: 1582, rating: 4.3 },
    { date: "2025-04-12", visitors: 189, orders: 48, pendingOrders: 10, availableProducts: 1575, rating: 4.0 },
    { date: "2025-04-13", visitors: 204, orders: 50, pendingOrders: 7,  availableProducts: 1570, rating: 4.2 },
    { date: "2025-04-14", visitors: 230, orders: 55, pendingOrders: 6,  availableProducts: 1562, rating: 4.5 },
    { date: "2025-04-15", visitors: 195, orders: 43, pendingOrders: 10, availableProducts: 1554, rating: 3.9 },
    { date: "2025-04-16", visitors: 241, orders: 59, pendingOrders: 7,  availableProducts: 1548, rating: 4.0 },
    { date: "2025-04-17", visitors: 267, orders: 62, pendingOrders: 6,  availableProducts: 1541, rating: 4.4 },
    { date: "2025-04-18", visitors: 221, orders: 51, pendingOrders: 9,  availableProducts: 1533, rating: 4.1 },
    { date: "2025-04-19", visitors: 198, orders: 47, pendingOrders: 11, availableProducts: 1525, rating: 3.8 },
    { date: "2025-04-20", visitors: 206, orders: 50, pendingOrders: 10, availableProducts: 1518, rating: 4.2 },
    { date: "2025-04-21", visitors: 235, orders: 56, pendingOrders: 7,  availableProducts: 1510, rating: 4.3 },
    { date: "2025-04-22", visitors: 248, orders: 61, pendingOrders: 5,  availableProducts: 1503, rating: 4.4 },
    { date: "2025-04-23", visitors: 263, orders: 64, pendingOrders: 6,  availableProducts: 1496, rating: 4.5 },
    { date: "2025-04-24", visitors: 289, orders: 73, pendingOrders: 2,  availableProducts: 1488, rating: 4.6 }
  ];

  return (
    <>
      <div className="p-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow">
            <h2 className="text-2xl">{siteStatistics.totalVisitors}</h2>
            <p className="text-sm">Total Visitors</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-xl shadow">
            <h2 className="text-2xl">{siteStatistics.totalOrdersBooked}</h2>
            <p className="text-sm">Orders Booked</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-xl shadow">
            <h2 className="text-2xl">{siteStatistics.pendingOrders}</h2>
            <p className="text-sm">Pending Orders</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-lime-400 to-green-400 text-white rounded-xl shadow">
            <h2 className="text-2xl">{siteStatistics.availableProducts}</h2>
            <p className="text-sm">Available Products</p>
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Reports */}
        <div className="bg-gradient-to-r from-indigo-200 to-purple-200 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4">Recent Reports</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dailyBreakdown}>
              <defs>
                <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6ee7b7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#4f46e5"
                fill="url(#colorProducts)"
              />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#10b981"
                fill="url(#colorServices)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Available Products*/}
        <div className="bg-gradient-to-r from-green-200 to-blue-200 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4">Available Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={dailyBreakdown}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="availableProducts"
                fill="#86efac"
                stroke="#22c55e"
              />
              <Bar dataKey="availableProducts" barSize={20} fill="#3b82f6" />
              <Line
                type="monotone"
                dataKey="availableProducts"
                stroke="#ef4444"
                strokeWidth={2}
              />
              <Scatter dataKey="availableProducts" fill="#8b5cf6" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Ratings  */}
        <div className="bg-gradient-to-r from-[#FFB8E0] to-[#FFEDFA] p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4">Ratings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyBreakdown}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#BE5985"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pending Orders  */}
        <div className="bg-gradient-to-r from-[#FED2E2] to-[#C68EFD] p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4">Pending Orders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyBreakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pendingOrders" fill="#8F87F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default OverView;
