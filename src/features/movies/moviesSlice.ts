import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// action
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (data, thunkApi) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_KEY}`
      );

      return await response.json();
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

interface MoviesState {
  loading: boolean;
  error: string | null;
  movies: null | { results: any[] };
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  movies: null,
};

//Slice
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending.type]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled.type]: (
      state,
      action: PayloadAction<{ results: any[] }>
    ) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default moviesSlice.reducer;
