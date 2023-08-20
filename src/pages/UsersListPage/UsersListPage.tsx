import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/users/usersSlice";
import "./UsersListPage.css";
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
      <h2 className="friends-list-heading">Your Friends and Enemies</h2>
      <UsersList />
    </>
  );
};

export default UsersListPage;
