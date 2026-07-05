import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";

const PortfolioIsotope = dynamic(
  () => import("@/components/PortfolioIsotope"),
  { ssr: false }
);

const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div className="container">
            {/* BANNER */}
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Featured <span className="mil-accent">projects</span>
              </p>
              <h2 className="mil-up mil-mb-30">Portfolio</h2>
              <p className="mil-left-offset">
                A Collection of my favorites project I&apos;ve designed recently. <br />
                Feeling great while sharing here.
              </p>
            </div>

            {/* GRADE (carrega so no navegador) */}
            <PortfolioIsotope />

            {/* PAGINACAO */}
            <div className="mil-pagination-panel">
              <ul className="mil-pagination-numbers">
                <li className="mil-active"><a href="#.">01</a></li>
                <li><a href="#.">02</a></li>
                <li><a href="#.">03</a></li>
              </ul>
              <div className="mil-pagination-nav">
                <div className="mil-slider-nav mil-mb-30">
                  <a href="#." className="mil-prev mil-reviews-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                  <a href="#." className="mil-next mil-reviews-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
                <div className="mil-reviews-pagination mil-upper mil-mb-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;