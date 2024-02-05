import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import "../styles/DateAndTime.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
    return (
        <div id="wrapper-date">
            <h2>
                {`${getWeekDay(weatherData)}, ${getTime(
                    unitSystem,
                    weatherData.dt,
                    weatherData.timezone
                )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
            </h2>
        </div>
    );
};
