import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

const LikelihoodRadarChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor: "rgba(79, 59, 169, 0.7)",
        borderColor: "rgba(79, 59, 169, 1)",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(79, 59, 169, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <div>
      <Box
        borderRadius={20}
        pt={6}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        // mt={50}
        pb={100}
        bgcolor="background.paper"
        maxHeight={700}
        overflow="hidden"
      >
        <Typography variant="h6" gutterBottom ml={2}>
          Likelihood Chart
        </Typography>
        <Radar data={chartData} options={chartOptions} />
      </Box>
    </div>
  );
};

export default LikelihoodRadarChart;
