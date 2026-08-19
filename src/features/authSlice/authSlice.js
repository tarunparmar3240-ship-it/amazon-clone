import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api"; // Axios Interceptor Instance

const BASE_URL = "https://api.freeapi.app/api/v1/users";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const payload = {
        role: userData.role || "USER",
        ...userData,
      };

      const response = await api.post(`${BASE_URL}/register`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed",
      );
    }
  },
);

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${BASE_URL}/current-user`);
      localStorage.setItem("username", response.data.data.username);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(`${BASE_URL}/login`, credentials);
      const data = response.data.data;

      // Token ko LocalStorage me save karna
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("username", response.data.data.user.username);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);

const initialState = {
  user: null,
  token: localStorage.getItem("accessToken") || null,
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = null;
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("username");
      state.user = null;
      state.token = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // --- REGISTER CASES ---
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      // --- CURRENT USERNAME ---
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.user = action.payload;
        }
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isError = action.payload;
      })

      // --- LOGIN CASES ---
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
