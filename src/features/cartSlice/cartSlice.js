import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InboxIcon } from "lucide-react";
import api from "../../api/api";
const BASE_URL = "https://api.freeapi.app/api/v1/ecommerce/cart";

export const getUserCart = createAsyncThunk(
  "getUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${BASE_URL}`);
      console.log("API Data", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const addItemToCart = createAsyncThunk(
  "addItemCart",
  async ({ productId, quantity = 1 }, { rejectWithValue }) => {
    try {
      // Path mein productId aur body mein quanity bheja hai.
      const response = await api.post(`${BASE_URL}/item/${productId}`, {
        // quantity,
        quantity: Number(quantity)
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Item add nahi ho saka",
      );
    }
  },
);

export const removeItemCart = createAsyncThunk(
  "removeItemCart",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${BASE_URL}/item/${productId}`); 
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Item remove nahi ho saka",
      );
    }
  },
);

export const clearCart = createAsyncThunk(
  "clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${BASE_URL}/clear`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Cart clear nahi ho saka",
      );
    }
  },
);

const initialState = {
  items: [],
  cartTotal: 0,
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.items;
        state.cartTotal = action.payload.cartTotal;
        state.error = null;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.items;
        state.cartTotal = action.payload?.cartTotal;
        state.error = null;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeItemCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.items;
        state.cartTotal = action.payload?.cartTotal;
        state.error = null;
      })
      .addCase(removeItemCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        ((state.items = []), (state.cartTotal = 0));
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
