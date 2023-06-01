import React from "react";
import { Outlet } from "react-router-dom";
import {
  IconAtom,
  IconBntuBuilding,
  IconDocument,
  IconH,
  IconPrinter,
  IconQuotes,
  IconUserEdit,
} from "../../assets/icons/icons";
import Layout from "../../components/layout/Layout";
import MenuTree from "../../components/MenuTree/MenuTree";
import Title from "../../components/Title/Title";

function DataSearch() {
  const menuConfig = [
    { name: "Публикации", icon: <IconDocument />, link: "/publications" },
    { name: "Авторы", icon: <IconUserEdit />, link: "/authors" },
    { name: "Организации", icon: <IconBntuBuilding />, link: "/organizations" },
    { name: "Цитирования", icon: <IconQuotes />, link: "/citations" },
    {
      name: "Научное направление",
      icon: <IconAtom />,
      link: "/scientific-direction",
    },
    { name: "Индекс h", icon: <IconH />, link: "/index-h" },
    {
      name: "Источник публикации",
      icon: <IconPrinter />,
      link: "/publication-source",
    },
  ];

  return (
    <Layout>
      <div>
        <Title>Наукометрические показатели</Title>
        <MenuTree groupName="search" config={menuConfig} />
      </div>
      <Outlet/>
    </Layout>
  );
}

export default DataSearch;
