import { useState } from "react";
import { Row, Col, Form, Container, Alert, Badge } from "react-bootstrap";
import JobCard from "../components/JobCard";
import { useApplications } from "../context/ApplicationContext";
import { jobs } from "../data/jobs";

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToApplications } = useApplications();

  // Get all unique categories
  const categories = ["all", ...new Set(jobs.map(job => job.category))];

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery === "" || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Available Jobs in Warm Countries</h1>
      
      {/* Stats */}
      <div className="text-center mb-4">
        <Badge bg="primary" className="me-2">{jobs.length} Jobs Available</Badge>
        <Badge bg="success" className="me-2">4 Countries</Badge>
        <Badge bg="info">Swedish Workers Only</Badge>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-4">
        <Row className="g-3">
          <Col md={8}>
            <Form.Control
              placeholder="Search jobs by title or location..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              size="lg"
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              size="lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </div>

      {/* Results */}
      {filteredJobs.length === 0 ? (
        <Alert variant="info" className="text-center">
          <h4>No jobs found</h4>
          <p>Try adjusting your search terms or check back soon for new opportunities.</p>
        </Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredJobs.map(job => (
            <Col key={job.id}>
              <JobCard job={job} onApply={addToApplications} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}