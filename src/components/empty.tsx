import React from "react";
import { Input } from "./ui/input";

export function Empty() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Search for Subreddits</h1>
        <p className="text-gray-600 mb-6">
          Enter a keyword to search for relevant subreddits.
        </p>
        <div className="flex justify-center">
          <Input
            type="search"
            placeholder="Enter keyword..."
            className="px-4 py-2 rounded-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
