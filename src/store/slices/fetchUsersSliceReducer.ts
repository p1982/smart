import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/variables';
import { User } from '../../types/users';

export const fetchUsersAsync = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data?.message || 'Failed to fetch users');
    }
  }
);

export const fetchUsersByIdAsync = createAsyncThunk<User, string, { rejectValue: string }>(
  'users/fetchByIdUsers',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data?.message || 'Failed to fetch users');
    }
  }
);