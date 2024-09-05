import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_URL } from "../../utils/variables";
import { User } from "../../types/users";

export const fetchUsersAsync = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("users/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue(error.response.data?.message || "Failed to fetch posts");
    }
    return rejectWithValue("An unexpected error occurred");
  }
});

export const fetchUsersByIdAsync = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>("users/fetchByIdUsers", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue(error.response.data?.message || "Failed to fetch posts");
    }
    return rejectWithValue("An unexpected error occurred");
  }
});
