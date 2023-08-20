export interface ApiUser {
  id: number;
  name: string;
  isFriend: boolean;
  age: number;
  image: string;
  alternativeText: string;
  zodiacSign: string;
  favouritePet: string;
  favouriteDrink: string;
  vehicle: string;
}

export interface User extends Omit<ApiUser, "image" | "favouritePet"> {
  picture: string;
  favouriteAnimal: string;
}

export type UserData = Omit<User, "id">;
