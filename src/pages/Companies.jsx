import CompanyList from "../components/CompanyList";

function Companies() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Företag</h1>
      <p>Lista över företag kommer att visas här.</p>
      <CompanyList />
    </div>
  );
}

export default Companies;
