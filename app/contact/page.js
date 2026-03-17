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
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Contact <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let&apos;s work together</h2>
              <p className="mil-left-offset">
                If you are interested in working together, have a project idea
                or want to discuss job opportunities, feel free to reach out.
                I&apos;m always open to new challenges and collaborations.
              </p>
            </div>

            <div className="mil-contact">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">
                      About <span className="mil-accent">me</span>
                    </p>
                    <p>
                      Tiago Ramon Pereira <br />
                      Junior Web Developer <br />
                      React • PHP • WordPress <br />
                      Brazil • Open to Remote Work
                    </p>
                  </div>

                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Email</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=pereiraramontiago@gmail.com&su=Job%20Opportunity"
                        target="_blank"
                        rel="noreferrer"
                      >
                        pereiraramontiago@gmail.com
                      </a>
                      <br />
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=tiago.profissional.trabalho@gmail.com&su=Job%20Opportunity"
                        target="_blank"
                        rel="noreferrer"
                      >
                        tiago.profissional.trabalho@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Chats</p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/tiagoramonpereira/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                      <br />
                      <a
                        href="https://api.whatsapp.com/send?phone=5588996616055"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </div>

                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-mb-30">Phone</p>
                    <p>
                      <a href="tel:+5588996616055">+55 88 99661-6055</a>
                    </p>
                  </div>
                </div>

                <div className="col-lg-7">
                  <form id="cform" className="cform" method="post">
                    <label className="mil-upper">
                      Your full name <span className="mil-accent">*</span>
                    </label>
                    <input type="text" className="mil-mb-30" name="name" />

                    <label className="mil-upper">
                      Your email address{" "}
                      <span className="mil-accent">*</span>
                    </label>
                    <input type="email" className="mil-mb-30" name="email" />

                    <label className="mil-upper">Your phone number</label>
                    <input type="tel" className="mil-mb-30" name="tel" />

                    <label className="mil-upper">
                      Subject <span className="mil-accent">*</span>
                    </label>
                    <input type="text" className="mil-mb-30" name="subject" />

                    <label className="mil-upper">
                      Message <span className="mil-accent">*</span>
                    </label>
                    <textarea
                      className="mil-mb-30"
                      name="message"
                      defaultValue={""}
                    />

                    <label className="mil-checkbox mil-mb-30">
                      by sending the message you accept the{" "}
                      <a href="#.">terms and conditions</a>.
                      <input
                        type="checkbox"
                        name="checkmark"
                        defaultChecked
                      />
                      <span className="mil-checkmark" />
                    </label>

                    <button type="submit" className="mil-button">
                      Submit
                    </button>
                  </form>

                  <div className="alert-success" style={{ display: "none" }}>
                    <h5>Thanks, your message was sent successfully.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;