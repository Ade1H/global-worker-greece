import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Companies from "./pages/Companies";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import WorkerMap from "./components/WorkerMap";

const SAMPLE_WORKERS = [
  { id: "w1", name: "Ava Johansson", lat: 57.7089, lng: 11.9746, country: "Sweden", city: "Gothenburg", skills: ["Cleaning", "Moving"], availability: "Full-time" },
  { id: "w2", name: "Yannis Papadopoulos", lat: 37.9838, lng: 23.7275, country: "Greece", city: "Athens", skills: ["Electrician", "Handyman"], availability: "Part-time" },
  { id: "w3", name: "Rojib", lat: 36.1911, lng: 44.0094, country: "Iraq", city: "Erbil", skills: ["Construction", "Driver"], availability: "Available now" },
];

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Page content */}
        <div className="flex-grow-1" style={{ minHeight: "100vh", marginLeft: "0", marginTop: "0" }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/workers"
              element={
                <div className="container py-4">
                  <h2 className="mb-3">Arbetare runt om i världen</h2>
                  <WorkerMap
                    workers={SAMPLE_WORKERS}
                    initialCenter={[20, 0]}
                    initialZoom={2}
                  />
                  <Workers />
                </div>
              }
            />

            <Route path="/companies" element={<Companies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
