const Skills = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: "15%", left: "7%" }} />
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-15%", right: "25%", transform: "rotate(-35deg)" }}
      />

      <div className="container">
        <div>
          <p className="mil-upper mil-mb-30">
            My great <span className="mil-accent">work</span>
          </p>
          <h2 className="mil-up mil-mb-60">Technical Skills</h2>
        </div>

        <div className="row">
          <div className="col-xl-2" />

          <div className="col-xl-10">
            <div className="row">
              {/* REACT */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fab fa-react" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">React</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "80%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          80%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEXT JS */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <span style={{ fontWeight: "700", fontSize: "24px" }}>
                        N
                      </span>
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">Next.js</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "70%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          70%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TYPESCRIPT */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <span style={{ fontWeight: "700", fontSize: "22px" }}>
                        TS
                      </span>
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">TypeScript</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "65%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          65%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NODE JS */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fab fa-node-js" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">Node.js</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "60%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          60%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PYTHON FASTAPI */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fab fa-python" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">Python / FastAPI</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "60%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          60%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI POWERED APPS */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fas fa-robot" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">AI-Powered Apps</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "65%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          65%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FIGMA */}
              <div className="col-xl-6 mil-mb-40">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fab fa-figma" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">Figma</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "65%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          65%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SASS / BOOTSTRAP */}
              <div className="col-xl-6">
                <div className="mil-text-row">
                  <div className="mil-icon-box">
                    <div className="mil-text-icon no-textured">
                      <i className="fab fa-bootstrap" />
                    </div>
                  </div>

                  <div className="mil-progress-inline">
                    <span className="mil-upper">Sass / Bootstrap</span>
                    <div className="mil-progress-track">
                      <div className="mil-progress" style={{ width: "75%" }}>
                        <span className="mil-upper mil-upper-sm mil-accent">
                          75%
                        </span>
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

export default Skills;