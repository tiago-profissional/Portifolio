import Link from "next/link";

const PortfolioIsotope = () => {
  return (
    <div className="container mil-p-120-90">

      {/* FILTER MENU */}
      <div className="mil-filter mil-mb-60">
        <ul>
          <li className="mil-active">All</li>
          <li>Fullstack</li>
          <li>WordPress</li>
          <li>UI/UX</li>
        </ul>
      </div>

      <div className="row">

        {/* VAGAS NORDESTINAS */}
        <div className="col-lg-6 mil-mb-60">
          <div className="mil-project-card">

            <img
              src="/img/logo_vagasnordestinas.png"
              alt="Vagas Nordestinas"
              className="mil-project-image"
            />

            <div className="mil-project-info">

              <p className="mil-upper mil-accent">Fullstack</p>

              <h3 className="mil-mb-20">
                Vagas Nordestinas
              </h3>

              <p className="mil-mb-30">
                Job board platform built with React, PHP and MySQL featuring
                job listing, creation and editing with a real CRUD workflow.
              </p>

              <Link href="/project">
                <span className="mil-button">
                  View Case Study
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* WORDPRESS JOB BOARD */}
        <div className="col-lg-6 mil-mb-60">
          <div className="mil-project-card">

            <img
              src="/img/vagas_worpress.png"
              alt="WordPress Job Board"
              className="mil-project-image"
            />

            <div className="mil-project-info">

              <p className="mil-upper mil-accent">WordPress</p>

              <h3 className="mil-mb-20">
                WordPress Job Board
              </h3>

              <p className="mil-mb-30">
                Job board created with WordPress using custom post types,
                Elementor templates and dynamic job listings.
              </p>

              <Link href="/portfolio">
                <span className="mil-button">
                  View Project
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* FIGMA DESIGN */}
        <div className="col-lg-6 mil-mb-60">
          <div className="mil-project-card">

            <img
              src="/img/figma.png"
              alt="Figma UI Design"
              className="mil-project-image"
            />

            <div className="mil-project-info">

              <p className="mil-upper mil-accent">UI / UX</p>

              <h3 className="mil-mb-20">
                Figma UI Design
              </h3>

              <p className="mil-mb-30">
                UI exploration created in Figma focusing on layout structure,
                spacing systems and modern interface design.
              </p>

              <Link href="/portfolio">
                <span className="mil-button">
                  View Design
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* MOVEFLOOR */}
        <div className="col-lg-6 mil-mb-60">
          <div className="mil-project-card">

            <img
              src="/img/movefloor.png"
              alt="MoveFloor Project"
              className="mil-project-image"
            />

            <div className="mil-project-info">

              <p className="mil-upper mil-accent">Frontend</p>

              <h3 className="mil-mb-20">
                MoveFloor Landing Page
              </h3>

              <p className="mil-mb-30">
                Responsive landing page focused on modern UI layout and
                component-based frontend structure.
              </p>

              <Link href="/portfolio">
                <span className="mil-button">
                  View Project
                </span>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioIsotope;