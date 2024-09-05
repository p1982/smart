import React from 'react';

interface IInput {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-2 p-1 border border-gray-300 rounded"
    />
  );
};

export default Input;