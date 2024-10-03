import React from "react";

function About() {
  return (
    <div>
      {/* About */}
      <div
        className="container-fluid d-flex flex-column flex-md-row mt-5"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4"></div>
        {/* Right Content Section */}
        <div className="col-md-8 col-sm-12 about d-flex flex-column align-items-start justify-content-center p-5">
          <div className="Border d-flex align-items-center mb-5">
            <i className="fas fa-user text-white fa-2x me-3"></i>
            <h5 className="text-white mt-2">ABOUT</h5>
          </div>
          <h1 className="display-4 text-white text-md-start">
            Every great design begins with an even{" "}
            <span className="text-info">better story</span>
          </h1>
          <p className="lead mt-4 text-white text-md-start">
            With over 3 years of experience as a web designer and developer,
            I've honed my skills across a wide range of projects. From building
            dynamic websites for startups to collaborating with agencies on
            complex digital solutions, I've consistently delivered high-quality
            results. My passion for crafting intuitive and visually appealing
            interfaces drives me to stay up-to-date with the latest technologies
            and design trends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
