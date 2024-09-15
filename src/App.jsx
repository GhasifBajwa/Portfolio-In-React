import "./App.css";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Specialities from "./Specialities.jsx";
import Skills from "./Skills.jsx";
import Portfolio from "./Portfolio.jsx";
import Pricing from "./Pricing.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div>
      <nav>
        <div
          className="navigation-icons position-fixed d-none d-md-flex flex-column align-items-center justify-content-center"
          style={{ right: "20px", top: "50%", transform: "translateY(-50%)" }}
        >
          {/* Use anchor links with section ids */}
          <a href="#header" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-home"></i>
          </a>
          <a href="#about" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-user"></i>
          </a>
          <a href="#resume" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-briefcase"></i>
          </a>
          <a href="#specialities" className="btn btn-outline-light mb-3 w-100">
            <i className="fab fa-squarespace"></i>
          </a>
          <a href="#skills" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-shapes"></i>
          </a>
          <a href="#portfolio" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-grip-horizontal"></i>
          </a>
          <a href="#pricing" className="btn btn-outline-light mb-3 w-100">
            <i className="fas fa-dollar-sign"></i>
          </a>
          <a href="#contact" className="btn btn-outline-light w-100">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </nav>

      {/* Sections */}
      <div>
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="specialities">
          <Specialities />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
