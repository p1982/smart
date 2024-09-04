import 'antd/dist/reset.css';
import React from 'react';
import { Table, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { User } from '../../types/users';
import { IFilter, setFilter } from '../../store/slices/usersSlice';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector<RootState, User[]>(state => Object.values(state.users.users));
  const filters = useSelector<RootState, IFilter>(state => state.users.filters);
  const loading = useSelector<RootState, boolean>(state => state.users.loading);
  
  type FilterFields = keyof typeof filters;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ field: e.target.name as FilterFields, value: e.target.value }));
  };

  const filteredUsers = users.filter((user) => {
    if (!user) return false;
    return (Object.keys(filters) as Array<keyof typeof filters>).every((key) =>
      user[key as keyof User]?.toString().toLowerCase().includes(filters[key].toLowerCase())
    );
  });

  const columns = [
    {
      title: (
        <>
          ID
        </>
      ),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <>
          Name
          <Input
            name="name"
            placeholder="Search Name"
            value={filters?.name}
            onChange={handleFilterChange}
            style={{ marginTop: 8 }}
          />
        </>
      ),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: (
        <>
          Username
          <Input
            name="username"
            placeholder="Search Username"
            value={filters?.username}
            onChange={handleFilterChange}
            style={{ marginTop: 8 }}
          />
        </>
      ),
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: (
        <>
          Phone
          <Input
            name="phone"
            placeholder="Search Phone"
            value={filters?.phone}
            onChange={handleFilterChange}
            style={{ marginTop: 8 }}
          />
        </>
      ),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: (
        <>
          Email
          <Input
            name="email"
            placeholder="Search Email"
            value={filters?.email}
            onChange={handleFilterChange}
            style={{ marginTop: 8 }}
          />
        </>
      ),
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <>
      {loading ? (
        <div role="status" className="relative">
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          pagination={false}
        />
      )}
    </>
  );
};

export default UsersList;
