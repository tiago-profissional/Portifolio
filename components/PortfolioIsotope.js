"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortfolioIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: { columnWidth: ".mil-grid-item" },
        animationOptions: { duration: 750, easing: "linear", queue: false },
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "mil-current" : "");

  return (
    <>
      {/* FILTROS */}
      <div className="mil-filter">
        <ul className="mil-filter-links mil-mb-30">
          <li>
            <a href="#" className={`c-pointer ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")}>All</a>
          </li>
          <li>
            <a href="#" className={`c-pointer ${activeBtn("fil-fullstack")}`} onClick={handleFilterKeyChange("fil-fullstack")}>Fullstack</a>
          </li>
          <li>
            <a href="#" className={`c-pointer ${activeBtn("fil-wordpress")}`} onClick={handleFilterKeyChange("fil-wordpress")}>WordPress</a>
          </li>
          <li>
            <a href="#" className={`c-pointer ${activeBtn("fil-uiux")}`} onClick={handleFilterKeyChange("fil-uiux")}>UI/UX</a>
          </li>
          <li>
            <a href="#" className={`c-pointer ${activeBtn("fil-frontend")}`} onClick={handleFilterKeyChange("fil-frontend")}>Frontend</a>
          </li>
        </ul>
      </div>

      {/* GRADE */}
      <div className="mil-portfolio-grid mil-mb-30">
        <div className="grid-sizer" />

        {/* VAGAS NORDESTINAS - Fullstack */}
        <div className="mil-grid-item fil-fullstack">
          <Link legacyBehavior href="/project">
            <div className="mil-portfolio-item mil-square-item mil-mb-60">
              <div className="mil-cover">
                <img src="/img/logo_vagasnordestinas.png" alt="Vagas Nordestinas" />
                <div className="mil-hover-link"><i className="fas fa-link" /></div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">Fullstack</p>
                <h4 className="mil-up">Vagas Nordestinas</h4>
              </div>
            </div>
          </Link>
        </div>

        {/* WORDPRESS JOB BOARD - WordPress */}
        <div className="mil-grid-item fil-wordpress">
          <Link legacyBehavior href="/project">
            <div className="mil-portfolio-item mil-long-item mil-mb-60">
              <div className="mil-cover">
                <img src="/img/vagas_wordpress.png" alt="WordPress Job Board" />
                <div className="mil-hover-link"><i className="fas fa-link" /></div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">WordPress</p>
                <h4 className="mil-up">WordPress Job Board</h4>
              </div>
            </div>
          </Link>
        </div>

        {/* FIGMA UI DESIGN - UI/UX */}
        <div className="mil-grid-item fil-uiux">
          <Link legacyBehavior href="/project">
            <div className="mil-portfolio-item mil-square-item mil-mb-60">
              <div className="mil-cover">
                <img src="/img/figma.png" alt="Figma UI Design" />
                <div className="mil-hover-link"><i className="fas fa-link" /></div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">UI/UX</p>
                <h4 className="mil-up">Figma UI Design</h4>
              </div>
            </div>
          </Link>
        </div>

        {/* MOVEFLOOR LANDING PAGE - Frontend */}
        <div className="mil-grid-item fil-frontend">
          <Link legacyBehavior href="/project">
            <div className="mil-portfolio-item mil-long-item mil-mb-60">
              <div className="mil-cover">
                <img src="/img/movefloor.png" alt="MoveFloor Landing Page" />
                <div className="mil-hover-link"><i className="fas fa-link" /></div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">Frontend</p>
                <h4 className="mil-up">MoveFloor Landing Page</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioIsotope;