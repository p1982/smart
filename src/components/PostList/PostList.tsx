import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Post } from '../../types/posts';
import PostCard from './PostCard';

const PostList:React.FC = () => {
  const posts = useSelector<RootState, Post[]>(state => Object.values(state.posts.posts));
  console.log(posts)
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row:Post) => (
           <PostCard id={row.id} key={row.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PostList