import { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "../Pages/IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import RegionChart from "../Pages/RegionChart";
import RelevanceBubbleChart from "../Pages/Relevance";
import TopicsRadarChart from "../Pages/TopicChart";
import PieChart from "../Pages/SectorChart";
import CountryChart from "../Pages/Country";
import LikelihoodRadarChart from "../Pages/LikelihoodChart";
// import { Grid, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

Chart.register(CategoryScale);

const AllRoutes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:3000";
      try {
        const response = await axios.get(`${API_URL}/data/visual`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<CountryChart data={data} />} />
        <Route path="/intensity" element={<IntensityChart data={data} />} />
        <Route
          path="/likelihood"
          element={<LikelihoodRadarChart data={data} />}
        />
        <Route path="/region" element={<RegionChart data={data} />} />
        <Route
          path="/relevance"
          element={<RelevanceBubbleChart data={data} />}
        />
        <Route path="/sector" element={<PieChart data={data} />} />
        <Route path="/topic" element={<TopicsRadarChart data={data} />} />
      </Routes>
      {/* <IntensityChart data={data} />
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius={20}
          >
            <RegionChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius={20}
          >
            <TopicsRadarChart data={data} />
          </Box>
        </Grid>
      </Grid>
      <RelevanceBubbleChart data={data} />
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius={20}
          >
            <PieChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius={20}
          >
            <LikelihoodRadarChart data={data} />
          </Box>
        </Grid>
      </Grid>
      <CountryChart data={data} /> */}
    </div>
  );
};

export default AllRoutes;
