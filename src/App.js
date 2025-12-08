import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;