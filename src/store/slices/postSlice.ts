import { createSlice } from "@reduxjs/toolkit";
import { fetchPostAsync } from "./fetchPostSliceReducer";
import { Post } from "../../types/posts";

interface PostsState {
  posts: Record<number, Post>;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: {},
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPostAsync.fulfilled, (state, action) => {
      state.loading = false;
      const posts = action.payload.reduce(
        (acc: Record<number, Post>, cur: Post) => {
          acc[cur.id] = cur;
          return acc;
        },
        {}
      );
      state.posts = posts;
    });
    builder.addCase(fetchPostAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) ?? "Failed to fetch posts";
    });
  },
});

export default postsSlice.reducer;
