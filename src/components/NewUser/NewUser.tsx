import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { addUseractionCreator } from "../../store/users/usersSlice";
import { UserData } from "../../types";
import "./NewUser.css";

const NewUser = () => {
  const dispatch = useAppDispatch();
  const { addUser } = useUsersApi();

  const [newUser, setNewUser] = useState<UserData>({
    name: "",
    age: 0,
    zodiacSign: "",
    favouriteAnimal: "",
    favouriteDrink: "",
    picture: "",
    isFriend: false,
  });

  const {
    age,
    favouriteAnimal,
    favouriteDrink,
    isFriend,
    name,
    picture,
    zodiacSign,
  } = newUser;

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    name !== "" &&
    picture !== "" &&
    zodiacSign !== "" &&
    favouriteDrink !== "" &&
    favouriteAnimal !== "" &&
    age != 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [
    age,
    favouriteAnimal,
    favouriteDrink,
    isFriend,
    name,
    picture,
    zodiacSign,
  ]);

  const changeNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((newUser) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = await addUser(newUser);

    dispatch(addUseractionCreator(user));
    navigate("/users");
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
        <input type="number" id="age" onChange={changeNewUser} />
      </div>
      <div className="form-control">
        <label htmlFor="zodiacSign">Zodiac:</label>
        <input
          type="text"
          id="zodiacSign"
          value={newUser.zodiacSign}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="favouriteAnimal">Favourite Animal:</label>
        <input
          type="text"
          id="favouriteAnimal"
          value={newUser.favouriteAnimal}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="favouriteDrink">Favourite Drink:</label>
        <input
          type="text"
          id="favouriteDrink"
          value={newUser.favouriteDrink}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="picture">Image URL:</label>
        <input
          type="text"
          id="picture"
          value={newUser.picture}
          onChange={changeNewUser}
        />
      </div>
      <div className="form-control">
        <label htmlFor="isFriend">Is Friend?</label>
        <input className="form-control-check" type="checkbox" id="isFriend" />
      </div>
      <div className="form-user__button btn">
        <button disabled={disabled} type="submit">
          Add Friend
        </button>
      </div>
    </form>
  );
};

export default NewUser;
