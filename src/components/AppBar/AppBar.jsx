import Navigation from "../Navigation/Navigation.jsx";
import style from "./AppBar.module.css";
import IconLogo from "../../assets/icons/logo.svg?react";

const AppBar = () => {
  return (
    <header className={style.header}>
        <IconLogo className={style.logo} />
        <Navigation />
    </header>
  );
};

export default AppBar;
