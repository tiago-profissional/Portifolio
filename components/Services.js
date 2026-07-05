const Services = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-10%", right: "20%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "20%", left: "-5%", transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <p className="mil-upper mil-mb-30">What I Build</p>
        <h2 className="mil-up mil-mb-60" style={{ fontSize: "42px" }}>
          Services
        </h2>

        <div className="row">
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-code" />
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Full Stack Web Development
                </p>

                <p>
                  Development of modern web applications using Next.js,
                  TypeScript, Node.js, Python, FastAPI and databases, with clean
                  architecture, API integration and responsive design.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-laptop-code" />
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Frontend Development
                </p>

                <p>
                  Responsive and modern interfaces using React, Next.js,
                  TypeScript, Tailwind CSS, Sass and Bootstrap, with focus on
                  usability, performance and clean user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-robot" />
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  AI-Powered Applications
                </p>

                <p>
                  Building intelligent features such as resume analysis, job
                  matching, smart recommendations, candidate feedback and
                  AI-assisted workflows inside web platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;