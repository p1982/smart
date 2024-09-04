import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { RootState } from "../../store/store";
import { Post } from "../../types/posts";
import { useSelector } from "react-redux";

interface IPostCard {
  id: number;
}
const PostCard: React.FC<IPostCard> = ({ id }) => {
  const { title, body } = useSelector<RootState, Post>(
    (state) => state.posts.posts[id]
  );
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{body}</TableCell>
    </TableRow>
  );
};

export default PostCard;
