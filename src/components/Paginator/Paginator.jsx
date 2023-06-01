import React, { useEffect, useState } from "react";
import styles from "./Paginator.module.scss";
import { IconArrowDown } from "../../assets/icons/icons";
import Btn from "../Btn/Btn";
import classNames from "classnames";

const PAGE_SIZE = 25;

function Paginator({ dataCount, currentPage, setCurrentPage }) {
  const pagesCount = Math.ceil(+dataCount / PAGE_SIZE);

  const [leftSide, setLeftSide] = useState(null);
  const [rifhtSide, setRightSide] = useState(null);

  useEffect(() => {
    setLeftSide(() => {
      if (currentPage < 5) {
        return Array(currentPage - 1)
          .fill()
          .map((_, index) => index + 1);
      } else {
        return [1, "...", currentPage - 1];
      }
    });
    setRightSide(() => {
      if (pagesCount - currentPage < 4) {
        return Array(pagesCount - currentPage)
          .fill()
          .map((_, index) => currentPage + index + 1);
      } else {
        return [currentPage + 1, "...", pagesCount];
      }
    });
  }, [currentPage, pagesCount]);

  return (
    <div className={styles.paginator}>
      <Btn
        noBorder
        className={styles.back}
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <IconArrowDown />
      </Btn>
      <div className={styles.pages}>
        {leftSide &&
          leftSide.map((page) => (
            <PageCircle
              key={page}
              pageNum={page}
              onPageClick={() => {
                setCurrentPage(+page);
              }}
              isActivePage={false}
            />
          ))}

        <PageCircle
          key={currentPage}
          pageNum={currentPage}
          onPageClick={() => {
            setCurrentPage(+currentPage);
          }}
          isActivePage={true}
        />

        {rifhtSide &&
          rifhtSide.map((page) => (
            <PageCircle
              key={page}
              pageNum={page}
              onPageClick={() => {
                setCurrentPage(+page);
              }}
              isActivePage={false}
            />
          ))}
      </div>
      <Btn
        noBorder
        className={styles.next}
        disabled={currentPage === pagesCount}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <IconArrowDown />
      </Btn>
    </div>
  );
}

export default Paginator;

const PageCircle = ({ pageNum, onPageClick, isActivePage }) =>
  pageNum !== "..." ? (
    <button
      onClick={onPageClick}
      className={classNames(styles.pageCircle, {
        [styles.activePageCircle]: isActivePage,
      })}
    >
      {pageNum}
    </button>
  ) : (
    <button className={classNames(styles.pageCircle, styles.dots)}>...</button>
  );
