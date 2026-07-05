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
                  I am a Brazilian developer focused on building real-world web
                  applications with React, Next.js, TypeScript, Node.js, PHP,
                  MySQL and WordPress. I create projects that simulate
                  production platforms, including dashboards, APIs, databases
                  and responsive interfaces.
                </p>

                <p className="mil-mb-30">
                  I developed projects such as a job board platform, a React +
                  PHP vacancies system and AI-powered features for resume
                  analysis, job matching and smart candidate feedback. My goal
                  is to combine clean interfaces, backend logic and AI tools to
                  solve practical problems.
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
                    Full Stack Developer{" "}
                    <span className="mil-accent">and</span> AI-Powered
                    Applications Builder
                  </p>

                  <h2 className="mil-up mil-mb-30">Tiago Ramon</h2>

                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          I build modern web applications using React, Next.js,
                          TypeScript, Node.js, PHP, MySQL and WordPress. My work
                          includes job board platforms, dashboards, API
                          integrations, responsive interfaces and AI-powered
                          features.
                        </p>

                        <p className="mil-mb-30">
                          My goal is to grow as a full stack developer by
                          building practical products that solve real problems,
                          combining clean user interfaces, structured backend
                          logic and modern AI tools.
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