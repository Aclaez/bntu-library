import React, { useEffect, useRef, useState } from "react";
import {
  IconArrowDown,
  IconCloseMenu,
  IconFilter,
  IconSearch,
} from "../../assets/icons/icons";
import styles from "./SearchBar.module.scss";
import FiltersMenu from "./FiltersMenu/FiltersMenu";
import Btn from "../Btn/Btn";
import { useClickOutside } from "@react-hookz/web";

function SearchBar({
  title,
  fieldsNames,
  setColumns,
  columns,
  filtersList,
  filtersByDefault,
  setQuery,
  setCurrentPage,
  setError,
}) {
  const defaultFields = [{ id: 1, type: fieldsNames[0], value: "" }];

  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const [fields, setFields] = useState(defaultFields);
  const [isCitationEnabled, setCitationEnabled] = useState(false);
  const [accessType, setAccessType] = useState("green");

  const addSearchField = () => {
    setFields((prev) => [
      ...prev,
      { id: fields.length + 1, type: fieldsNames[0], value: "" },
    ]);
  };

  const handleInput = (e) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === +e.target.name);
      field.value = e.target.value;
      return [...prev];
    });
  };

  const handleFieldTypeChange = (fieldID, newFieldType) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === fieldID);
      field.type = newFieldType;
      return [...prev];
    });
  };

  const clearFieldValue = (fieldID) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === fieldID);
      field.value = "";
      return [...prev];
    });
  };

  const handleClearClick = () => {
    setFields(defaultFields);
    setError(false);
  };

  const handleSearchClick = () => {
    setCurrentPage(1);
    let queryString = "";

    fields.forEach((item, index) => {
      queryString += `${item.type.key}:${item.value}${
        index !== fields.length - 1 ? "," : ""
      }`;
    });

    //currentPage
    //citation
    //access type

    setQuery(queryString);

    // api
    //   .getWorks(queryString + 'page=1&per-page=5')
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  useEffect(() => {
    // console.log(fields);
  }, [fields]);

  return (
    <div className={styles.searchBar}>
      <h3 className={styles.title}>{title}</h3>
      {fields.map((field) => (
        <SearchField
          key={field.id}
          fieldsNames={fieldsNames}
          value={field}
          onInput={handleInput}
          onTypeChange={handleFieldTypeChange}
          clearFieldValue={clearFieldValue}
        />
      ))}
      <div className={styles.bottom}>
        <div className={styles.btnGroup}>
          <Btn className={styles.addField} onClick={addSearchField}>
            <IconCloseMenu />
            <span>Добавить поле поиска</span>
          </Btn>

          <div className={styles.filters}>
            <Btn
              id="filters-toggle"
              onClick={() => {
                setFiltersOpen(!isFiltersOpen);
              }}
            >
              <IconFilter id="filters-toggle-icon" />
              <span id="filters-toggle-text">Фильтры</span>
            </Btn>
            {isFiltersOpen && (
              <FiltersMenu
                filtersList={filtersList}
                selectedItems={columns}
                setSelectedItems={setColumns}
                filtersByDefault={filtersByDefault}
                isCitationEnabled={isCitationEnabled}
                setCitationEnabled={setCitationEnabled}
                accessType={accessType}
                setAccessType={setAccessType}
                onClose={() => {
                  setFiltersOpen(false);
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.btnGroup}>
          <Btn noBorder onClick={handleClearClick}>
            Очистить
          </Btn>
          <Btn className={styles.search} fillGreen onClick={handleSearchClick}>
            <span>Поиск</span>
            <IconSearch />
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

const SearchField = ({
  fieldsNames,
  value,
  onInput,
  onTypeChange,
  clearFieldValue,
}) => {
  return (
    <div className={styles.top}>
      <Select
        value={value.type}
        fieldID={value.id}
        fieldsNames={fieldsNames}
        onTypeChange={onTypeChange}
      />
      <input
        name={value.id}
        className={styles.input}
        placeholder="Поиск..."
        value={value.value}
        onChange={onInput}
      />
      <button
        className={styles.clearField}
        onClick={() => {
          clearFieldValue(value.id);
        }}
      >
        <IconCloseMenu />
      </button>
    </div>
  );
};

const Select = ({ value, fieldID, fieldsNames, onTypeChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, (e) => {
    if (!e.target.id.includes("select-toggle")) {
      setMenuOpen(false);
    }
  });

  return (
    <div className={styles.select}>
      <button
        id="select-toggle"
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
      >
        <span id="select-toggle-text">{value.name}</span>
        <IconArrowDown id="select-toggle-icon" />
      </button>
      {isMenuOpen && (
        <SelectMenu
          menuRef={menuRef}
          items={fieldsNames}
          fieldID={fieldID}
          onTypeChange={onTypeChange}
          closeMenu={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

const SelectMenu = ({ menuRef, items, fieldID, onTypeChange, closeMenu }) => {
  return (
    <div ref={menuRef} className={styles.selectMenu}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                onTypeChange(fieldID, item);
                closeMenu();
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
