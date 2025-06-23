import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCredits = createAsyncThunk(
  "movies/credits",
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.cast;
  }
);

const creditsSlice = createSlice({
  name: "credits",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCredits.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default creditsSlice.reducer;
