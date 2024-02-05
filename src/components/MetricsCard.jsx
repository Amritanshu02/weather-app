// import Image from "next/image";
import "../styles/MetricsCard.css";

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
    return (
        <div id="wrapper-card">
            <p>{title}</p>
            <div id="card-content">
                <img src={iconSrc} width="100px" height="100px" alt="weatherIcon" />
                <div>
                    <h1>{metric}</h1>
                    <p>{unit}</p>
                </div>
            </div>
        </div>
    );
};
