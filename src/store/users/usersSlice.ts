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

    toogleUser: (
      currentUserState,
      action: PayloadAction<number>,
    ): UsersState => ({
      ...currentUserState,
      users: currentUserState.users.map<User>((user) => ({
        ...user,
        isFriend: user.id === action.payload ? !user.isFriend : user.isFriend,
      })),
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadUsers: loadUsersActionCreator,
  toogleUser: toogleUserActionCreator,
} = usersSlice.actions;
