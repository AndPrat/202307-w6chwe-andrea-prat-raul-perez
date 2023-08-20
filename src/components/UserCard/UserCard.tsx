import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { toggleUserActionCreator } from "../../store/users/usersSlice";
import { User } from "../../types";
import Button from "../Button/Button";
import "./UserCard.css";
export interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: {
    id,
    name,
    age,
    zodiacSign,
    favouriteAnimal,
    favouriteDrink,
    isFriend,
    picture,
  },
  user,
}: UserCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { toggleFriendUser } = useUsersApi();

  const toggleUser = (id: number, user: User) => {
    dispatch(toggleUserActionCreator(id));
    toggleFriendUser(user);
  };

  return (
    <article
      className={
        isFriend
          ? "user__card-container--friend "
          : "user__card-container--foe "
      }
    >
      <picture className="user__picture">
        <img
          src={picture}
          alt={`of ${name}`}
          width="200"
          height="200"
          className="user__image"
        />
      </picture>
      <h2 className="user__name">{name}</h2>
      <ul className="user__list">
        <li className="user__data">{isFriend}</li>
        <li className="user__data">Age: {age}</li>
        <li className="user__data">Zodiac: {zodiacSign}</li>
        <li className="user__data">Loves animal: {favouriteAnimal}</li>
        <li className="user__data">Drinks: {favouriteDrink}</li>
      </ul>
      <Button
        text={isFriend ? "Turn to enemy" : "Turn to friend"}
        className="toggle-button"
        actionOnClick={() => toggleUser(id, user)}
      />
    </article>
  );
};

export default UserCard;
