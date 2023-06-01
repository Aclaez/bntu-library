import React from "react";
import st from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <div className={st.container}>
      <Header />
      <div className={st.main}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
