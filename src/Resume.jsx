import React from "react";

function Resume() {
  return (
    <div>
      {/* Resume */}
      <div
        className="container-fluid d-flex flex-column flex-md-row"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-8 col-sm-12 experience d-flex flex-column align-items-start justify-content-center p-5">
          <div className="Border d-flex align-items-center mb-5">
            <i className="fas fa-briefcase text-white fa-2x me-3"></i>
            <h5 className="text-white mt-2">RESUME</h5>
          </div>
          <h1 className="text-white text-md-start mb-5">
            Education & <span className="text-info">Experience</span>
          </h1>
          <div className="timeline">
            <div className="timeline-item mb-2">
              <div className="timeline-dot bg-info"></div>
              <div className="timeline-content">
                <h5 className="text-info">2020 - Present</h5>
                <h3 className="text-white">Web Designer & Developer</h3>
                <p className="text-secondary">Freelance</p>
                <h3 className="text-white">Front-End React Developer</h3>
                <p className="text-secondary">Freelance</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot bg-info"></div>
              <div className="timeline-content">
                <h5 className="text-info">2013 - 2019</h5>
                <h3 className="text-white">Web Developer</h3>
                <p className="text-secondary">Freelance</p>
                <h3 className="text-white">Web Designer</h3>
                <p className="text-secondary">Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
