import { useState } from "react";
import { UserData } from "../../types";
import "./NewUser.css";

const NewUser = () => {
  const [newUser] = useState<UserData>({
    name: "",
    age: 0,
    zodiacSign: "",
    favouriteAnimal: "",
    favouriteDrink: "",
    picture: "",
    isFriend: false,
  });

  return (
    <form className="form-user">
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newUser.name} />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={newUser.age} />
      </div>
      <div className="form-control">
        <label htmlFor="zodiac">Zodiac:</label>
        <input type="text" id="zodiac" value={newUser.zodiacSign} />
      </div>
      <div className="form-control">
        <label htmlFor="animal">Favourite Animal:</label>
        <input type="text" id="animal" value={newUser.favouriteAnimal} />
      </div>
      <div className="form-control">
        <label htmlFor="drink">Favourite Drink:</label>
        <input type="text" id="drink" value={newUser.favouriteDrink} />
      </div>
      <div className="form-control-check">
        <label htmlFor="friend">Is Friend?</label>
        <input type="checkbox" id="friend" />
      </div>
      <div className="form-control">
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={newUser.picture} />
      </div>
    </form>
  );
};

export default NewUser;
