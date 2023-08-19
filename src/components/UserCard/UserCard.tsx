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
    <article className="users-card">
      <img
        src={picture}
        alt={`${name}'s user ilustration`}
        width="20"
        height="26"
        className="user__picture"
      />
      <h2>{name}</h2>
      <ul>
        <li>{isFriend}</li>
        <li>{age}</li>
        <li>{zodiacSign}</li>
        <li>{favouriteAnimal}</li>
        <li>{bestFriend}</li>
      </ul>
    </article>
  );
};

export default UserCard;
