import { User } from "../store/types";

export const usersMock: User[] = [
  {
    id: 1,
    name: "catwoman",
    isFriend: true,
    age: 30,
    image: "",
  },
  {
    id: 2,
    name: "jocker",
    isFriend: false,
    age: 40,
    image: "",
  },
  {
    id: 3,
    name: "harley quinn",
    isFriend: false,
    age: 25,
    image: "",
  },
];

export const userMock: User = {
  id: 1,
  name: "catwoman",
  isFriend: true,
  age: 30,
  image: "",
};
