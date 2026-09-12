import React, { useState } from 'react';

export default function About(props) {
  // Dynamic accordion toggle tracking
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [feedback, setFeedback] = useState("");

  // Styling based on props mode from App.js
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#212529',
    backgroundColor: props.mode === 'dark' ? '#121212' : '#f8f9fa',
  };

  const cardStyle = {
    color: props.mode === 'dark' ? 'white' : '#212529',
    backgroundColor: props.mode === 'dark' ? '#1e1e1e' : '#ffffff',
    borderColor: props.mode === 'dark' ? '#333' : '#dee2e6'
  };

  const accordionHeaderStyle = {
    color: props.mode === 'dark' ? '#ffffff' : '#212529',
    backgroundColor: props.mode === 'dark' ? '#2b2b2b' : '#e9ecef',
  };

  const accordionBodyStyle = {
    color: props.mode === 'dark' ? '#e0e0e0' : '#333333',
    backgroundColor: props.mode === 'dark' ? '#1e1e1e' : '#ffffff',
  };

  return (
    <div className="container py-4 rounded" style={myStyle}>
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About LEXI-FORGE</h1>
        <p className="lead text-secondary">
          Empowering your daily text processing with speed, clarity, and precision.
        </p>
      </div>

      {/* Feature Statistics Cards */}
      <div className="row g-4 mb-5 text-center">
        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm" style={cardStyle}>
            <div className="card-body">
              <h2 className="card-title fw-bold text-primary">100% Free</h2>
              <p className="card-text">No hidden subscriptions, registrations, or usage limits.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm" style={cardStyle}>
            <div className="card-body">
              <h2 className="card-title fw-bold text-success">Instant</h2>
              <p className="card-text">Client-side rendering ensures zero processing delay for your data.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm" style={cardStyle}>
            <div className="card-body">
              <h2 className="card-title fw-bold text-warning">Secure</h2>
              <p className="card-text">Your text never leaves your browser. Safe, private processing always.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Dropdown Accordions */}
      <div className="accordion accordion-flush shadow-sm rounded mb-5" id="aboutAccordion">
        {/* Accordion Item 1 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${activeAccordion !== 1 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={accordionHeaderStyle}
              onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              TextUtils gives you a quick and efficient way to analyze your text based on word count, character count, and estimated reading speed. Whether writing blog posts, essays, or social media updates, accurate text analytics are right at your fingertips.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${activeAccordion !== 2 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={accordionHeaderStyle}
              onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
            >
              <strong>Free to Use & Lightweight</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              TextUtils is a completely free character-counter and text-manipulation tool. It provides instant word and character count stats for any given block of text, making it ideal for writing content with strict word/character limits.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={cardStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${activeAccordion !== 3 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={accordionHeaderStyle}
              onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              This utility software works smoothly in any modern web browser, such as Chrome, Firefox, Internet Explorer, Safari, and Opera. It easily processes text from essays, blog posts, spreadsheets, PDFs, books, and raw documents.
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Feature: Dynamic Feedback Counter */}
      <div className="p-4 rounded border text-center" style={cardStyle}>
        <h4 className="mb-3">Was this application useful to you?</h4>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-outline-success"
            onClick={() => setFeedback("Thank you for your positive feedback! 🎉")}
          >
            👍 Very Helpful
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setFeedback("Thanks! We are continuously improving TextUtils.")}
          >
            😐 Needs Improvement
          </button>
        </div>
        {feedback && <div className="mt-3 alert alert-info py-2" role="alert">{feedback}</div>}
      </div>
    </div>
  );
}