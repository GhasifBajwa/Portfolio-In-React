import React from "react";

function Header() {
  return (
    <div>
      {/* Header */}
      <div
        className="container-fluid d-flex flex-column flex-md-row header"
        style={{ height: "100vh" }}
      >
        <div
          className="col-md-4 col-sm-12 left-section text-white d-flex flex-column align-items-center justify-content-center p-4"
          style={{ height: "100vh" }}
        >
          <div className="profile-card text-center">
            <img
              src="/G.png"
              alt="Profile"
              className="rounded-circle mb-3 img-fluid"
            />
            <h2>Ghasif</h2>
            <p>Web Designer & Developer</p>
            <p>Based in Pakistan, Bahawalpur</p>
            <p>
              <strong>ghasif3382@gmail.com</strong>
            </p>
            <div className="social-icons d-flex justify-content-center mt-3">
              <a href="https://github.com/GhasifBajwa" className="btn btn-outline-light mx-2">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://wa.me/message/XWK3MNSWLFMVN1" className="btn btn-outline-light mx-2">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/ghasifbajwa/" className="btn btn-outline-light mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61551224305033" className="btn btn-outline-light mx-2">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <a href="https://wa.me/qr/7Z46N3RZNGPLO1">
            <button className="btn btn-info mt-4">HIRE ME!</button>
            </a>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 centersection d-flex flex-column align-items-start justify-content-center p-5">
          <div className="Border d-flex mb-5 mt-5">
            <i className="fas fa-home text-white fa-2x me-3"></i>
            <h5 className="text-white mt-2">INTRODUCE</h5>
          </div>
          <h1 className="display-4 text-white text-start">
            Say Hi from <span className="text-info">Ghasif</span>,<br />
            Web Designer and Developer
          </h1>
          <p className="lead mt-4 text-white mx-md-5 text-start">
            I design and code beautifully simple things and I love what I do.
            <br />
            Just simple like that!
          </p>
        </div>
      </div>
      {/* Project Section */}
      <div
        className="container-fluid d-flex flex-column flex-md-row projects"
        style={{ height: "50vh" }}
      >
        <div className="col-md-4"></div>
        {/* Right Content Section */}
        <div className="col-md-8 col-sm-12 about d-flex flex-column align-items-start justify-content-center p-5">
          <div className="container d-flex flex-column">
            <div className="row mb-5 circle">
              <div className="d-flex justify-content-center align-items-center">
                <a
                  to="#portfolio"
                  className="go-to-project-btn scroll-to scroll-animation"
                  data-animation="rotate_up"
                  style={{
                    transform: "translate(0px, 180px) rotate(10deg)",
                  }}
                >
                  <img
                    decoding="async"
                    src="/round-text.png"
                    alt="Round Text"
                  />
                </a>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
            <div className="row mt-5">
              <div className="stats-container d-flex align-items-start justify-content-evenly">
                <div className="col-md-3">
                  <h1 className="stat-value">3+</h1>
                  <p className="stat-desc">Years of Experience</p>
                </div>
                <div className="col-md-3">
                  <h1 className="stat-value">12+</h1>
                  <p className="stat-desc">Projects completed in 1 countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
