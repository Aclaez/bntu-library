import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const transformData = (columns, data) => {
  const oldKeys = Object.keys(data?.[0]);

  let newKeys = [];

  oldKeys.forEach((key) => {
    const column = columns.find((column) => column.accessor === key);
    newKeys.push(column.Header);
  });

  return data.map((item) => {
    const newItem = {};
    oldKeys.forEach((key, index) => {
      newItem[newKeys[index]] = item[key];
      delete item[key];
    });
    return { ...newItem, ...item };
  });
};

function ExcelExportBtn({ csvData, columns, fileName, closeMenu }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const correctData = transformData(columns, csvData);

  const exportToCSV = (correctData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(correctData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      onClick={() => {
        closeMenu();
        exportToCSV(correctData, fileName);
      }}
    >
      Экспорт в Excel
    </button>
  );
}

export default ExcelExportBtn;
