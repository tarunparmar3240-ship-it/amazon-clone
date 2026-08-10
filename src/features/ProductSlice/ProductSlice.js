import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "product/getproduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/ecommerce/products",
      );
      return response.data.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "https://api.freeapi.app/api/v1/ecommerce/products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to post product",
      );
    }
  },
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET PRODUCTS CASES
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Line 101 par response.data.data.products return hua tha
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // POST PRODUCT CASES
      .addCase(postProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // Array me naya product add kar diya
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
