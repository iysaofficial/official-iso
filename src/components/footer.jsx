import "../assets/css/styles.css";

const Footer = () => {
  return (
    <section>
      <footer className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-6">
              <div className="subscribe mb-5">
                <form
                  action="https://formspree.io/f/xoqoddrr"
                  method="POST"
                  className="subscribe-form"
                >
                  <div className="form-group d-flex">
                    <input
                      type="email"
                      className="form-control rounded-left"
                      placeholder="Enter email address"
                      required
                      name="email"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-area-content">
                <img
                  src="./assets/logo/ISO.png"
                  alt="logo"
                  className="main-logo"
                />
                <p className="mb-2">
                  To understand students' abilities in science and innovation,
                  the Indonesian Young Scientist Association (IYSA) will hold
                  the "International Science Olympiad (ISO)" as an international
                  platform for young inventors. IYSA aims to develop the
                  potential, talents, and creativity of Indonesian students
                  through various competitions, fostering a spirit of
                  competition to improve their lives.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-3 mt-lg-0">
              <div className="single-footer-widget">
                <h5>Information Link</h5>

                <ul className="footer-quick-links list-unstyled">
                  <li>
                    <a href="https://iysa.or.id" target="_blank">
                      Our Main Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://registrasi-isif-2024.vercel.app/"
                      target="_blank"
                    >
                      Registration Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Information About Us</h5>

                <ul className="footer-quick-links address-link list-unstyled">
                  <li>
                    <a
                      href="https://goo.gl/maps/gEzFyE9gtXEyRfA26"
                      target="_blank"
                    >
                      <i className="fa fa-map-marker me-1"></i>
                      Jl. Kemang RT 03 RW 06
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:youngscientist.iysa@gmail.com"
                      target="_blank"
                    >
                      <i className="fa fa-envelope me-1"></i>
                      youngscientist.iysa@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+6281770914129" target="_blank">
                      <i className="fa fa-phone me-1"></i>
                      +6281770914129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Subscribe to Our Social Media</h5>
                <ul className="footer-quick-links sosmed list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/Indonesia-Young-scientist-Association-106523338057326"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+6281770914129"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/iysa_official"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <hr style={{ border: '3px solid' }} /> */}
          <div className="copyright-area">
            <div className="row align-items-center">
              <p className="text-center">
                <i className="far fa-copyright me-1"></i>
                2024 ISO Official. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
