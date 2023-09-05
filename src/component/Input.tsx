import React, { FC, ReactNode } from "react";

interface InputProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  icon?:ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon
}) => {
  return (
    <div className="flex flex-col mb-3 w-full">
      <label className=" font-[16px] mb-1">{label}</label>
      <div className="flex flex-row items-center border-solid border-2 border-border-color rounded-lg focus:outline-none w-full px-4 bg-transparent">
        {icon}
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          className="focus:outline-none w-full px-4 py-3 bg-transparent"
        />
      </div>
    </div>
  );
};

export default Input;
