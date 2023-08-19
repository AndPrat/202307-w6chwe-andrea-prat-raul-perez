import { User } from "../../types";

export interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: { name, age, isFriend },
}: UserCardProps): React.ReactElement => {
  return (
    <article className="users-card">
      <h2>{name}</h2>
      <ul>
        <li>{age}</li>
        <li>{isFriend}</li>
      </ul>
    </article>
  );
};

export default UserCard;
