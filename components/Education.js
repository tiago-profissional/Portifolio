const Education = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "0%", left: "25%", transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <div className="row justify-content-between">

          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              <p className="mil-upper mil-mb-30">Education</p>
              <h2 className="mil-up mil-mb-60">Developer Background</h2>

              <p>
                Web developer focused on React, PHP, MySQL and WordPress,
                building modern full-stack applications.
              </p>
            </div>
          </div>

          <div className="col-xl-6">

            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="#" className="mfp-image">+</a>
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Full Stack Development
                </p>

                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2024 <span className="mil-accent">to</span> Present
                </p>

                <p>
                  Building applications with React, PHP API and MySQL.
                </p>
              </div>
            </div>

            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="#" className="mfp-image">+</a>
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Frontend Development
                </p>

                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2023 <span className="mil-accent">to</span> 2024
                </p>

                <p>
                  Interfaces with HTML, CSS, Sass, Bootstrap and React.
                </p>
              </div>
            </div>

            <div className="mil-icon-box">
              <div className="mil-text-icon">
                <a href="#" className="mfp-image">+</a>
              </div>

              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  WordPress Development
                </p>

                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2024 <span className="mil-accent">to</span> Present
                </p>

                <p>
                  Dynamic sites with WordPress, custom posts and Elementor.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;