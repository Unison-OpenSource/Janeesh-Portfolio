import React from "react";

const statsData = [
  { title: "Total Users", value: "1,234", icon: "📈" },
  { title: "Sales This Month", value: "$12,345", icon: "💵" },
  { title: "New Signups", value: "567", icon: "🆕" },
  { title: "Active Sessions", value: "89", icon: "👥" },
];

const Stat = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-900">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center text-white"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stat;
