/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./LoadingScreen.module.css";
import sun from "../../assets/sun.png";

const LoadingScreen = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sunDiv}>
        <img
          src={sun}
          alt=""
          width="200px"
          height="200px"
          className={styles.rotate}
        />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
