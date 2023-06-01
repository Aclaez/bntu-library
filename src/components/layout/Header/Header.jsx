import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BntuMainLogo,
  IconAnalytics,
  IconBurgerMenu,
  IconCloseMenu,
  IconContact,
  IconProtectedDir,
  IconSquareSearch,
  IconSystemSearch,
} from "../../../assets/icons/icons";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className={styles.header}>
      <BntuMainLogo className={styles.logo} />
      <div className={styles.menuGroup}>
        <button
          className={styles.menuSwitch}
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <IconCloseMenu /> : <IconBurgerMenu />}
        </button>
        {isMenuOpen && <Menu menuRef={menuRef} />}
      </div>
    </header>
  );
}

export default Header;

const Menu = ({ menuRef }) => {
  const menuConfig = [
    { icon: <IconSystemSearch />, title: "О системе поиска", link: "/" },
    { icon: <IconSquareSearch />, title: "Поиск данных", link: "/search" },
    { icon: <IconAnalytics />, title: "Аналитика", link: "/analytics" },
    { icon: <IconProtectedDir />, title: "Конфиденциальность", link: "/" },
    { icon: <IconContact />, title: "Контакты", link: "/" },
  ];

  return (
    <div ref={menuRef} className={styles.menu}>
      <h4 className={styles.menuTitle}>
        <span className={styles.greenPart}>БНТУ</span>&nbsp;Наукометрия
      </h4>
      <ul>
        {menuConfig.map((item) => (
          <MenuItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ icon, title, link }) => {
  const location = useLocation();

  return (
    <li
      className={classNames(styles.menuLink, {
        [styles.activeLink]: location.pathname === link,
      })}
    >
      <Link to={link}>
        <span>{icon}</span>
        {title}
      </Link>
    </li>
  );
};
