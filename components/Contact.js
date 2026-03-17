const Contact = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />

      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">Me</span>
        </p>

        <h2 className="mil-up mil-mb-60">
          Let's Work Together
        </h2>

        <div className="row justify-content-between">
          <div className="col-lg-4">

            {/* EMAIL */}
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Email</p>

              <p>
                <a href="mailto:pereiraramontiago@gmail.com">
                  pereiraramontiago@gmail.com
                </a>
                <br />
                <a href="mailto:tiago.profissional.trabalho@gmail.com">
                  tiago.profissional.trabalho@gmail.com
                </a>
              </p>
            </div>

            {/* PHONE */}
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>

              <p>
                <a href="tel:+5588996616055">
                  +55 88 99661-6055
                </a>
              </p>
            </div>

          </div>

          <div className="col-lg-7">

            {/* FORM */}
            <form id="cform-two" className="cform-two" method="post">
              <div className="row">

                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your full name <span className="mil-accent">*</span>
                  </label>

                  <input
                    type="text"
                    className="mil-mb-30"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>

                  <input
                    type="email"
                    className="mil-mb-30"
                    name="email"
                    placeholder="john@email.com"
                  />
                </div>

                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>

                  <textarea
                    className="mil-mb-30"
                    name="message"
                    placeholder="Write your message here..."
                  />
                </div>

                <div className="col-lg-12 mil-text-row">

                  <label className="mil-checkbox mil-mb-30">
                    By sending this message, I accept the{" "}
                    <a href="#">terms and conditions</a>.
                    <input type="checkbox" name="checkmark" defaultChecked />
                    <span className="mil-checkmark" />
                  </label>

                  <button type="submit" className="mil-button">
                    Send Message
                  </button>

                </div>

              </div>
            </form>

            <div className="alert-success" style={{ display: "none" }}>
              <h5>Thanks! Your message was sent successfully.</h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;