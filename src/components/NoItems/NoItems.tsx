import React from "react";

interface IUserCard {
  text: string;
  col: number;
}
const NoItems: React.FC<IUserCard> = ({ text, col }) => {
  return (
    <tr>
      <td colSpan={col} className="py-4 text-center text-gray-500">
        {text}
      </td>
    </tr>
  );
};

export default NoItems;
