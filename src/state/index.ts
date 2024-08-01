import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux";

export interface initialStateType {
  isDark: boolean;
  isSidebarCollapsed: boolean;
}

const initialState: initialStateType = {
  isDark: false,
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { setSidebarCollapsed, setDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
