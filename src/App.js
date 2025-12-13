import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import CalculatorPage from "./pages/CalculatorPage";
import BMIPage from "./pages/BMIPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/bmi" element={<BMIPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;