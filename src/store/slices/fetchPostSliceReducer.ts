import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_URL } from "../../utils/variables";
import { Post } from "../../types/posts";

export const fetchPostAsync = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue(error.response.data?.message || "Failed to fetch posts");
    }
    return rejectWithValue("An unexpected error occurred");
  }
});
