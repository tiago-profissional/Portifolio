import TretoLayout from "@/layout/TretoLayout";

const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            {/* BANNER */}
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                About <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Who I Am</h2>
              <p className="mil-left-offset">
                I&apos;m a web developer focused on React, PHP and WordPress. <br />
                In this video I introduce myself, show my projects and my goals.
              </p>
            </div>

            {/* VIDEO + TEXT */}
            <div className="row justify-content-between mil-mb-90">
              {/* VIDEO */}
              <div className="col-lg-7 mil-mb-60">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    border: "2px solid #101010",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                    title="Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              </div>

              {/* TEXT ON THE SIDE */}
              <div className="col-lg-4">
                <p className="mil-upper mil-accent mil-mb-15">My goals</p>
                <h3 className="mil-up mil-mb-30">About me</h3>
                <p className="mil-mb-30">
                  I&apos;m a developer passionate about building complete web
                  solutions, from front-end to back-end. I work with React, PHP,
                  WordPress and MySQL.
                </p>
                <p>
                  My goal is to work as a developer on challenging projects,
                  delivering modern interfaces and well-structured code. I&apos;m
                  open to remote opportunities.
                </p>
              </div>
            </div>

            {/* MY PROJECTS - detailed */}
            <div className="mil-divider mil-mb-60" />

            <div className="mil-mb-60">
              <p className="mil-upper mil-accent mil-mb-15">Portfolio</p>
              <h3 className="mil-up mil-mb-30">My projects</h3>
            </div>

            <div className="row justify-content-between mil-mb-90">
              {/* PROJECT 1 */}
              <div className="col-lg-6 mil-mb-60">
                <p className="mil-upper mil-accent mil-mb-15">Fullstack</p>
                <h4 className="mil-up mil-mb-15">Vagas Nordestinas</h4>
                <p>
                  A job board platform built with React, PHP and MySQL. It
                  features job listing, creation and editing with a real CRUD
                  workflow. This is where I practiced integrating the front-end
                  and back-end end to end.
                </p>
              </div>

              {/* PROJECT 2 */}
              <div className="col-lg-6 mil-mb-60">
                <p className="mil-upper mil-accent mil-mb-15">WordPress</p>
                <h4 className="mil-up mil-mb-15">WordPress Job Board</h4>
                <p>
                  A job board built in WordPress using custom post types,
                  Elementor templates and dynamic listings. It shows I can
                  deliver fast WordPress solutions in addition to building from
                  scratch.
                </p>
              </div>

              {/* PROJECT 3 */}
              <div className="col-lg-6 mil-mb-60">
                <p className="mil-upper mil-accent mil-mb-15">UI/UX</p>
                <h4 className="mil-up mil-mb-15">Figma UI Design</h4>
                <p>
                  A UI exploration created in Figma, focused on layout structure,
                  spacing systems and modern design. I use Figma to plan before
                  coding.
                </p>
              </div>

              {/* PROJECT 4 */}
              <div className="col-lg-6 mil-mb-60">
                <p className="mil-upper mil-accent mil-mb-15">Frontend</p>
                <h4 className="mil-up mil-mb-15">MoveFloor Landing Page</h4>
                <p>
                  A responsive landing page focused on modern layout and a
                  component-based front-end structure. A good example of clean UI
                  and organized code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;