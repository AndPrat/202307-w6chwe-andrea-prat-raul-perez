import { Navigate, Route, Routes } from "react-router-dom";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import paths from "../../paths/paths";
import { useAppSelector } from "../../store";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiStore.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      <div className="container">
        <Header />
        <main className="main-content">
          <Counter />
          <Routes>
            <Route path={paths.users} element={<UsersListPage />}></Route>
            <Route path="/" element={<Navigate to={paths.users} />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
