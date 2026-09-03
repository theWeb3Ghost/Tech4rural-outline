import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Week from "./pages/Week";
import Downloads from "./pages/Downloads";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/week/:weekNumber" element={<Week />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </Layout>
  );
}
