import { Routes, Route } from "react-router-dom";
import GrowthPage from "./pages/GrowthPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LogInPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Growth" element={<GrowthPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
