import { useAppSelector } from "../../store";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector(({ usersStore: { users } }) => users);

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
