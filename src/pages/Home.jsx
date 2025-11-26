import HeroSection from "../components/HeroSection";
import RequestForm from "../components/RequestForm";
import CompanyMap from "../components/CompanyMap";
import VideoRecorder from "../components/VideoRecorder";

function Home() {
  return (
    <div className="container py-3 py-md-4">
      <HeroSection />
      <RequestForm />

      {/* Video Recorder Section */}
      <div className="mt-4">
        <h2>Record Your Video</h2>
        <VideoRecorder />
      </div>

      {/* Company Map */}
      <div className="mt-4">
        <h2>Companies</h2>
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
          <div className="card-body p-3 p-md-4">
            <div style={{ width: "100%", height: "75vh", borderRadius: 12, overflow: "hidden" }}>
              <CompanyMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
