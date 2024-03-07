import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CountryChart = ({ data }) => {
  const theme = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    );
    const sectors = {};

    countryData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map((sector) => sectors[sector]);

    const chartBackgroundColor = "rgba(79, 59, 169, 0.7)";

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedCountry, data, theme]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box p={6} boxShadow={4} bgcolor={"white"} margin={10}>
      <Typography variant="h6" gutterBottom>
        Country Chart
      </Typography>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        mb={4}
        sx={{ minWidth: "200px" }}
      >
        <MenuItem value="United States of America">
          United States of America
        </MenuItem>
        <MenuItem value="Mexico">Mexico</MenuItem>
        <MenuItem value="Nigeria">Nigeria</MenuItem>
        <MenuItem value="Lebanon">Lebanon</MenuItem>
        <MenuItem value="Russia">Russia</MenuItem>
        <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
      </Select>
      <Box height="500px" width="100%">
        {chartData && <Bar data={chartData} />}
      </Box>
    </Box>
  );
};

export default CountryChart;