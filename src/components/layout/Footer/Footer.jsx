import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconTelegram,
  IconTwitter,
  IconVK,
  IconYoutube,
} from "./icons/icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.quote}>
          Образование и научные достижения — ключ к успеху.
        </p>

        <div className={styles.col}>
          <p className={styles.colTitle}>О библиотеке</p>
          <ul className={styles.links}>
            <li>
              <a
                className={styles.link}
                href="https://elcat.bntu.by/"
                target="_blank"
                rel="noreferrer"
              >
                Фонд
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://library.bntu.by/bazy-dannyh/"
                target="_blank"
                rel="noreferrer"
              >
                Базы данных
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://library.bntu.by/online-uslugi-biblioteki/"
                target="_blank"
                rel="noreferrer"
              >
                Онлайн-услуги
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                Отзывы
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>О системе поиска</p>
          <ul className={styles.links}>
            <li>
              <Link to="/search" className={styles.link}>
                Поиск
              </Link>
            </li>
            <li>
              <Link to="/analytics" className={styles.link}>
                Аналитика
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Авторские права
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Лаборатория научных коммуникаций</p>
          <ul className={styles.links}>
            <li>
              <a
                className={styles.link}
                href="https://library.bntu.by/laboratorija-nauchnyh-kommunikacij/"
                target="_blank"
                rel="noreferrer"
              >
                Сопровождение публикационной активности
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://library.bntu.by/daydzhest/"
                target="_blank"
                rel="noreferrer"
              >
                Дайджест InfoGeneratorх
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://library.bntu.by/struktura/ornk/"
                target="_blank"
                rel="noreferrer"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <ul className={styles.socialLinks}>
          <li>
            <a
              className={styles.socialLink}
              href="https://www.facebook.com/bntulibrary/"
              target="_blank"
              rel="noreferrer"
            >
              <IconFacebook />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="https://t.me/nbbntu"
              target="_blank"
              rel="noreferrer"
            >
              <IconTelegram />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="https://twitter.com/biblioteka"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="mailto:library@bntu.by"
              target="_blank"
              rel="noreferrer"
            >
              <IconMail />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/bntulibrary/"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="https://www.youtube.com/@BNTUlibrary"
              target="_blank"
              rel="noreferrer"
            >
              <IconYoutube />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href="https://vk.com/bntulibrary"
              target="_blank"
              rel="noreferrer"
            >
              <IconVK />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
