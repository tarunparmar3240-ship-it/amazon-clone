import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "/category/getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/ecommerce/categories",
      );
      // return response.data.data.categories;
      // console.log("Me Get Huu", response);
      return response.data.data.categories;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const postCategory = createAsyncThunk(
  "/category/postCategory",
  async (categoryName, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        return rejectWithValue("Token nahi mila! Pehle Admin login karein.");
      }

      const response = await axios.post(
        "https://api.freeapi.app/api/v1/ecommerce/categories",
        { name: categoryName },
        {
          headers: {
            Authorization: `Bearer ${token}`, //3rd Argument: Config Options (Headers)
          },
        },
      );
      // console.log("Me Post Huu", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Category create nahi ho payi",
      );
    }
  },
);

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(postCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(postCategory.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;

