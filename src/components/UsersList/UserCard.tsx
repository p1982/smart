import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { User } from "../../types/users";

interface IUserCard {
  id: number;
}

const UserCard: React.FC<IUserCard> = ({ id }) => {
  const { name, username, phone, email } = useSelector<RootState, User>(
    (state) => state.users.users[id]
  );
  return (
    <tr>
      <td className="py-2 px-4 border-b">{id}</td>
      <td className="py-2 px-4 border-b">{name}</td>
      <td className="py-2 px-4 border-b">{username}</td>
      <td className="py-2 px-4 border-b">{phone}</td>
      <td className="py-2 px-4 border-b">{email}</td>
      <td className="py-2 px-4 border-b">
        <Link to={`/users/${id}`}>Show More</Link>
      </td>
    </tr>
  );
};

export default UserCard;
