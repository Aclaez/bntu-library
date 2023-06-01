import React from "react";
import st from "./MenuTree.module.scss";
import BtnCircle from "../BtnCircle/BtnCircle";
import { Link } from "react-router-dom";

function MenuTree({ groupName, config }) {
  return (
    <section className={st.tree}>
      <ul>
        {config.map((item, index) => (
          <li
            key={item.name}
            className={index % 2 === 0 ? st.itemRight : st.itemLeft}
          >
            <Link to={`/${groupName}${item.link}`}>
              <div className={st.node}></div>
              {index % 2 !== 0 && <span className={st.text}>{item.name}</span>}
              <BtnCircle>{item.icon}</BtnCircle>
              {index % 2 === 0 && <span className={st.text}>{item.name}</span>}
            </Link>
          </li>
        ))}
        <div className={st.line}></div>
      </ul>
    </section>
  );
}

export default MenuTree;
