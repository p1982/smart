import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/users";
import { fetchUsersAsync } from "./fetchUsersSliceReducer";

export interface IFilter {
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: Record<number, User>;
  loading: boolean;
  error: string | null;
  filters: IFilter;
}

const initialState: UsersState = {
  users: {},
  loading: false,
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      state.loading = false;
      const users = action.payload.reduce(
        (acc: Record<number, User>, cur: User) => {
          acc[cur.id] = cur;
          return acc;
        },
        {}
      );
      state.users = users;
    });
    builder.addCase(fetchUsersAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Failed to fetch posts";
    });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
