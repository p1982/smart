import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { RootState } from "../../store/store";

import { useSelector } from "react-redux";
import { User } from "../../types/users";
import { Link } from "react-router-dom";

interface IUserCard {
  id: number;
}
const UserCard: React.FC<IUserCard> = ({ id }) => {
  const { name, username, phone, email } = useSelector<RootState, User>(
    (state) => state.users.users[id]
  );
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell><Link to={`/users/${id}`}>Show details</Link></TableCell>
    </TableRow>
  );
};

export default UserCard;
