import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  loading: false,
  error: null,
  user: [],
};

export const fetchRandomUser = createAsyncThunk(
  "surya/fetchRandomUser",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.data;
      console.log("We are in middleWare");
      return data;
    } catch (error) {
      throw Error(error);
    }
  }
);

const DataSlice = createSlice({
  name: "surya",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: {
    [fetchRandomUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRandomUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [fetchRandomUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { increment, decrement } = DataSlice.actions;

export default DataSlice.reducer;

// builder
//   .addCase(fetchRandomUser.pending, (state) => {
//     state.loading = true;
//     state.error = null;
//   })
//   .addCase(fetchRandomUser.fulfilled, (state, action) => {
//     state.user = action.payload;
//     state.loading = false;
//   })
//   .addCase(fetchRandomUser.rejected, (state, action) => {
//     state.error = action.error.message;
//     state.loading = false;
//   });
// https://github.com/TamilCodingWizard/react-redux/blob/update/src/slices/tasksSlice.js
