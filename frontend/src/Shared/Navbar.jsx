import { AppBar, Toolbar, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between">
          <div className="flex space-x-2">
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/country")}>
              CountryVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/intensity")}>
              IntensityVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/likelihood")}>
              LikelihoodVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/region")}>
              RegionVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/relevance")}>
              RelevanceVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/sector")}>
              SectorVisual
            </Button>
            <Button color="inherit" onClick={() => navigate("/topic")}>
              TopicVisual
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
