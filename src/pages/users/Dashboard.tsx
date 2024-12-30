import React from "react";
import { Users, FileText, CreditCard, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { title: "Documents", value: "856", icon: FileText, change: "+8%" },
    { title: "Revenue", value: "$12,345", icon: CreditCard, change: "+23%" },
    { title: "Downloads", value: "3,456", icon: TrendingUp, change: "+15%" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="mt-4">
              <span className="text-green-500 text-sm">
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
