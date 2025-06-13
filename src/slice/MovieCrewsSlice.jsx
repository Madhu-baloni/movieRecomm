import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrews = createAsyncThunk("movies/crews", async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data.crew;
});

const crewSlice = createSlice({
  name: "crews",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrews.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default crewSlice.reducer;
