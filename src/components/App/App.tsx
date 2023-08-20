import { Navigate, Route, Routes } from "react-router-dom";
import NewUserPage from "../../pages/UsersListPage/NewUserPage/NewUserPage";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import paths from "../../paths/paths";
import { useAppSelector } from "../../store";
import Counter from "../Counter/Counter";
import ErrorFeedback from "../ErrorFeedback/ErrorFeedback";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiStore.isLoading);
  const isError = useAppSelector((state) => state.uiStore.isError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorFeedback />}
      <div className="container">
        <Header />
        <main className="main-content">
          <Counter />
          <Routes>
            <Route path={paths.users} element={<UsersListPage />} />
            <Route path="/" element={<Navigate to={paths.users} />} />
            <Route path="/home" element={<Navigate to={paths.users} />} />
            <Route path={paths.newUser} element={<NewUserPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
