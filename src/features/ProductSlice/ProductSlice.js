import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import api from "../../api/api";

export const getProduct = createAsyncThunk(
  "product/getproduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(
        "https://api.freeapi.app/api/v1/ecommerce/products",
      );
      console.log("Me Hu Get Data", response);
      return response.data.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/ecommerce/products/${id}`);
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Product fetch nahi ho paya",
      );
    }
  },
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.post(
        "https://api.freeapi.app/api/v1/ecommerce/products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Me Post Huu re", response);
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
  singleProduct: null,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.singleProduct = null;
      })

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
