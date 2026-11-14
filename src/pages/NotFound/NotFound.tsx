import { NavLink } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <main className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__text">Упс! Страница не найдена.</p>
      <p className="not-found-page__text not-found-page__text--sub">
        Возможно, она была удалена или вы ввели неверный адрес.
      </p>

      <NavLink to="/" className="not-found-page__back-button">
        Вернуться на главную
      </NavLink>
    </main>
  );
}

export default NotFound;
