import React from 'react'

function Portfolio() {
  return (
    <div>
      {/* Portfolio */}
      <div
        className="container-fluid d-flex flex-column flex-md-row portfolio"
        style={{ height: "140vh" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-8 col-sm-12 skills d-flex flex-column align-items-start justify-content-center p-5">
          <div className="Border d-flex align-items-center mb-3">
            <i className="fas fa-grip-horizontal text-white fa-2x me-3"></i>
            <h5 className="text-white mt-2">PORTFOLIO</h5>
          </div>
          <h1 className="text-white text-start mb-3">
            Featured <span className="text-info">Projects</span>
          </h1>
          <div className="container-fluid text-white">
            <div className="row">
              {/* Project 1 */}
              <div className="col-md-6 col-sm-12 d-flex justify-content-center fullcard">
                <div className="card project-card mb-4">
                  <div className="image-container">
                    <img
                      src="/autogallery.png"
                      className="card-img-top project-image"
                      alt="Moonex WordPress Theme"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        Html
                      </span>
                      <span className="cold-md-4 badge bg-light text-dark mx-1">
                        CSS
                      </span>
                      <span className="col-md-4 badge bg-light text-dark">
                        Bootstrap
                      </span>
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        JavaScript
                      </span>
                    </div>
                    <h5 className="card-title text-center text-white-50">
                      Auto Gallery
                    </h5>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="col-md-6 col-sm-12 d-flex justify-content-center fullcard">
                <div className="card project-card mb-4">
                  <div className="image-container">
                    <img
                      src="/portfolio.png"
                      className="card-img-top project-image"
                      alt="Taskly Dashboard"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        Html
                      </span>
                      <span className="col-md-4 badge bg-light text-dark mx-1">
                        CSS
                      </span>
                      <span className="col-md-4 badge bg-light text-dark">
                        Boostrap
                      </span>
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        JavaScript
                      </span>
                      <span className="col-md-4 badge bg-light text-dark mx-1">
                        React
                      </span>
                    </div>
                    <h5 className="card-title text-center text-white-50">
                      My-Portfolio
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Project 1 */}
              <div className="col-md-6 col-sm-12 d-flex justify-content-center fullcard">
                <div className="card project-card mb-4">
                  <div className="image-container">
                    <img
                      src="/lovewhitt.png"
                      className="card-img-top project-image"
                      alt="Moonex WordPress Theme"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        Html
                      </span>
                      <span className="col-md-4 badge bg-light text-dark mx-1">
                        CSS
                      </span>
                      <span className="col-md-4 badge bg-light text-dark">
                        Bootstrap
                      </span>
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        JavaScript
                      </span>
                    </div>
                    <h5 className="card-title text-center text-white-50">
                      LoveWhitt
                    </h5>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="col-md-6 col-sm-12 d-flex justify-content-center fullcard">
                <div className="card project-card mb-4">
                  <div className="image-container">
                    <img
                      src="/uline.png"
                      className="card-img-top project-image"
                      alt="Taskly Dashboard"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        Html
                      </span>
                      <span className="col-md-4 badge bg-light text-dark mx-1">
                        CSS
                      </span>
                      <span className="col-md-4 badge bg-light text-dark">
                        Bootstrap
                      </span>
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                      <span className="col-md-4 badge bg-light text-dark">
                        JavaScript
                      </span>
                    </div>
                    <h5 className="card-title text-center text-white-50">
                      Uline
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
