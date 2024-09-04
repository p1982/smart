import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/variables';
import { User } from '../../types/users';

export const fetchUsersAsync = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      console.log(response.data, 5655)
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data?.message || 'Failed to fetch users');
    }
  }
);