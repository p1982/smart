import React from 'react'
import { Table, Spin, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Post } from '../../types/posts';

const { Text } = Typography;

const PostList:React.FC = () => {
  const posts = useSelector<RootState, Post[]>(state => Object.values(state.posts.posts));
  const loading = useSelector<RootState, boolean>(state => state.posts.loading);
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
      render: (text: string) => <Text>{text}</Text>,
    },
  ];
  return (
    <Spin spinning={loading}>
      <Table
        dataSource={posts.map(post => ({
          key: post.id,
          id: post.id,
          title: post.title,
          text: post.body,
        }))}
        columns={columns}
        pagination={false}
      />
    </Spin>
  )
}

export default PostList