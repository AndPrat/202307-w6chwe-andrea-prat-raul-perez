import axios from "axios";
import { useCallback } from "react";
import { ApiUser, User } from "../store/types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useUsersApi = () => {
  const getUsers = useCallback(async (): Promise<User[]> => {
    const { data: apiUsers } = await axios.get<ApiUser[]>(`${apiUrl}/users`);

    const users = apiUsers.map<User>(
      ({ id, name, age, favouritePet, image, isFriend, zodiacSign }) => ({
        id,
        name,
        age,
        picture: image,
        isFriend,
        zodiacSign,
        bestFriend: "",
        favouriteAnimal: favouritePet,
      }),
    );

    return users;
  }, []);

  return { getUsers };
};

export default useUsersApi;
