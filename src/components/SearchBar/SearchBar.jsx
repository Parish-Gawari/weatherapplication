/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearchLocation } from "react-icons/fa";
const SearchBar = ({
  onSearchChangeHandler,
  searchBtnHandler,
  inputValue,
  isDisable,
  keyHandler,
}) => {
  const onSearchChange = (e) => {
    onSearchChangeHandler(e.target.value);
  };
  const onBtnClick = () => {
    searchBtnHandler();
  };
  return (
    <div className={styles.container}>
      <input
        value={inputValue}
        type="text"
        placeholder="Enter City or Country Name..."
        className={styles.searchField}
        onChange={onSearchChange}
        onKeyUp={keyHandler}
      />
      <button
        className={styles.searchBtn}
        disabled={isDisable}
        onClick={onBtnClick}
      >
        <FaSearchLocation />
      </button>
    </div>
  );
};

export default SearchBar;
