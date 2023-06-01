import React from "react";
import {
  IconAnalyticsSquare,
  IconBntuBuilding,
  IconBookSearch,
  IconBubbles,
  IconDocumentAnalytics,
  IconDocumentAtom,
} from "../../assets/icons/icons";
import Layout from "../../components/layout/Layout";
import MenuTree from "../../components/MenuTree/MenuTree";
import Title from "../../components/Title/Title";

function Analytycs() {
  const menuConfig = [
    {
      name: "Организации: анализ публикаций",
      icon: <IconBntuBuilding />,
      link: "/publications-analysis",
    },
    {
      name: "Динамика публикаций/цитирований",
      icon: <IconAnalyticsSquare />,
      link: "/dynamics",
    },
    {
      name: "Издания: анализ публикаций и ключевых слов",
      icon: <IconBookSearch />,
      link: "/editions",
    },
    {
      name: "Публикации по ключевым словам",
      icon: <IconDocumentAnalytics />,
      link: "/publications-by-keywords",
    },
    {
      name: "Сеть ключевого слова",
      icon: <IconBubbles />,
      link: "/keyword-network",
    },
    {
      name: "Научная сфера организации",
      icon: <IconDocumentAtom />,
      link: "/scientific-sphere",
    },
  ];

  return (
    <Layout>
      <div>
        <Title>Аналитика и&nbsp;визуализация</Title>
        <MenuTree groupName="analytics" config={menuConfig} />
      </div>
    </Layout>
  );
}

export default Analytycs;
