import React from "react";

function Pricing() {
    return (
        <div>
            {/* Pricing */}
            <div
                className="container-fluid d-flex flex-column flex-md-row"
                style={{ height: "140vh" }}
            >
                <div className="col-md-4"></div>
                <div className="col-md-8 col-sm-12 pricing d-flex flex-column align-items-start justify-content-center p-5">
                    <div className="Border d-flex align-items-start mb-5">
                        <i className="fas fa-dollar-sign text-white fa-2x me-3"></i>
                        <h5 className="text-white mt-2">PRICING</h5>
                    </div>
                    <h1 className="text-white mb-3">
                        My <span className="text-info">Pricing</span>
                    </h1>
                    <div className="row d-flex align-items-start justify-content-center">
                        <div className="col-md-6 col-sm-12 mt-3">
                            <div className="card pricing-card p-4">
                                <div className="card-body">
                                    <h3 className="text-white text-center">BASIC</h3>
                                    <p className="text-secondary text-center">
                                        Have design ready to build? <br /> or small budget
                                    </p>
                                    <h2 className="text-info text-center">$49 / hours</h2>
                                    <hr className="my-3 text-secondary" />
                                    <ul className="text-white">
                                        <li>
                                            Create initial blueprints for website structure and
                                            functionality
                                        </li>
                                        <li>
                                            Design visually appealing and user-friendly interfaces
                                        </li>
                                        <li>
                                            Build custom websites or web applications using Html, CSS,
                                            Bootstrap, Javascript, or React
                                        </li>
                                        <li>Collaborate effectively from anywhere in the world</li>
                                        <li>
                                            Focus on project completion during business days to ensure
                                            timely delivery
                                        </li>
                                        <li>
                                            Provide 6 months of post-launch maintenance and assistance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 mt-3">
                            <div className="card pricing-card p-4">
                                <div className="card-body">
                                    <h3 className="text-white text-center">PREMIUM</h3>
                                    <p className="text-secondary text-center">
                                        Not have any design? <br /> Leave it for me
                                    </p>
                                    <h2 className="text-info text-center">$99 / hours</h2>
                                    <hr className="my-3 text-secondary" />
                                    <ul className="text-white">
                                        <li>Don't need wireframe or anything</li>
                                        <li>
                                            Design visually appealing and user-friendly interfaces
                                        </li>
                                        <li>
                                            Build custom websites or web applications using Html, CSS,
                                            Bootstrap, Javascript, or React
                                        </li>
                                        <li>Collaborate effectively from anywhere in the world</li>
                                        <li>Work with both weekend</li>
                                        <li>
                                            Provide 6 months of post-launch maintenance and assistance
                                        </li>
                                        <li>
                                            Prioritize your project to ensure timely delivery and
                                            satisfaction
                                        </li>
                                        <li>
                                            Offer customer care gifts as a token of appreciation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
