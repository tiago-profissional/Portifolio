import Link from "next/link";

const Banner = ({ bgImage = "/img/fotohome.png" }) => {
  return (
    <div className="mil-section mil-banner mil-banner-right">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />

                <p className="mil-upper mil-mb-30">
                  WordPress <span className="mil-accent">and</span> Frontend Developer
                </p>

                <h1 className="mil-up mil-mb-40">Tiago Ramon</h1>

                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                    Brazilian developer focused on WordPress, React and PHP.
                    I build real-world portfolio projects including a job board
                    platform, a React + PHP vacancies system and modern UI web
                    applications.
                  </p>

                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">View Projects</a>
                    </Link>

                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact Me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <img
              src={bgImage}
              alt="Tiago Ramon"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;