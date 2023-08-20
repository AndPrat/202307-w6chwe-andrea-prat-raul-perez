import axios from "axios";
import { useCallback } from "react";
import { ApiUser, User } from "../types";

const useUsersApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUsers = useCallback(async (): Promise<User[]> => {
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
        vehicle,
        alternativeText,
      }) => ({
        id,
        name,
        age,
        picture: image,
        isFriend,
        zodiacSign,
        favouriteDrink,
        favouriteAnimal: favouritePet,
        vehicle,
        alternativeText,
      }),
    );

    return users;
  }, [apiUrl]);

  const toggleFriendUser = async (friendToUpdate: ApiUser): Promise<User> => {
    const user: ApiUser = {
      ...friendToUpdate,
      isFriend: !friendToUpdate.isFriend,
    };

    const { data: isFriendUser } = await axios.put<User>(
      `${apiUrl}/${friendToUpdate.id}`,
      user,
    );

    return isFriendUser;
  };

  return {
    getUsers,
    toggleFriendUser,
  };
};

export default useUsersApi;
