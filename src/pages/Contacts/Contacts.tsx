import { NavLink } from "react-router-dom";
import "./Contacts.scss";

function Contacts() {
  return (
    <main className="contacts-page">
      <section className="contacts-page__intro">
        <h1 className="contacts-page__main-title">Обо мне</h1>
        <p className="contacts-page__text">
          Здравствуйте! Я начинающий дизайнер и продвинутый иллюстратор. Я умею
          рисовать в традиционных техниках разными материалами, а также создаю
          цифровой арт (digital art).
        </p>
      </section>

      <section className="contacts-page__section">
        <h2 className="contacts-page__subtitle">Сильные стороны</h2>
        <ul className="contacts-page__list">
          <li className="contacts-page__item">
            Анималистика, флористика, узоры. Идеальный лайн-арт (очень ровно
            рисую линии).
          </li>
          <li className="contacts-page__item">
            Умение работать с разными материалами и возможность смешанной
            техники (есть опыт работы с акварелью, маслом, карандашами, тушью,
            чернилами, ручками). Всегда рада попробовать новые материалы и
            научиться с ними работать.
          </li>
          <li className="contacts-page__item">
            Уверенное владение цифровыми инструментами (опыт работы с Photoshop,
            Illustrator, Figma, InDesign).
          </li>
        </ul>
      </section>

      <section className="contacts-page__section">
        <h2 className="contacts-page__subtitle">Зоны роста</h2>
        <ul className="contacts-page__list">
          <li className="contacts-page__item">
            Пока мало опыта в рисовании людей. Могу копировать человеческие лица
            по фото, но учусь рисовать портреты и фигуры без референсов.
          </li>
        </ul>
      </section>

      <section className="contacts-page__section">
        <h2 className="contacts-page__subtitle">Образование</h2>
        <p className="contacts-page__text contacts-page__text--bold">
          ОУ ВО «Южно-Уральский Технологический Университет»
        </p>
        <ul className="contacts-page__list">
          <li className="contacts-page__item">
            Дизайн (по отраслям) — основное среднее профессиональное образование
          </li>
          <li className="contacts-page__item">
            Делопроизводство и деловые коммуникации — дополнительное образование
          </li>
          <li className="contacts-page__item">
            Информационные технологии и документооборот в профессиональной
            деятельности — дополнительное образование
          </li>
          <li className="contacts-page__item">
            Исполнитель художественно-оформительских работ 2 разряда —
            дополнительное образование
          </li>
        </ul>
      </section>

      <section className="contacts-page__footer">
        <a
          href="mailto:georgenoe825@gmail.com"
          className="contacts-page__email-link"
        >
          georgenoe825@gmail.com
        </a>

        <NavLink to="/" className="contacts-page__back-button">
          Вернуться на главную
        </NavLink>
      </section>
    </main>
  );
}

export default Contacts;
