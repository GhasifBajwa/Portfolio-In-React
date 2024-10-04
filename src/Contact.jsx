import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these with your own EmailJS service ID, template ID, and user ID
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const userId = "YOUR_USER_ID";

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((result) => {
                alert("Message sent successfully!");
            })
            .catch((error) => {
                alert("Failed to send message on mail box, contact as on whatsapp");
            });
    };

    return (
        <div>
            <div className="container-fluid d-flex flex-column flex-md-row " style={{ height: "100vh" }}>
                <div className="col-md-4"></div>
                <div className="col-md-8 col-sm-12 contact d-flex flex-column align-items-start justify-content-center p-5">
                    <div className="Border d-flex align-items-center mb-4">
                        <i className="fas fa-envelope text-white fa-2x me-3"></i>
                        <h5 className="text-white mt-2">CONTACT</h5>
                    </div>
                    <h1 className="text-white mb-4">
                        Let's work <span className="text-info">Together!</span>
                    </h1>
                    <form className="mt-4" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="fullName"
                                    placeholder="Your Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    id="email"
                                    placeholder="Your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="budget"
                                    placeholder="A range budget for your project"
                                    value={formData.budget}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <textarea
                                    className="form-control custom-input"
                                    id="message"
                                    placeholder="Write your message here ..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="d-grid mt-3 mb-5">
                            <button type="submit" className="btn btn-info btn-lg">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
