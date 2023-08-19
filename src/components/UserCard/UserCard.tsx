import { User } from "../../types";

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
        width="200"
        height="200"
        className="user__picture"
      />
      <h2 className="user__name">{name}</h2>
      <ul className="user__list">
        <li className="user__isFriend">{isFriend}</li>
        <li className="user__age">{age}</li>
        <li>{zodiacSign}</li>
        <li>{favouriteAnimal}</li>
        <li>{bestFriend}</li>
      </ul>
    </article>
  );
};

export default UserCard;
