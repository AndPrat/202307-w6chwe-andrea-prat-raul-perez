import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { UsersState } from "./types";

const initialUsersState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "friends",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      currentUserState,
      action: PayloadAction<User[]>,
    ): UsersState => ({
      ...currentUserState,
      users: action.payload,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
