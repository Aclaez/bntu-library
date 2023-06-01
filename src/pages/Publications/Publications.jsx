import React, { useEffect, useState } from "react";
import styles from "./Publications.module.scss";
import DataPageLayout from "../../components/DataPageLayout/DataPageLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import {
  filtersByDefault,
  filtersList,
  getTransformedData,
  searchFieldsList,
  tableColumns,
} from "../../variables/publications";
import { api } from "../../api/api";

function Publications() {
  const [columns, setColumns] = useState(tableColumns);
  const [data, setData] = useState({});
  const [dataCount, setDataCount] = useState(0);
  const [isError, setError] = useState(false);

  const [query, setQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setError(false);

    if (query) {
      api
        .getWorks(query, currentPage)
        .then((data) => {
          setData(getTransformedData(data.results));
          setDataCount(data.meta.count);
        })
        .catch((err) => {
          setError(true);
          setData([]);
          setDataCount(0);
          console.error(err);
        });
    }
  }, [query, currentPage]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <DataPageLayout>
      <SearchBar
        title="Поиск публикации"
        fieldsNames={searchFieldsList}
        columns={columns}
        setColumns={setColumns}
        filtersList={filtersList}
        filtersByDefault={filtersByDefault}
        setQuery={setQuery}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setError={setError}
      />
      {!isError && data.length > 0 && (
        <Table
          columns={columns}
          data={data}
          dataCount={dataCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {data.length === 0 && (
        <div className={styles.informer}>
          <p className={styles.text}>По вашему запросу ничего не найдено</p>
        </div>
      )}

      {isError && (
        <div className={styles.informer}>
          <p className={styles.text}>
            Произошла ошибка, проверьте корректность введённых данных и
            попробуйте повторить запрос
          </p>
        </div>
      )}
    </DataPageLayout>
  );
}

export default Publications;
