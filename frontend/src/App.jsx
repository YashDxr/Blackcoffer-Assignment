import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
