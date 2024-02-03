import styles from "../styles/Header.css";

export const Header = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
