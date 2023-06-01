import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BntuMainLogo,
  IconAnalytics,
  IconSearch,
} from "../../assets/icons/icons";
import Btn from "../../components/Btn/Btn";
import Title from "../../components/Title/Title";
import st from "./Home.module.scss";

function Home() {
  const pages = [
    {
      icon: <IconSearch />,
      name: "Поиск данных",
      text: "тексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекст",
      link: "/search",
    },
    {
      icon: <IconAnalytics />,
      name: "Аналитика",
      text: "тексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекст",
      link: "/analytics",
    },
    {
      icon: <IconAnalytics />,
      name: "Конфиденциальность",
      text: "тексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекст",
      link: "/",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className={st.container}>
      <header className={st.header}>
        <nav className={st.nav}>
          <Link to="/">О системе поиска</Link>
          <Link to="/search">Поиск данных</Link>
          <Link to="/analytics">Аналитика</Link>
          <Link to="/">Конфиденциальность</Link>
          <Link to="/">Контакты</Link>
        </nav>
      </header>
      <main className={st.main}>
        <BntuMainLogo className={st.logo} />

        <div className={st.content}>
          <Title>БНТУ Наукометрия</Title>
          <p className={st.contentText}>
            Система поиска система поиска система поиска...
          </p>
          <Btn
            onClick={() => {
              navigate("/search");
            }}
          >
            Поиск данных
          </Btn>
        </div>

        <ul className={st.pageCardList}>
          {pages.map((item) => (
            <PageCard
              key={item.name}
              icon={item.icon}
              name={item.name}
              text={item.text}
              link={item.link}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;

const PageCard = ({ icon, name, text, link }) => (
  <li className={st.pageCard}>
    <div className={st.icon}>{icon}</div>
    <h4 className={st.title}>{name}</h4>
    <p className={st.text}>{text}</p>
    <Link to={link} className={st.link}>
      Перейти
    </Link>
  </li>
);
