import { Routes, Route } from "react-router-dom";
import GrowthPage from "./pages/GrowthPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GrowthPage />} />
        <Route path="/create" element={<GrowthPage />} />
      </Routes>
    </>
  );
}

export default App;
