import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/variables';
import { Post } from '../../types/posts';

export const fetchPostAsync = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      console.log(response.data)
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data?.message || 'Failed to fetch posts');
    }
  }
);

// export const fetchCityByIdAsync = createAsyncThunk<City, FetchCityByIdPayload, { rejectValue: string }>(
//   "city/fetchCityById",
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/cities/${id}`);
//       return response.data;
//     } catch (e: any) {
//       return rejectWithValue(e.response?.data?.message || "Failed to fetch city by ID");
//     }
//   }
// );

// export const createCityAsync = createAsyncThunk<City, CreateCityPayload, { rejectValue: string; state: State }>(
//   "city/createCity",
//   async (formData, { rejectWithValue, getState }) => {
//     try {
//       const state = getState();
//       const token = state.session.token;
//       const role = state.session.user.role;

//       const response = await axios.post(`${API_URL}/cities`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'X-User-Role': role,
//         },
//       });

//       return response.data;
//     } catch (e: any) {
//       return rejectWithValue(e.response?.data?.message || "Failed to create city");
//     }
//   }
// );

// export const updatedCityAsync = createAsyncThunk<City, UpdateCityPayload, { rejectValue: string; state: State }>(
//   "city/updateCity",
//   async ({ formData, id }, { rejectWithValue, getState }) => {
//     try {
//       const state = getState();
//       const token = state.session.token;
//       const role = state.session.user.role;

//       const response = await axios.put(`${API_URL}/cities/${id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'X-User-Role': role,
//         },
//       });

//       return response.data;
//     } catch (e: any) {
//       return rejectWithValue(e.response?.data?.message || "Failed to update city");
//     }
//   }
// );

// export const deleteCityAsync = createAsyncThunk<number, DeleteCityPayload, { rejectValue: string; state: State }>(
//   "city/deleteCity",
//   async ({ id }, { rejectWithValue, getState }) => {
//     try {
//       const state = getState();
//       const token = state.session.token;
//       const role = state.session.user.role;

//       await axios.delete(`${API_URL}/cities/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'X-User-Role': role,
//         },
//       });

//       return id;
//     } catch (e: any) {
//       return rejectWithValue(e.response?.data?.message || "Failed to delete city");
//     }
//   }
// );
