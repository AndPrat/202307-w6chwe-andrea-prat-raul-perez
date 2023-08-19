import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialUiState: UiState = {
  isLoading: false,
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    startLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { startLoading: startLoadingActionCreator } = uiSlice.actions;
