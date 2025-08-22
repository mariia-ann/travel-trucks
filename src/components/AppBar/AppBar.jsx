import Navigation from "../Navigation/Navigation.jsx";
import style from "./AppBar.module.css";
import IconLogo from "../../assets/icons/logo.svg?react";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink className={style.logo} to="/"><IconLogo /></NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
