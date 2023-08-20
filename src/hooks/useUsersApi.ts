import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../store";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/ui/uiSlice";
import { ApiUser, User } from "../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useUsersApi = () => {
  const dispatch = useAppDispatch();

  const getUsers = useCallback(async (): Promise<User[]> => {
    dispatch(startLoadingActionCreator());

    try {
      const { data: apiUsers } = await axios.get<ApiUser[]>(`${apiUrl}/users`);

      const users = apiUsers.map<User>(
        ({
          id,
          name,
          age,
          favouritePet,
          image,
          isFriend,
          zodiacSign,
          favouriteDrink,
        }) => ({
          id,
          name,
          age,
          picture: image,
          isFriend,
          zodiacSign,
          favouriteDrink,
          favouriteAnimal: favouritePet,
        }),
      );

      dispatch(stopLoadingActionCreator());
      return users;
    } catch {
      dispatch(stopLoadingActionCreator());
      throw new Error("Can't get user right now!");
    }
  }, [dispatch]);

  return { getUsers };
};

export default useUsersApi;
