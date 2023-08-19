import { User } from "../../types";
import "./UserCard.css";

export interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: {
    name,
    age,
    zodiacSign,
    favouriteAnimal,
    bestFriend,
    isFriend,
    picture,
  },
}: UserCardProps): React.ReactElement => {
  return (
    <article className="users__card-container">
      <img
        src={picture}
        alt={`${name}'s user ilustration`}
        width="300"
        height="300"
        className="user__picture"
      />
      <h2 className="user__name">{name}</h2>
      <ul className="user__list">
        <li className="user__data">{isFriend}</li>
        <li className="user__data">Age: {age}</li>
        <li className="user__data">Zodiac sign: {zodiacSign}</li>
        <li className="user__data">Fav animal: {favouriteAnimal}</li>
        <li className="user__data">Bf: {bestFriend}</li>
      </ul>
    </article>
  );
};

export default UserCard;
