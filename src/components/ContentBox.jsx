import styles from "../styles/ContentBox.css";

export const ContentBox = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
