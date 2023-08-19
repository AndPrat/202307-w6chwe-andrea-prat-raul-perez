import axios from "axios";
import { useCallback } from "react";
import { ApiUser, User } from "../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useUsersApi = () => {
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

    return users;
  }, []);

  return { getUsers };
};

export default useUsersApi;
