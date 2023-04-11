// Reference : https://github.com/theyashpatel/yt-react-weather-app

import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "./utils";
import Topbar from "./Topbar";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import { Box } from "@mui/material";

const WeatherPage = () => {
  const [query, setQuery] = useState({ q: "halifax" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchData();
  }, [query, units]);

  return (
    <Box>
      <Box
        sx={{
          margin: "auto",
          width: "60%",
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
          paddingTop: "1rem 0rem",
          marginBottom: "2rem",
          marginTop: "1rem",
          background: "rgba(3, 0, 122, 0.2);",
          boxShadow:
            "0 -5px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <>
          <Topbar setQuery={setQuery} units={units} setUnits={setUnits} />
        </>
        <>
          {weather && (
            <Box>
              <CurrentWeather weather={weather} />
              <FutureWeather title="hourly forecast" items={weather.hourly} />
              <FutureWeather title="daily forecast" items={weather.daily} />
            </Box>
          )}
        </>
      </Box>
    </Box>
  );
};

export default WeatherPage;
