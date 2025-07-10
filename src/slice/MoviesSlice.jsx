import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.results;
  }
);

export const fetchRecomm = createAsyncThunk(
  "movies/fetchRecomm",
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.results;
  }
);

export const fetchResults = createAsyncThunk(
  "movies/fetchResults",
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecomm.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecomm.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchResults.pending, (state) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchResults.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
