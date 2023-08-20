import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <>
      <header className="main-header">
        <div className="main-header__content">
          <h1 className="main-header__title">Friends & Foes</h1>
          <img
            className="main-header__logo"
            src="/img/app-logo.png"
            alt="Friends and foes website logo"
            width="82"
            height="88"
          />
        </div>
        <NavigationBar />
      </header>
    </>
  );
};

export default Header;
