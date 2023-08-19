import { Navigate, Route, Routes } from "react-router-dom";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import paths from "../../paths/paths";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
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
  );
};

export default App;
