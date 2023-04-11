import { Box, Divider } from "@mui/material";
import React from "react";
import { iconsUrl } from "./utils";

function FutureWeather({ title, items }) {
  return (
    <Box>
      <Box>
        <p
          style={{
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          {title}
        </p>
      </Box>
      <Divider flexItem sx={{ borderColor: "black" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media screen and (max-width: 600px)": {
            width: "100%",
            overflow: "auto",
          },
        }}
      >
        {items.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <p>{item.title}</p>
            <img
              src={iconsUrl(item.icon)}
              style={{ width: "12", margin: "1rem 0rem" }}
              alt=""
            />
            <p>{`${item.temp.toFixed()}°`}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FutureWeather;
