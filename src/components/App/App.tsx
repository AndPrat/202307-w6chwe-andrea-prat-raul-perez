import { useEffect } from "react";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/users/usersSlice";
import Header from "../Header/Header";

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
      <Header />
    </div>
  );
};

export default App;
