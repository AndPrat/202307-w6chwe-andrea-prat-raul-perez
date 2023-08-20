import { useState } from "react";
import { useAppDispatch } from "../../store";
import { addUseractionCreator } from "../../store/users/usersSlice";
import { UserData } from "../../types";
import "./NewUser.css";

const NewUser = () => {
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState<UserData>({
    name: "",
    age: 0,
    zodiacSign: "",
    favouriteAnimal: "",
    favouriteDrink: "",
    picture: "",
    isFriend: false,
  });

  const changeNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((newUser) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addUseractionCreator);
  };

  return (
    <form className="form-user" onSubmit={submitForm}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newUser.name}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={newUser.age}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="zodiac">Zodiac:</label>
        <input
          type="text"
          id="zodiac"
          value={newUser.zodiacSign}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="animal">Favourite Animal:</label>
        <input
          type="text"
          id="animal"
          value={newUser.favouriteAnimal}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="drink">Favourite Drink:</label>
        <input
          type="text"
          id="drink"
          value={newUser.favouriteDrink}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control-check">
        <label htmlFor="friend">Is Friend?</label>
        <input type="checkbox" id="friend" />
      </div>
      <div className="form-control">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={newUser.picture}
          onChange={changeNewUser}
        />
      </div>
    </form>
  );
};

export default NewUser;
