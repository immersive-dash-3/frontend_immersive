import React, { FC } from "react";

interface userprops {
  id: number;
  nama: string;
  email: string;
  team: string;
  role: string;
  status: string;
  index: string;
  onClick: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
}
const Tableuser: FC<userprops> = ({
  id,
  nama,
  email,
  team,
  role,
  status,
  onClick,
  onDelete,
  index,
}) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{nama}</td>
      <td>{email}</td>
      <td>{team}</td>
      <td>{role}</td>
      <td>{status}</td>
      <td className="flex gap-x-3 item-center">
        <span onClick={onClick} className="cursor-pointer">
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
        <span onClick={onDelete} className="cursor-pointer">
          <i className="ts fa-regular fa-trash-can"></i>
        </span>
      </td>
    </tr>
  );
};

export default Tableuser;
