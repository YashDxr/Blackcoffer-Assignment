import { Bubble } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

const RelevanceBubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
        })),
      },
      {
        label: "Intensity",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Impact",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Relevance Chart
      </Typography>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default RelevanceBubbleChart;
