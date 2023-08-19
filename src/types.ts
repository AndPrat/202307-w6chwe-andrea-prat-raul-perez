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

export interface User
  extends Omit<
    ApiUser,
    "image" | "vehicle" | "favouriteDrink" | "alternativeText" | "favouritePet"
  > {
  picture: string;
  bestFriend: string;
  favouriteAnimal: string;
}
