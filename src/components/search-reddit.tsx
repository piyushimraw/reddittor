"use client";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { MessageCircleIcon, SearchIcon, ThumbsUpIcon, UserIcon } from "./icons";
import { BarChart, LineChart } from "./ui/charts";
import Posts from "./Posts";

export function SearchReddit() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md p-4 flex items-center">
        <div className="flex-1 relative">
          <Input
            className="pl-10 pr-4 py-2 rounded-md w-full"
            placeholder="Search subreddits..."
            type="search"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Reddit Dashboard</h1>
        <Posts />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Post Engagement Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Most Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Total Posts</h3>
              <p className="text-4xl font-bold">12,345</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Average Upvotes</h3>
              <p className="text-4xl font-bold">1,234</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Average Comments</h3>
              <p className="text-4xl font-bold">234</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Most Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                React
              </div>
              <div className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                Data Visualization
              </div>
              <div className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                Low-code
              </div>
              <div className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                Programming
              </div>
              <div className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
