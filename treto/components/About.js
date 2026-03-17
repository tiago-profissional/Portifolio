import Link from "next/link";

const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-25%", right: "15%", transform: "rotate(-35deg)" }}
      />

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4">
            <div className="mil-about-person mil-mb-30">
              <img
                src="/img/fotohome.png"
                alt="Tiago Ramon"
                className="mil-avatar"
              />
            </div>
          </div>

          <div className="col-xl-7">
            <div className="row">
              <div className="col-xl-12">
                <p className="mil-upper mil-mb-30">
                  <span className="mil-accent">Hello</span>, my name is
                </p>

                <h2 className="mil-up mil-mb-60">Tiago Ramon</h2>

                <p className="mil-mb-30">
                  Brazilian developer with 1 year of experience building web
                  applications using PHP, React, Bootstrap, Sass and WordPress.
                  I also design interfaces and application flows using Figma
                  and system flowcharts before implementation.
                </p>

                <p className="mil-mb-30">
                  My experience includes building full stack applications with
                  PHP and MySQL on the backend, creating APIs, managing
                  databases and developing responsive interfaces with modern
                  frontend technologies. I focus on creating practical projects
                  that simulate real production platforms.
                </p>

                <div className="mil-buttons-frame">
                  <Link legacyBehavior href="/portfolio">
                    <a className="mil-button">View Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const About2 = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">
                  <div className="mil-about-person-2 mil-mb-30">
                    <img
                      src="/img/fotohome.png"
                      alt="Tiago Ramon"
                      className="mil-avatar"
                    />
                  </div>

                  <p className="mil-upper mil-mb-30">
                    WordPress <span className="mil-accent">and</span> Full Stack Developer
                  </p>

                  <h2 className="mil-up mil-mb-30">Tiago Ramon</h2>

                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          Developer focused on building modern web applications
                          using WordPress, React and PHP. I work with backend
                          development using PHP and MySQL, interface design in
                          Figma, and planning application architecture through
                          flowcharts and structured system design.
                        </p>

                        <img
                          src="/img/signature.png"
                          alt="signature"
                          className="mil-signature"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};