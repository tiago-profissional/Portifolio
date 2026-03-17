import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <div className="mil-text-center-adapt">
          <p className="mil-upper mil-mb-30">
            Result of my <span className="mil-accent">Work</span>
          </p>

          <h2 className="mil-up mil-mb-60">Project Contributions</h2>

          <p className="mil-mb-60">
            Real project experience and development contributions delivered for
            web platforms and business solutions.
          </p>
        </div>

        <div className="mil-divider" />

        <div className="row">
          <div className="col-xl-8">
            <Swiper
              {...sliderProps.reviewsSlider}
              className="swiper-container mil-reviews-slider"
            >
              {/* SLIDE 1 — MOVEFLOOR */}
              <SwiperSlide className="swiper-slide">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="mil-client">
                      <img
                        src="/img/movefloor.png"
                        alt="Movefloor project"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-1" />

                  <div className="col-lg-7">
                    <p className="mil-mb-30">
                      Contributed to the Movefloor project through Mimatech,
                      supporting frontend implementation, responsive layouts and
                      interface improvements focused on usability and clean
                      architecture.
                    </p>

                    <p className="mil-upper mil-text-lg mil-mb-15">
                      Mima<span className="mil-accent">tech</span>
                    </p>

                    <p className="mil-mb-30">Movefloor Project</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 2 — VAGAS NORDESTINAS */}
              <SwiperSlide className="swiper-slide">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="mil-client">
                      <img
                        src="/img/logo_vagasnordestinas.png"
                        alt="Vagas Nordestinas"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-1" />

                  <div className="col-lg-7">
                    <p className="mil-mb-30">
                      Developed Vagas Nordestinas, a job board platform built
                      with React, PHP and MySQL, featuring job creation,
                      editing, dynamic routing and API integration for real
                      world job listings.
                    </p>

                    <p className="mil-upper mil-text-lg mil-mb-15">
                      Vagas <span className="mil-accent">Nordestinas</span>
                    </p>

                    <p className="mil-mb-30">
                      Fullstack Project — React / PHP / MySQL
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-xl-4">
            <div className="mil-reviews-nav">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-reviews-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>

                <div className="mil-next mil-reviews-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              <div className="mil-reviews-pagination mil-upper mil-mb-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;