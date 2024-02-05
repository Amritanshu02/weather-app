import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";
import BasicLineChart from "../components/BasicLineChart";

import "../styles/Home.css";

export const Home = () => {
    const [cityInput, setCityInput] = useState("Lucknow");
    const [triggerFetch, setTriggerFetch] = useState(true);
    const [weatherData, setWeatherData] = useState();
    const [unitSystem, setUnitSystem] = useState("metric");

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=9fd7dfa518bf64561459e7b7a7501c38`);
                const data = await res.json();

                if (res.ok) {
                    setWeatherData({ ...data });
                } else {
                    // Handle error here if needed
                    console.error("Error fetching weather data:", data.message);
                }

                setCityInput("");
            } catch (error) {
                console.error("Error during fetch:", error.message);
            }
        };

        getData();
    }, [triggerFetch]);


    const changeSystem = () =>
        unitSystem === "metric"
            ? setUnitSystem("imperial")
            : setUnitSystem("metric");

    return weatherData && !weatherData.message ? (
        <div id="wrapper-home">
            <MainCard
                city={weatherData.name}
                country={weatherData.sys.country}
                description={weatherData.weather[0].description}
                iconName={weatherData.weather[0].icon}
                unitSystem={unitSystem}
                weatherData={weatherData}
            />
            <ContentBox>
                <Header>
                    <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
                    <Search
                        placeHolder="Search a city..."
                        value={cityInput}
                        onFocus={(e) => {
                            e.target.value = "";
                            e.target.placeholder = "";
                        }}
                        onChange={(e) => setCityInput(e.target.value)}
                        onKeyDown={(e) => {
                            e.keyCode === 13 && setTriggerFetch(!triggerFetch);
                            e.target.placeholder = "Search a city...";
                        }}
                    />
                </Header>
                <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
                <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
                <BasicLineChart />
            </ContentBox>
        </div>
    ) : weatherData && weatherData.message ? (
        <ErrorScreen errorMessage="City not found, try again!">
            <Search
                onFocus={(e) => (e.target.value = "")}
                onChange={(e) => setCityInput(e.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
            />
        </ErrorScreen>
    ) : (
        <LoadingScreen loadingMessage="Loading data..." />
    );
};

export default Home;
