import { UserIcon, ThumbsUpIcon, MessageCircleIcon } from "lucide-react";
import React from "react";

function Posts() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Top Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            How to build a React component library
          </h3>
          <p className="text-gray-600 mb-2">
            A step-by-step guide to creating a reusable component library with
            React.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>u/johndoe</span>
            <ThumbsUpIcon className="w-4 h-4 ml-4 mr-2" />
            <span>1.2K</span>
            <MessageCircleIcon className="w-4 h-4 ml-4 mr-2" />
            <span>234</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            The future of data visualization
          </h3>
          <p className="text-gray-600 mb-2">
            Exploring the latest trends and technologies in data visualization.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>u/janedoe</span>
            <ThumbsUpIcon className="w-4 h-4 ml-4 mr-2" />
            <span>2.5K</span>
            <MessageCircleIcon className="w-4 h-4 ml-4 mr-2" />
            <span>412</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">
            The rise of low-code development
          </h3>
          <p className="text-gray-600 mb-2">
            Exploring the benefits and challenges of low-code platforms.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>u/bobsmith</span>
            <ThumbsUpIcon className="w-4 h-4 ml-4 mr-2" />
            <span>800</span>
            <MessageCircleIcon className="w-4 h-4 ml-4 mr-2" />
            <span>156</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
