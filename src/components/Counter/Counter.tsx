import { useAppSelector } from "../../store";
import "./Counter.css";

const Counter = (): React.ReactElement => {
  const selectedFriendsUsersCounter = useAppSelector(
    (state) => state.usersStore.users.filter((users) => users.isFriend).length,
  );

  const selectedEnemiesUsersCounter = useAppSelector(
    (state) =>
      state.usersStore.users.filter((users) => users.isFriend === false).length,
  );

  return (
    <ul className="user-counter">
      <li className="user-counter__total">
        {selectedFriendsUsersCounter} total friends
      </li>
      <li className="user-counter__total">|</li>
      <li className="user-counter__total">
        {selectedEnemiesUsersCounter} total enemies
      </li>
    </ul>
  );
};

export default Counter;
