import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types/users";
import { IFilter, setFilter } from "../../store/slices/usersSlice";
import UserCard from "./UserCard";
import NoItems from "../NoItems";
import Input from "../Input/Input";

const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector<RootState, User[]>((state) =>
    Object.values(state.users.users)
  );
  const filters = useSelector<RootState, IFilter>(
    (state) => state.users.filters
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.users.loading
  );

  type FilterFields = keyof typeof filters;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setFilter({ field: e.target.name as FilterFields, value: e.target.value })
    );
  };

  const filteredUsers = users.filter((user) => {
    if (!user) return false;
    return (Object.keys(filters) as Array<keyof typeof filters>).every((key) =>
      user[key as keyof User]
        ?.toString()
        .toLowerCase()
        .includes(filters[key].toLowerCase())
    );
  });

  const columns = [
    { key: "name", label: "Name", placeholder: "Search Name" },
    { key: "username", label: "Username", placeholder: "Search Username" },
    { key: "phone", label: "Phone", placeholder: "Search Phone" },
    { key: "email", label: "Email", placeholder: "Search Email" },
  ];

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
              <th className="py-2 px-4 border-b">ID</th>
              {columns.map((column) => (
                <th key={column.key} className="py-2 px-4 border-b">
                  <div className="flex flex-col">
                    <span>{column.label}</span>
                    <Input
                      name={column.key}
                      placeholder={column.placeholder}
                      value={filters[column.key as FilterFields]}
                      onChange={handleFilterChange}
                    />
                  </div>
                </th>
              ))}
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length &&
              filteredUsers.map((user) => (
                <UserCard id={user.id} key={user.id} />
              ))}
            {!filteredUsers.length && <NoItems text="No user found" col={5} />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
