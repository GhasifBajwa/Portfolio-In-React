import React from 'react'

function Skills() {
    return (
        <div>
            {/* Skills */}
            <div
                className="container-fluid d-flex flex-column flex-md-row"
                style={{ height: "110vh" }}
            >
                <div className="col-md-4"></div>
                <div className="col-md-8 col-sm-12 skills d-flex flex-column align-items-start justify-content-center p-5">
                    <div className="Border d-flex align-items-center mb-5">
                        <i className="fas fa-shapes text-white fa-2x me-3"></i>
                        <h5 className="text-white mt-2">SKILLS</h5>
                    </div>
                    <h1 className="text-white text-center mb-3">
                        My <span className="text-info">Advantages</span>
                    </h1>
                    <div className="row">
                        <div className="col-6 col-md-4 mb-2">
                            <div className="advantage-item">
                                <i className="fab fa-html5 text-white fa-4x mb-3"></i>
                                <h3 className="text-info">98%</h3>
                                <p className="text-white">Html</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 mb-2">
                            <div className="advantage-item">
                                <i className="fab fa-css3 text-white fa-4x mb-3"></i>
                                <h3 className="text-info">95%</h3>
                                <p className="text-white">CSS</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 mb-2">
                            <div className="advantage-item">
                                <i className="fab fa-bootstrap text-white fa-4x mb-3"></i>
                                <h3 className="text-info">80%</h3>
                                <p className="text-white">Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="advantage-item">
                                <i className="fab fa-js text-white fa-4x mb-3"></i>
                                <h3 className="text-info">90%</h3>
                                <p className="text-white">Javascript</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="advantage-item">
                                <i className="fab fa-react text-white fa-4x mb-3"></i>
                                <h3 className="text-info">86%</h3>
                                <p className="text-white">React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
