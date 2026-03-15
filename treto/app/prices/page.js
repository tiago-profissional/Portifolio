import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";

const Page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />

          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Project <span className="mil-accent">Case Study</span>
              </p>

              <h2 className="mil-up mil-mb-30">Vagas Nordestinas Platform</h2>

              <p className="mil-left-offset">
                Vagas Nordestinas is a job board platform developed as a
                portfolio project. It was created to simulate a real-world job
                listing system where users can browse, create, and manage job
                opportunities through a modern web interface.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">Problem</p>
                    <h2 className="mil-up mil-mb-15">01</h2>
                    <p style={{ opacity: "0.5" }}>
                      Regional job opportunities are often fragmented
                    </p>
                  </div>

                  <div className="mil-proces-body">
                    <ul>
                      <li>Job listings are spread across many platforms</li>
                      <li>
                        Users struggle to find local opportunities easily
                      </li>
                      <li>
                        There is a need for a focused regional job board
                      </li>
                    </ul>

                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">View Portfolio</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <div className="mil-label mil-upper mil-upper-sm">
                      Main Project
                    </div>

                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Solution
                    </p>

                    <h2 className="mil-up mil-mb-15">02</h2>
                    <p style={{ opacity: "0.5" }}>
                      Fullstack platform with real CRUD workflow
                    </p>
                  </div>

                  <div className="mil-proces-body">
                    <ul>
                      <li>Developed with React, PHP, and MySQL</li>
                      <li>Job creation and editing features</li>
                      <li>Dynamic routing and API integration</li>
                      <li>
                        Structured to simulate a real product workflow
                      </li>
                    </ul>

                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button">See Projects</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Technologies
                    </p>
                    <h2 className="mil-up mil-mb-15">03</h2>
                    <p style={{ opacity: "0.5" }}>
                      Tools used to build the platform
                    </p>
                  </div>

                  <div className="mil-proces-body">
                    <ul>
                      <li>React</li>
                      <li>React Router</li>
                      <li>PHP API</li>
                      <li>MySQL Database</li>
                      <li>Responsive UI and component-based structure</li>
                    </ul>

                    <Link legacyBehavior href="/contact">
                      <a className="mil-button mil-type-2">Contact Me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mil-call-to-action">
            <div className="container">
              <div className="mil-text-center">
                <h3 className="mil-up mil-mb-30">
                  Want to know more about this{" "}
                  <span className="mil-accent">project</span>?
                </h3>

                <p className="mil-mb-30">
                  This project was built to demonstrate practical skills in
                  frontend development, API integration, database interaction,
                  and real-world product structure for a job board platform.
                </p>

                <Link legacyBehavior href="/contact">
                  <a className="mil-button mil-type-2">Contact Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default Page;