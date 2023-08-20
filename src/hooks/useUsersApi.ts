import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../store";
import {
  showErrorActionCreator,
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
      dispatch(showErrorActionCreator());
      throw new Error("Can't get users right now!");
    }
  }, [dispatch]);

  const toggleFriendUser = async (userToUpdate: User): Promise<User> => {
    const updatedUser = {
      ...userToUpdate,
      image: userToUpdate.picture,
      favouritePet: userToUpdate.favouriteAnimal,
    };

    const { data: updatedApiUser } = await axios.put<User>(
      `${apiUrl}/users/${userToUpdate.id}`,
      {
        ...updatedUser,
        isFriend: !updatedUser.isFriend,
      },
    );

    return updatedApiUser;
  };

  return {
    getUsers,
    toggleFriendUser,
  };
};

export default useUsersApi;
