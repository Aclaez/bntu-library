import React, { useRef } from "react";
import styles from "./FiltersMenu.module.scss";
import Btn from "../../Btn/Btn";
import { IconCheck } from "../../../assets/icons/icons";
import { useClickOutside } from "@react-hookz/web";

function FiltersMenu({
  filtersList,
  selectedItems,
  setSelectedItems,
  filtersByDefault,
  isCitationEnabled,
  setCitationEnabled,
  accessType,
  setAccessType,
  onClose,
}) {
  const removeItem = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.accessor !== id));
  };
  const addItem = (id) => {
    const filter = filtersList.find((item) => item.id === id);
    console.log(filter);
    setSelectedItems((prev) => [
      ...prev,
      { Header: filter.text, accessor: filter.id },
    ]);
  };

  const handleFilterClick = (id) => {
    console.log(id);
    const isSelected = selectedItems.some((item) => item.accessor === id);
    isSelected ? removeItem(id) : addItem(id);
  };

  const isSelectedByDefault =
    selectedItems.length === filtersByDefault.length &&
    filtersByDefault.every((filter) =>
      selectedItems.some((item) => filter.id === item.accessor)
    );

  const isSelectedAll = filtersList.every((filter) =>
    selectedItems.some((item) => filter.id === item.accessor)
  );

  const setFiltersByDefault = () => {
    setSelectedItems(() =>
      filtersByDefault.map((filter) => ({
        Header: filter.text,
        accessor: filter.id,
      }))
    );
  };

  const setAllFilters = () => {
    setSelectedItems(() =>
      filtersList.map((filter) => ({
        Header: filter.text,
        accessor: filter.id,
      }))
    );
  };

  const setDefaultSettings = () => {
    setFiltersByDefault();
    setCitationEnabled(false);
    setAccessType("green");
  };

  const menuRef = useRef(null);
  useClickOutside(menuRef, (e) => {
    if (!e.target.id.includes("filters-toggle")) {
      onClose();
    }
  });

  return (
    <div ref={menuRef} className={styles.filtersMenu}>
      <h4 className={styles.title}>Фильтры</h4>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.columns}>
            <h6>Колонки</h6>
            <div className={styles.btnGroup}>
              <Btn onClick={setFiltersByDefault} gray={!isSelectedByDefault}>
                По умолчанию
              </Btn>
              <Btn onClick={setAllFilters} gray={!isSelectedAll}>
                Все колонки
              </Btn>
            </div>
          </div>

          <div className={styles.fieldFilters}>
            {filtersList &&
              filtersList.map((filter) => (
                <Checkbox
                  key={filter.id}
                  id={filter.id}
                  text={filter.text}
                  isChecked={selectedItems.some(
                    (item) => item.accessor === filter.id
                  )}
                  onClick={() => {
                    handleFilterClick(filter.id);
                  }}
                />
              ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.access}>
            <h6>Открытый доступ</h6>
            <div className={styles.btnGroup}>
              <Btn
                gray={accessType !== "gold"}
                onClick={() => {
                  setAccessType("gold");
                }}
              >
                Gold
              </Btn>
              <Btn
                gray={accessType !== "green"}
                onClick={() => {
                  setAccessType("green");
                }}
              >
                Green
              </Btn>
              <Btn
                gray={accessType !== "hybrid"}
                onClick={() => {
                  setAccessType("hybrid");
                }}
              >
                Hybrid
              </Btn>
            </div>
          </div>
          <div className={styles.citation}>
            <h6>Цитирование</h6>
            <Btn
              gray={!isCitationEnabled}
              onClick={() => {
                setCitationEnabled(!isCitationEnabled);
              }}
            >
              Только с цитированием
            </Btn>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Btn onClick={setDefaultSettings} noBorder>
          Сбросить фильтры
        </Btn>
        <Btn fillGreen onClick={onClose}>
          Применить
        </Btn>
      </div>
    </div>
  );
}

export default FiltersMenu;

const Checkbox = ({ id, text, onClick, isChecked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`${id}`}
        checked={isChecked}
        onChange={onClick}
      />
      <label htmlFor={`${id}`}>
        <div className={styles.visibleCheckbox}>
          <IconCheck />
        </div>
        <p className={styles.checkboxText}>{text}</p>
      </label>
    </div>
  );
};
