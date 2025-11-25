import React from "react";
import RequestForm from "../components/RequestForm";

function Contact() {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-5">
          Fill out the form below and we will get back to you as soon as possible.
        </p>
      </div>

      <RequestForm />
    </div>
  );
}

export default Contact;
