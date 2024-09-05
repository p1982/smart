import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Post } from "../../types/posts";

interface IPostCard {
  id: number;
}

const PostCard: React.FC<IPostCard> = ({ id }) => {
  const { title, body } = useSelector<RootState, Post>(
    (state) => state.posts.posts[id]
  );
  return (
    <tr>
      <td className="py-2 px-4 border-b">{id}</td>
      <td className="py-2 px-4 border-b">{title}</td>
      <td className="py-2 px-4 border-b">{body}</td>
    </tr>
  );
};

export default PostCard;
