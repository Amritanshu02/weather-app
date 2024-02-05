// import Image from "next/image";
import { ctoF } from "../services/converters";
import "../styles/MainCard.css";

export const MainCard = ({
    city,
    country,
    description,
    iconName,
    unitSystem,
    weatherData,
}) => {
    return (
        <div id="wrapper-main">
            <h1 id="location">
                {city}, {country}
            </h1>
            <p id="description">{description}</p>
            <img src={`/icons/${iconName}.svg`} width="300px"
                height="300px" alt="weather icon" />
            <h1 id="temperature">
                {unitSystem === "metric"
                    ? Math.round(weatherData.main.temp)
                    : Math.round(ctoF(weatherData.main.temp))}
                °{unitSystem === "metric" ? "C" : "F"}
            </h1>
            <p>
                Feels like{" "}
                {unitSystem === "metric"
                    ? Math.round(weatherData.main.feels_like)
                    : Math.round(ctoF(weatherData.main.feels_like))}
                °{unitSystem === "metric" ? "C" : "F"}
            </p>
        </div>
    );
};
