import { useEffect } from "react";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/users/usersSlice";
import UsersList from "../UsersList/UsersList";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = useUsersApi();

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      dispatch(loadUsersActionCreator(users));
    })();
  }, [dispatch, getUsers]);

  return (
    <div className="container">
      <header>
        <h1 className="title">Friends & Foes</h1>
      </header>
      <main>
        <UsersList />
      </main>
    </div>
  );
};

export default App;
