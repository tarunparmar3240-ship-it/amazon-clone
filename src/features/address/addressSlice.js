import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.freeapi.app/api/v1";

const initialState = {
  address: [],
  isLoading: false,
  isError: null,
};

export const getAddress = createAsyncThunk(
  "address/addressSlice",
  async (pincode, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(`${BASE_URL}/ecommerce/addresses`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
      });
      const data = response.data.data.addresses;
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch Addresses",
      );
    }
  },
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
        state.isError = null; 
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.address = action.payload; 
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false; 
        state.isError = action.payload;
      });
  },
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;
