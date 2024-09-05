import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IFilter } from '../../store/slices/usersSlice';

type FilterFields = keyof IFilter;

interface IInput {
  id: FilterFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({ id, onChange }) => {
  const filters = useSelector<RootState, IFilter>(
    (state) => state.users.filters
  );

  const config: Record<FilterFields, { placeholder: string; className: string, type?: string }> = {
    name: {
      placeholder: "Search Name",
      className: "mt-2 p-1 border border-gray-300 rounded"
    },
    username: {
      placeholder: "Search Username",
      className: "mt-2 p-1 border border-gray-300 rounded"
    },
    phone: {
      placeholder: "Search Phone",
      className: "mt-2 p-1 border border-gray-300 rounded"
    },
    email: {
      placeholder: "Search Email",
      className: "mt-2 p-1 border border-gray-300 rounded"
    }
  };
  
  const {placeholder, type="text", className} = config[id]
  return (
    <input
      type={type}
      name={id}
      placeholder={placeholder}
      value={filters[id as FilterFields]}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;