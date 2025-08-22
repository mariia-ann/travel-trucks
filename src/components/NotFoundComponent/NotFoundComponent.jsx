import { NavLink } from "react-router-dom";
import Container from "../Container/Container.jsx";
import style from "./NotFoundComponent.module.css";

const NotFoundComponent = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
          <h1 className={style.title}>404 Not found</h1>
          <h2 className={style.subtitle}>I have bad news for you</h2>
          <p className={style.text}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <NavLink className={style.button} to="/">
            Go home
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundComponent;
