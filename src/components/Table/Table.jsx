import React, { useRef, useState } from "react";
import styles from "./Table.module.scss";
import { useTable } from "react-table";
import Paginator from "../Paginator/Paginator";
import Btn from "../Btn/Btn";
import { IconArrowDown, IconExport } from "../../assets/icons/icons";
import { useClickOutside } from "@react-hookz/web";
import ExcelExportBtn from "../ExcelExportBtn";

function Table({ columns, data, dataCount, currentPage, setCurrentPage }) {
  const [isExportMenuOpen, setExportMenuOpen] = useState();

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <p>Результатов: {dataCount}</p>
        <Btn
          id="export-toggle"
          className={styles.export}
          onClick={() => {
            setExportMenuOpen(!isExportMenuOpen);
          }}
        >
          <IconExport id="export-toggle-icon" />
          <span id="export-toggle-text">Экспорт таблицы</span>
          <IconArrowDown id="export-toggle-icon2" />
        </Btn>
        {isExportMenuOpen && (
          <ExportMenu
            data={data}
            columns={columns}
            closeMenu={() => {
              setExportMenuOpen(false);
            }}
          />
        )}
      </div>

      <div className={styles.tableContainer}>
        <table {...getTableProps()} className={styles.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.tableFooter}>
        <Paginator
          dataCount={dataCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Table;

const ExportMenu = ({ data, columns, closeMenu }) => {
  const defaultFileName = "table";
  const menuRef = useRef(null);

  useClickOutside(menuRef, (e) => {
    if (!e.target.id.includes("export-toggle")) {
      closeMenu();
    }
  });

  return (
    <div ref={menuRef} className={styles.exportMenu}>
      <ul>
        <li>
          <ExcelExportBtn
            csvData={data}
            columns={columns}
            fileName={defaultFileName}
            closeMenu={closeMenu}
          />
        </li>
      </ul>
    </div>
  );
};
