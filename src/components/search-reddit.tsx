"use client";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  MessageCircleIcon,
  SearchIcon,
  ThumbsUpIcon,
  UserIcon,
} from "./ui/icons";
import { BarChart, LineChart } from "./ui/charts";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import { RedditResponse } from "@/lib/types";

async function getData(query: string): Promise<RedditResponse | null> {
  if (!query) {
    return null;
  }
  const res = await fetch(`https://www.reddit.com/search.json?q=${query}`);

  return res.json();
}

export function SearchReddit() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<RedditResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const onHandleEnter = (e: any) => {
    if (e.key === "Enter") {
      setLoading(true);
      getData(query)
        .then((data) => {
          if (!data) {
            return;
          }
          setResponse(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const posts = response?.data.children.map((child) => child.data) ?? [];

  if (posts?.length === 0) {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Search for Subreddits</h1>
            <p className="text-gray-600 mb-6">
              Enter a keyword to search for relevant subreddits.
            </p>
            <div className="flex justify-center">
              <Input
                type="search"
                placeholder="Enter keyword and press enter to search..."
                className="px-4 py-2 rounded-md w-full max-w-md"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onHandleEnter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const averageUpvotes =
    posts.reduce((acc, post) => acc + post.ups, 0) / posts.length;

  const averageCommentsPerPost =
    posts.reduce((acc, post) => acc + post.num_comments, 0) / posts.length;

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md p-4 flex items-center">
        <div className="flex-1 relative">
          <Input
            className="pl-10 pr-4 py-2 rounded-md w-full"
            placeholder="Enter keyword and press enter to search..."
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onHandleEnter}
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
              <p className="text-4xl font-bold">
                {Math.floor(averageCommentsPerPost)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
