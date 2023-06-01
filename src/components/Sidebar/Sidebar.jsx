import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  IconAnalytics,
  IconAnalyticsSquare,
  IconAtom,
  IconBntuBuilding,
  IconBookSearch,
  IconBubbles,
  IconBurgerMenu,
  IconContact,
  IconDocument,
  IconDocumentAnalytics,
  IconDocumentAtom,
  IconH,
  IconPrinter,
  IconProtectedDir,
  IconQuotes,
  IconSquareSearch,
  IconSystemSearch,
  IconUserEdit,
} from "../../assets/icons/icons";
import styles from "./Sidebar.module.scss";

export const sidebarConfig = [
  { title: "О системе поиска", icon: <IconSystemSearch />, link: "/" },
  {
    title: "Поиск данных",
    icon: <IconSquareSearch />,
    link: "/search",
    items: [
      { title: "Публикации", icon: <IconDocument />, link: "/publications" },
      { title: "Авторы", icon: <IconUserEdit />, link: "/authors" },
      {
        title: "Организации",
        icon: <IconBntuBuilding />,
        link: "/organizations",
      },
      { title: "Цитирования", icon: <IconQuotes />, link: "/citations" },
      {
        title: "Научное направление",
        icon: <IconAtom />,
        link: "/scientific-direction",
      },
      { title: "Индекс h", icon: <IconH />, link: "/index-h" },
      {
        title: "Источник публикации",
        icon: <IconPrinter />,
        link: "/publication-source",
      },
    ],
  },
  {
    title: "Аналитика",
    icon: <IconAnalytics />,
    link: "/analytics",
    items: [
      {
        title: "Организации: анализ публикаций",
        icon: <IconBntuBuilding />,
        link: "/publications-analysis",
      },
      {
        title: "Динамика публикаций/цитирований",
        icon: <IconAnalyticsSquare />,
        link: "/dynamics",
      },
      {
        title: "Издания: анализ публикаций и ключевых слов",
        icon: <IconBookSearch />,
        link: "/editions",
      },
      {
        title: "Публикации по ключевым словам",
        icon: <IconDocumentAnalytics />,
        link: "/publications-by-keywords",
      },
      {
        title: "Сеть ключевого слова",
        icon: <IconBubbles />,
        link: "/keyword-network",
      },
      {
        title: "Научная сфера организации",
        icon: <IconDocumentAtom />,
        link: "/scientific-sphere",
      },
    ],
  },
  { title: "Конфиденциальность", icon: <IconProtectedDir />, link: "/privacy" },
  { title: "Контакты", icon: <IconContact />, link: "/contacts" },
];

function Sidebar(props) {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.page} {...props}>
      {!isSidebarOpen ? (
        <div className={styles.sidebarSmall}>
          <Burger toggleSidebar={toggleSidebar} />
          <ul>
            {sidebarConfig.map((item) => (
              <div
                key={item.title}
                className={classNames(styles.pageIcon, {
                  [styles.activePageIcon]:
                    item.link !== "/" && location.pathname.includes(item.link),
                })}
              >
                {item.icon}
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.sidebar}>
          <div className={styles.sidebarTop}>
            <Burger toggleSidebar={toggleSidebar} />
            <h4 className={styles.title}>
              <span className={styles.greenPart}>БНТУ </span>
              <br />
              Наукометрия
            </h4>
          </div>
          <ul className={styles.groupsList}>
            {sidebarConfig.map((item) => (
              <GroupTab key={item.title} {...item} />
            ))}
          </ul>
          <p className={styles.caption}>
            Анализ данных научных&nbsp;публикаций
          </p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

const Burger = ({ toggleSidebar }) => (
  <div className={styles.burger} onClick={toggleSidebar}>
    <IconBurgerMenu />
  </div>
);

const GroupTab = ({ title, icon, link, items }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTabOpen, setTabOpen] = useState(
    link !== "/" && location.pathname.includes(link)
  );

  useEffect(() => {
    setTabOpen(link !== "/" && location.pathname.includes(link));
  }, [location]);

  return (
    <li
      onClick={() => {
        if (!items) {
          navigate(link);
        }
        setTabOpen(!isTabOpen);
      }}
    >
      <div
        className={classNames(styles.groupTab, {
          [styles.activeGroupTab]: isTabOpen,
        })}
      >
        <div
          className={classNames(styles.pageIcon, {
            [styles.activePageIcon]: false,
          })}
        >
          {icon}
        </div>
        <h4 className={styles.title}>{title}</h4>
      </div>
      {isTabOpen && items && items.length > 0 && (
        <ul>
          {items.map((item) => (
            <PageTab key={item.title} groupLink={link} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

const PageTab = ({ groupLink, title, icon, link }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`${groupLink}${link}`}
        className={classNames(styles.pageTab, {
          [styles.activePageTab]:
            link !== "/" && location.pathname.includes(link),
        })}
      >
        <div className={styles.pageIcon}>{icon}</div>
        <h4 className={styles.title}>{title}</h4>
      </Link>
    </li>
  );
};
