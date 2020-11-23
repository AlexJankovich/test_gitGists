import { combineReducers } from '@reduxjs/toolkit';
import { gistsReducer } from './slices/gists';
import { orgsReducer } from './slices/orgs';

export const rootReducer = combineReducers({
  gists: gistsReducer,
  orgs: orgsReducer,
});
