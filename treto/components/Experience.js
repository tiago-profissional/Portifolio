import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Experience = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ top: 0, right: "15%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "15%", left: "-5%", transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <p className="mil-upper mil-mb-30">
          Practical <span className="mil-accent">work</span>
        </p>

        <h2 className="mil-up mil-mb-60" style={{ fontSize: "42px" }}>
          Experience
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <p className="mil-mb-60">
              1 year of practical experience building web applications and
              portfolio projects using React, PHP, MySQL and WordPress,
              focusing on problem solving and modern development practices.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="mil-timeline-nav-2">
              <div className="mil-timeline-2-pagination mil-upper mil-mb-30" />
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-timeline-2-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>

                <div className="mil-next mil-timeline-2-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mil-divider" />

          <div className="col-xl-12">
            <Swiper
              {...sliderProps.timelineSlider}
              className="swiper-container mil-timeline-slider-2"
            >

              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">
                      Freelance & Portfolio Projects
                    </p>
                    <p className="mil-upper mil-mb-30">
                      2024 <span className="mil-accent">to</span> Present
                    </p>
                    <p>
                      Building real projects with React, PHP, MySQL and
                      WordPress while solving practical development challenges.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">
                      Frontend Development
                    </p>
                    <p className="mil-upper mil-mb-30">
                      2023 <span className="mil-accent">to</span> Present
                    </p>
                    <p>
                      Developing responsive interfaces with HTML, CSS, Sass,
                      Bootstrap and modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">
                      API & Backend Practice
                    </p>
                    <p className="mil-upper mil-mb-30">
                      2024 <span className="mil-accent">to</span> Present
                    </p>
                    <p>
                      Creating and integrating REST APIs using PHP and MySQL
                      with CRUD operations and data validation.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">
                      WordPress Development
                    </p>
                    <p className="mil-upper mil-mb-30">
                      2024 <span className="mil-accent">to</span> Present
                    </p>
                    <p>
                      Building dynamic WordPress solutions with custom post
                      types, Elementor templates and job board systems.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;