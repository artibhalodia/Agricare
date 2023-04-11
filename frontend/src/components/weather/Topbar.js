import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import { Box, Button, Divider } from "@mui/material";

const Header = ({ setUnits, units, setQuery }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    if (cityName.length > 0) {
      setQuery({ q: cityName });
    }
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        if (lat && lon) {
          setQuery({
            lat,
            lon,
          });
        } else {
          setQuery({ q: "halifax" });
        }
      });
    }
  };

  const handleUnitsChange = (e) => {
    const unit = e.currentTarget.name;
    console.log(unit);
    if (units !== unit) setUnits(unit);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          "@media screen and (max-width: 600px)": {
            width: "100%",
            flexDirection: "column",
            paddingLeft: "1rem",
          },
          margin: "auto",
          padding: "2rem 0rem",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <TextField
            fullWidth
            id="search-bar"
            className="text"
            onChange={(e) => setCityName(e.currentTarget.value)}
            label="Enter City name"
            variant="outlined"
            placeholder="Search..."
          />
          <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
            <SearchIcon
              sx={{ fill: "rgba(3, 0, 122, 1);", fontSize: "2rem" }}
            />
          </IconButton>
          <IconButton
            type="submit"
            aria-label="search"
            onClick={handleLocationClick}
          >
            <LocationOnIcon
              sx={{ fill: "rgba(3, 0, 122, 1);", fontSize: "2rem" }}
            />
          </IconButton>
        </form>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            name="metric"
            sx={{ fontSize: "1.5rem", color: "rgba(3, 0, 122, 1);" }}
            onClick={handleUnitsChange}
          >
            °C
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: "0.2rem", borderColor: "black" }}
          />
          <Button
            name="imperial"
            sx={{ fontSize: "1.5rem", color: "rgba(3, 0, 122, 1);" }}
            onClick={handleUnitsChange}
          >
            °F
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
