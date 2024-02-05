import "../styles/UnitSwitch.css";

export const UnitSwitch = ({ onClick, unitSystem }) => {
    return (
        <div id="wrapper-unit">
            <button
                className={`switch ${unitSystem == "metric" ? "active" : "inactive"
                    }`}
                onClick={onClick}
            >
                Metric System
            </button>
            <button
                className={`switch ${unitSystem == "metric" ? "inactive" : "active"
                    }`}
                onClick={onClick}
            >
                Imperial System
            </button>
        </div >
    );
};
