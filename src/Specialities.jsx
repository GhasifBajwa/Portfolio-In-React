import React from "react";

function Specialities() {
  return (
    <div>
      {/* Specialties */}
      <div
        className="container-fluid d-flex flex-column flex-md-row"
        style={{ height: "110vh" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-8 col-sm-12 specialties d-flex flex-column align-items-start justify-content-center p-5">
          <div className="Border d-flex align-items-center mb-5">
            <i className="fab fa-squarespace text-white fa-2x me-3"></i>
            <h5 className="text-white mt-2">EXPERIENCE</h5>
          </div>
          <h1 className="text-white text-md-start mb-5">
            My <span className="text-info">Specializations</span>
          </h1>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card specialization-card p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="text-white">Website Design</h3>
                    <p className="text-secondary">
                      I've brought unique digital product ideas to life using
                      HTML, CSS, and JavaScript. I craft visually appealing and
                      user-friendly interfaces that seamlessly translate from
                      design concepts to functional websites.
                    </p>
                    <p className="text-info">6 PROJECTS</p>
                  </div>
                  <div>
                    <i className="fas fa-vector-square text-info fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card specialization-card p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="text-white">Website Development</h3>
                    <p className="text-secondary">
                      I develop websites using HTML, CSS, JavaScript, and
                      frameworks like Bootstrap, and React. My expertise allows
                      me to create custom, responsive, and high-performance web
                      applications.
                    </p>
                    <p className="text-info">12 PROJECTS</p>
                  </div>
                  <div>
                    <i className="fas fa-code text-info fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialities;
