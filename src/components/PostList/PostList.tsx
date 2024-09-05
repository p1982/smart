import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Post } from "../../types/posts";
import NoItems from "../NoItems";
import PostCard from "./PostCard";

const PostList: React.FC = () => {
  const posts = useSelector<RootState, Post[]>((state) =>
    Object.values(state.posts.posts)
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.posts.loading
  );

  const headers = ["ID", "Title", "Text"];

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-2 px-4 border-b">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts.length &&
              posts.map((post) => (
                <PostCard key={post.id} id={post.id} />
              ))}
            {!!posts.length && <NoItems text="No post found" col={3} />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
