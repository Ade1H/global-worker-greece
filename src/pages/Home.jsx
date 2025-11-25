import HeroSection from "../components/HeroSection";
import RequestForm from "../components/RequestForm";
import CompanyMap from "../components/CompanyMap";
import VideoRecorder from "../components/VideoRecorder"; // ✅ ADD THIS

// Sample workers (replace with real API data later)
const SAMPLE_WORKERS = [
  { id: "w1", name: "Ava Johansson", lat: 57.7089, lng: 11.9746, country: "Sweden", city: "Gothenburg", skills: ["Cleaning"], availability: "Full-time" },
  { id: "w2", name: "Yannis Papadopoulos", lat: 37.9838, lng: 23.7275, country: "Greece", city: "Athens", skills: ["Electrician"], availability: "Part-time" },
  { id: "w3", name: "Rojib", lat: 36.1911, lng: 44.0094, country: "Iraq", city: "Erbil", skills: ["Construction"], availability: "Available now" },
];

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <HeroSection />
      <RequestForm />

      {/* 🔴 VIDEO RECORDER SECTION */}
      <div style={{ marginTop: "40px" }}>
        <h2>Record Your Video</h2>
        <VideoRecorder />
      </div>

      {/* Worker Map */}
      <div style={{ marginTop: "40px" }}>
        <h2>Workers Around the World</h2>
        <CompanyMap
          workers={SAMPLE_WORKERS}
          initialCenter={[20, 0]}
          initialZoom={2}
        />
      </div>
    </div>
  );
}

export default Home;
