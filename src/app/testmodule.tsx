"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, DollarSign, ArrowUpRight, ArrowDownRight, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'Created new project', time: '2 hours ago' },
  { id: 2, user: 'Jane Smith', action: 'Updated settings', time: '4 hours ago' },
  { id: 3, user: 'Mike Johnson', action: 'Deleted old files', time: '6 hours ago' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back, Admin</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Users
              </CardTitle>
              <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2,834</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12% from last month
              </div>
            </CardContent>
          </Card>

          {/* Active Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Users
              </CardTitle>
              <Activity className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1,463</div>
              <div className="flex items-center text-sm text-red-600">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                4% from last month
              </div>
            </CardContent>
          </Card>

          {/* Revenue */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$32,846</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8% from last month
              </div>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Projects
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                2 new this month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Activity */}
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
              <CardDescription>User activity for the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions taken by users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start justify-between border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {activity.user}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.action}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;