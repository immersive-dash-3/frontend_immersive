import React, { FC } from "react";
import { useState } from "react";

interface classprops {
  id: number;
  nama: string;
  index: number;
  count: number;
  onClick: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
}

const Tableclass: FC<classprops> = ({
  id,
  nama,
  index,
  onDelete,
  onClick,
  count,
}) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{nama}</td>
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

export default Tableclass;
