import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrgsData } from '../../../types/OrgData';

export interface OrgsState {
  isLoading: boolean;
  orgs: OrgsData[];
  isError?: string;
  currentPage: number;
  inPage: number;
}

const initialState: OrgsState = {
  isLoading: true,
  orgs: [],
  currentPage: 1,
  inPage: 10,
};

const orgsSlice = createSlice({
  name: 'orgs',
  initialState,
  reducers: {
    setOrgs(state, action: PayloadAction<OrgsData[]>) {
      state.isLoading = false;
      state.orgs = action.payload;
    },

    setOrgsError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    setOrgCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setOrgs, setOrgsError, setOrgCurrentPage } = orgsSlice.actions;
export const orgsReducer = orgsSlice.reducer;
