import React, { useEffect, useState } from "react";
import Sidebar, { sidebarConfig } from "../Sidebar/Sidebar";
import styles from "./DataPageLayout.module.scss";
import { IconArrowDown } from "../../assets/icons/icons";
import { Link, useLocation } from "react-router-dom";

function DataPageLayout({ children }) {
  const location = useLocation();

  const [tab, setTab] = useState(null);
  const [subTab, setSubTab] = useState(null);

  useEffect(() => {
    sidebarConfig.some((item) => {
      if (location.pathname.includes(item.link)) {
        setTab(item.title);
        item?.items?.some((children) => {
          if (location.pathname.includes(children.link)) {
            setSubTab(children.title);
          }
        });
      }
    });
  }, []);

  return (
    <div className={styles.page}>
      <Sidebar />
      <div
        className={styles.content}
        style={{ maxHeight: "100vh", overflow: "auto" }}
      >
        <header className={styles.header}>
          {tab && <p>{tab}</p>}
          {subTab && (
            <>
              <IconArrowDown />
              <p>{subTab}</p>
            </>
          )}
        </header>
        <main style={{ flex: "1 1 auto" }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default DataPageLayout;

const Footer = () => (
  <footer className={styles.footer}>
    <a
      className={styles.link}
      href="https://elcat.bntu.by/"
      target="_blank"
      rel="noreferrer"
    >
      О библиотеке
    </a>
    <Link to="/">О системе поиска</Link>
    <a
      className={styles.link}
      href="https://library.bntu.by/laboratorija-nauchnyh-kommunikacij/"
      target="_blank"
      rel="noreferrer"
    >
      Лаборатория научных коммуникаций
    </a>
  </footer>
);
