import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

function JobCard({ job, onApply }) {
  const { title, location, salary, description, requirements, benefits, image, duration } = job;

  return (
    <Card className="h-100 shadow-sm job-card">
      <div
        className="d-flex align-items-center justify-content-center p-3 bg-white"
        style={{ height: 200, overflow: "hidden" }}
      >
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ maxHeight: "100%", width: "auto" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="job-title fs-6">{title}</Card.Title>
        
        <div className="mb-2">
          <small className="text-muted d-flex align-items-center">
            <FaMapMarkerAlt className="me-1" /> {location}
          </small>
          <small className="text-muted d-flex align-items-center">
            <FaMoneyBillWave className="me-1" /> {salary}
          </small>
          <small className="text-muted d-flex align-items-center">
            <FaCalendarAlt className="me-1" /> {duration}
          </small>
        </div>
        
        <Card.Text className="small flex-grow-1">
          {description.substring(0, 100)}...
        </Card.Text>
        
        <div className="mt-auto">
          <div className="mb-2">
            <Badge bg="info" className="me-1">Requirements: {requirements.length}</Badge>
            <Badge bg="success">Benefits: {benefits.length}</Badge>
          </div>
          <Button 
            variant="primary" 
            onClick={() => onApply(job)}
            className="w-100 apply-btn"
          >
            Apply Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobCard;