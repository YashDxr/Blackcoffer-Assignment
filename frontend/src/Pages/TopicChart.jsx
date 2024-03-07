import { PolarArea } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

const TopicsPolarAreaChart = ({ data }) => {
  const topics = data.map((item) => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map((item) => item.relevance),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Topics Chart
      </Typography>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
