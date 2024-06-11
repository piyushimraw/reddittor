"use client";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { MessageCircleIcon, SearchIcon, ThumbsUpIcon, UserIcon } from "./icons";
import { BarChart, LineChart } from "./ui/charts";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import { RedditResponse } from "@/lib/types";

async function getData(query: string): Promise<RedditResponse | null> {
  if (!query) {
    return null;
  }
  const res = await fetch(`https://www.reddit.com/search.json?q=${query}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function SearchReddit() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<RedditResponse | null>(null);

  const onHandleEnter = (e: any) => {
    if (e.key === "Enter") {
      getData(query).then((data) => {
        if (!data) {
          return;
        }
        setResponse(data);
      });
    }
  };

  const posts = response?.data.children.map((child) => child.data) ?? [];

  const averageUpvotes =
    posts.reduce((acc, post) => acc + post.ups, 0) / posts.length;

  const averageComments = posts.reduce(
    (acc, post) => acc + post.num_comments,
    0
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md p-4 flex items-center">
        <div className="flex-1 relative">
          <Input
            className="pl-10 pr-4 py-2 rounded-md w-full"
            placeholder="Search subreddits..."
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onHandleEnter(e);
              }
            }}
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Reddit Dashboard</h1>
        <Posts posts={posts} />
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Total Posts</h3>
              <p className="text-4xl font-bold">{posts.length}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Average Upvotes</h3>
              <p className="text-4xl font-bold">{Math.floor(averageUpvotes)}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Average Comments</h3>
              <p className="text-4xl font-bold">{averageComments}</p>
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
