import { ChildData } from "@/lib/types";
import { ThumbsUpIcon, UserIcon } from "lucide-react";
type Props = {
  posts: ChildData[];
};
function Posts(props: Props) {
  const topPosts = props.posts.sort((a, b) => b.ups - a.ups).slice(0, 3);
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Top Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topPosts.map((post) => (
          <div className="bg-gray-100 rounded-lg p-4" key={post.id}>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.selftext_html}</p>
            <div className="flex items-center text-gray-500 text-sm">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>u/{post.author}</span>
              <ThumbsUpIcon className="w-4 h-4 ml-4 mr-2" />
              <span>{post.ups}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
