import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [{ name: "surya" },{ name: "suryaa" }],
  reducers: {},
});

export default userSlice.reducer;
