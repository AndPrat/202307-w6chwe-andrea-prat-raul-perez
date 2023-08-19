import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/users/usersSlice";

const UsersListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = useUsersApi();

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      dispatch(loadUsersActionCreator(users));
    })();
  }, [dispatch, getUsers]);

  return (
    <>
      <h2>Your Friends and Enemies</h2>
      <UsersList />
    </>
  );
};

export default UsersListPage;
