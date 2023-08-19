import { useAppSelector } from "../../store";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector(({ usersStore: { users } }) => users);

  return (
    <ul className="users-list">
      {users.map((users) => (
        <li key={users.id}>
          <UserCard user={users} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
