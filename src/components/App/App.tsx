import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main>
        <UsersListPage />
      </main>
    </div>
  );
};

export default App;
