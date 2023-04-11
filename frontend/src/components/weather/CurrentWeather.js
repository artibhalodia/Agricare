import { Box } from "@mui/material";
import React from "react";
import { formatToLocalTime, iconsUrl } from "../weather/utils";
import {
  WbSunny,
  WbTwilight,
  Thermostat,
  Opacity,
  Air,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";

const commonStyle = {
  display: "flex",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: "500",
  justifyContent: "center",
  alignItems: "center",
};

const mediaFontStyle = {
  "@media screen and (max-width: 600px)": {
    fontSize: "1rem",
  },
};

function CurrentWeather({
  weather: {
    dt,
    timezone,
    name,
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <p style={{ paddingLeft: "1rem" }}>{formatToLocalTime(dt, timezone)}</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        {`${name}, ${country}`}
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            paddingTop: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "500",
            justifyContent: "center",
            alignItems: "center",
            color: "rgba(3, 0, 122, 1);",
          }}
        >
          {details}
        </Box>

        <Box
          sx={{
            display: "flex",
            color: "black",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src={iconsUrl(icon)} alt="" />
          <p style={{ fontSize: "3rem" }}>{`${temp.toFixed()}°`}</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box sx={commonStyle}>
              <Thermostat />
              Real fell:
              <span>{`${feels_like.toFixed()}°`}</span>
            </Box>
            <Box sx={commonStyle}>
              <Opacity />
              Humidity:
              <span>{`${humidity.toFixed()}%`}</span>
            </Box>
            <Box sx={commonStyle}>
              <Air />
              Wind:
              <span>{`${speed.toFixed()} km/h`}</span>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            color: "black",
            fontSize: "1rem",
            justifyContent: "center",
            margin: "auto",
            width: "80%",
            "@media screen and (max-width: 600px)": {
              width: "100%",
              fontSize: "0.8rem",
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              paddingRight: "1rem",
              "@media screen and (max-width: 600px)": {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingRight: "0",
              },
            }}
          >
            <WbSunny sx={mediaFontStyle} />
            <p>
              Rise:{" "}
              <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p>|</p>

            <WbTwilight sx={mediaFontStyle} />
            <p>
              Set: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              "@media screen and (max-width: 600px)": {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                "@media screen and (max-width: 600px)": {
                  opacity: "0",
                },
              }}
            >
              |
            </Box>

            <KeyboardDoubleArrowUp sx={mediaFontStyle} />
            <p>
              High: <span>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p>|</p>

            <KeyboardDoubleArrowDown sx={mediaFontStyle} />
            <p>
              Low: <span>{`${temp_min.toFixed()}°`}</span>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentWeather;
