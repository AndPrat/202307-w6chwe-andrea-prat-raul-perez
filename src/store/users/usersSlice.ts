import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { UsersState } from "./types";

const initialUsersState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      currentUserState,
      action: PayloadAction<User[]>,
    ): UsersState => ({
      ...currentUserState,
      users: action.payload,
    }),

    toggleUser: (
      currentUserState,
      action: PayloadAction<number>,
    ): UsersState => ({
      ...currentUserState,
      users: currentUserState.users.map<User>((user) => ({
        ...user,
        isFriend: user.id === action.payload ? !user.isFriend : user.isFriend,
      })),
    }),

    addUser: (currentUserState, action: PayloadAction<User>): UsersState => ({
      ...currentUserState,
      users: [...currentUserState.users, action.payload],
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadUsers: loadUsersActionCreator,
  toggleUser: toggleUserActionCreator,
} = usersSlice.actions;
