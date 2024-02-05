import "../styles/ErrorScreen.css";

export const ErrorScreen = ({ errorMessage, children }) => {
    return (
        <div id="wrapper-error">
            <h1 id="error-message">{errorMessage}</h1>
            {children}
        </div>
    );
};
