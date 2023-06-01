import React from "react";
import st from "./Btn.module.scss";
import classNames from "classnames";

function Btn({ children, className, fillGreen, noBorder, gray, ...props }) {
  const btnStyles = {
    ...className,
    [st.fillGreen]: fillGreen,
    [st.noBorder]: noBorder,
    [st.gray]: gray,
  };

  return (
    <button className={classNames(className, st.btn, btnStyles)} {...props}>
      {children}
    </button>
  );
}

export default Btn;
