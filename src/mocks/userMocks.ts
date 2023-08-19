import { ApiUser, User } from "../types";

export const usersMockApi: ApiUser[] = [
  {
    id: 1,
    name: "Batman",
    isFriend: true,
    age: 26,
    image: "https://pngimg.com/uploads/batman/batman_PNG40.png",
    alternativeText: "",
    zodiacSign: "aries",
    favouritePet: "Bat",
    favouriteDrink: "daikiri",
    vehicle: "batmovil",
  },
  {
    id: 2,
    name: "Jocker",
    age: 43,
    isFriend: true,
    image:
      "https://s2.qwant.com/thumbr/0x380/5/7/87798c527bad823853d0093f6624b7999b65e73faca2d612057f2487925605/sd2887-the-joker-tin-sign-dc-comics-suicide-squad-batman-villian-comic-books.jpeg?u=http%3A%2F%2Fassets.suredone.com%2F1868%2Fmedia-photos%2Fsd2887-the-joker-tin-sign-dc-comics-suicide-squad-batman-villian-comic-books.jpeg&q=0&b=1&p=0&a=0",
    alternativeText: "",
    zodiacSign: "Virgo",
    favouritePet: "Dog",
    favouriteDrink: "blood",
    vehicle: "motorbike",
  },
  {
    id: 3,
    name: "El pingüino",
    age: 43,
    isFriend: false,
    image:
      "https://s1.qwant.com/thumbr/0x380/0/7/2553f57fcc8567b57ff15116bc65891293f812b801a3464f315c3fc01784ae/penguin-batman-comic-book-superhero-dc-animated-universe-png-favpng-10pQ3XNtcqx2kKnNu8whqbUNF.jpg?u=https%3A%2F%2Fimg.favpng.com%2F14%2F7%2F14%2Fpenguin-batman-comic-book-superhero-dc-animated-universe-png-favpng-10pQ3XNtcqx2kKnNu8whqbUNF.jpg&q=0&b=1&p=0&a=0",
    alternativeText: "",
    zodiacSign: "tauro",
    favouritePet: "pingüin",
    favouriteDrink: "Ice tea",
    vehicle: "trineo",
  },
];

export const usersMock: User[] = [
  {
    id: 1,
    name: "Batman",
    age: 26,
    picture: "https://pngimg.com/uploads/batman/batman_PNG40.png",
    isFriend: true,
    zodiacSign: "aries",
    favouriteDrink: "daikiri",
    favouriteAnimal: "Bat",
  },
  {
    id: 2,
    name: "Jocker",
    age: 43,
    picture:
      "https://s2.qwant.com/thumbr/0x380/5/7/87798c527bad823853d0093f6624b7999b65e73faca2d612057f2487925605/sd2887-the-joker-tin-sign-dc-comics-suicide-squad-batman-villian-comic-books.jpeg?u=http%3A%2F%2Fassets.suredone.com%2F1868%2Fmedia-photos%2Fsd2887-the-joker-tin-sign-dc-comics-suicide-squad-batman-villian-comic-books.jpeg&q=0&b=1&p=0&a=0",
    isFriend: true,
    zodiacSign: "Virgo",
    favouriteDrink: "blood",
    favouriteAnimal: "Dog",
  },
  {
    id: 3,
    name: "El pingüino",
    age: 43,
    picture:
      "https://s1.qwant.com/thumbr/0x380/0/7/2553f57fcc8567b57ff15116bc65891293f812b801a3464f315c3fc01784ae/penguin-batman-comic-book-superhero-dc-animated-universe-png-favpng-10pQ3XNtcqx2kKnNu8whqbUNF.jpg?u=https%3A%2F%2Fimg.favpng.com%2F14%2F7%2F14%2Fpenguin-batman-comic-book-superhero-dc-animated-universe-png-favpng-10pQ3XNtcqx2kKnNu8whqbUNF.jpg&q=0&b=1&p=0&a=0",
    isFriend: false,
    zodiacSign: "tauro",
    favouriteDrink: "Ice tea",
    favouriteAnimal: "pingüin",
  },
];

export const userMock: User = {
  id: 1,
  name: "catwoman",
  isFriend: true,
  age: 30,
  picture: "https://pngimg.com/uploads/batman/batman_PNG40.png",
  zodiacSign: "aries",
  favouriteDrink: "",
  favouriteAnimal: "Cat",
};
