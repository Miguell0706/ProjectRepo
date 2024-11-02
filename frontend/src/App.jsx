import { Routes, Route } from "react-router-dom";
import GrowthPage from "./pages/GrowthPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GrowthPage />} />
      </Routes>
    </>
  );
}

export default App;
