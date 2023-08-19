import { User } from "../../types";

export interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: { name, age, isFriend },
}: UserCardProps): React.ReactElement => {
  return (
    <article className="users__card-container">
      <h2 className="user__name">{name}</h2>
      <ul className="user__list">
        <li className="user__age">{age}</li>
        <li className="user__isFriend">{isFriend}</li>
      </ul>
    </article>
  );
};

export default UserCard;
