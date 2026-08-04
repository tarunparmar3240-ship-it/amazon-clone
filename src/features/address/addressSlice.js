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
        state.isError = null; //Purane error ko Clear kar do
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.address = action.payload; //API se aaya huaa data Save huaa
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload; //Error message Save huaa hai
      });
  },
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// //LocalStorage se inital values safely load karne ke heldpers
// const getSavedLocation = () => {
//     const location = localStorage.getItem("selectedLocation");
//     return location ? JSON.parse(location) : null;
// };

// const getSavedAddress = () => {
//     const addresses = localStorage.getItem("userAddresses");
//     return addresses ? JSON.parse(address) : [];
// }

// //initail State Defination
// const initialState = {
//     //Top Navbar/Model waali location ({pincode, city, state})
//     SeletedLocation: getSavedLocation(),
//     //Full Address ki list (Form se add hone wale addresses)
//     addresses: getSavedAddress(),x
// }

// const addressSlice = createSlice({
//     name: 'address',
//     initialState,
//     reducers: {
//         // Direact pincode, city, state laga aur selectedaddress ko update karnge
//         setLocation: (state, action) => {
//             // action.pyload means {pinCode: "400001", city: ahmdabad, state: gujarat};
//             state.SeletedLocation = action.payload;
//             localStorage.setItem("selectedLocation", JSON.stringify(action.payload));
//         },
//         // Naya full address array me push karge
//         addAddress: () => {},
//         // Kisis save address ko deafult set karnge
//         setdefaultAddress: () => {},
//         //Array se address remove karnga
//         deleteAddress: () => {},
//     }
// })

// export const {setLocation, addAddress, setdefaultAddress, deleteAddress} = addressSlice.actions;
// export default addressSlice.reducers;
