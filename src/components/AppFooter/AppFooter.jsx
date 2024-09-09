/* eslint-disable react/jsx-no-target-blank */
import styles from "./AppFooter.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.spanIcon}>
        <a
          href="https://github.com/Parish-Gawari"
          target="_blank"
          style={{ color: "aqua" }}
        >
          <FaGithub />
        </a>
      </span>
      <span className={styles.spanIcon}>
        <a
          href="https://www.linkedin.com/in/parish-gawari-363806219"
          target="_blank"
          style={{ color: "aqua" }}
        >
          <FaLinkedin />
        </a>
      </span>
      <span className={styles.spanText}>Made By Parish &copy; 2023</span>
    </footer>
  );
};

export default AppFooter;
