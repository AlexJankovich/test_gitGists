import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GistData } from 'src/types/GistData';

export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  isError?: string;
  currentPage: number;
  inPage: number;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
  currentPage: 1,
  inPage: 10,
};

const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    setGists(state, action: PayloadAction<GistData[]>) {
      state.isLoading = false;
      state.gists = action.payload;
    },

    setGistsError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setGists, setGistsError, setCurrentPage } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;
