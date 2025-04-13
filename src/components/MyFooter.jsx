import { Link } from "react-router-dom";
const MyFooter = () => {
  return (
    <>
      {/* <footer className="footer py-4 has-background-black-bis">
        <div className="container">
        <p className="has-text-white has-text-centered">© Copyright Consignment 2024 - {new Date().getFullYear()}</p>
        </div>
    </footer> */}
      <footer className="footer has-background-black-ter has-text-white pt-6 pb-6">
        <div className="container is-narrow">
          <div className="level is-mobilee">
            <div className="level-left">
              <h1 className="title is-4">
                <strong className="is-block has-text-white">
                  Got Questions?
                </strong>
                <span className="has-text-grey-lighter is-size-6">
                  Our support team is here to guide you
                </span>
              </h1>
            </div>
            <div className="level-right is-hidden-mobilee">
              <div className="buttons">
                <Link to="./contact" className="button is-primary">
                  Contact Us
                </Link>
                <Link
                  to="/contact"
                  className="button is-white is-outlined"
                >
                  Chat with us
                </Link>
              </div>
            </div>
          </div>
          <div className="columns is-multiline is-mobile mt-6">
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <h4 className="title is-size-5 has-text-light">
                Janic Express © {new Date().getFullYear()}
              </h4>
              <p>
                +1 (314) 333 7456
                <br />
                admin@janicexpress.com
              </p>
              {/* <p>Port Harcourt, Rivers State</p> */}
            </div>
            <div className="column is-12-mobile is-6-tablet is-2-desktop is-offset--desktop">
              <h4 className="title is-size-5 has-text-light">Quick Links</h4>
              <Link to="/"
                className="is-family-sans-serif has-text-weight-medium has-text-white"
              >
                Track Order
              </Link>
              <br />
              <Link to="/about"
                className="is-family-sans-serif has-text-weight-medium has-text-white"
              >
                About Us
              </Link>
              <br />
              <Link to="/contact"
                className="is-family-sans-serif has-text-weight-medium has-text-white"
              >
                Contact Us
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-2-desktop is-offset--desktop is-hidden">
              <h4 className="title is-size-5 has-text-light">Services</h4>
              <a
                className="is-family-sans-serif has-text-weight-medium has-text-white"
                href="#"
              >
                Flight Booking
              </a>
              <br />
              <a
                className="is-family-sans-serif has-text-weight-medium has-text-white"
                href="#"
              >
                Make Tour Plan
              </a>
              <br />
              <a
                className="is-family-sans-serif has-text-weight-medium has-text-white"
                href="#"
              >
                Hotel Booking
              </a>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-desktop">
              <h4 className="title is-size-5 has-text-light">Follow Us</h4>
              <div className="buttons mt-4">
                <a
                  href="#"
                  className="button is-light is-outlined"
                  style={{ borderRadius: "9999px" }}
                >
                  <span className="icon">
                    <i className="fab fa-facebook"></i>
                  </span>
                </a>
                <a
                  href="#"
                  className="button is-light is-outlined"
                  style={{ borderRadius: "9999px" }}
                >
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                </a>
                <a
                  href="#"
                  className="button is-light is-outlined"
                  style={{ borderRadius: "9999px" }}
                >
                  <span className="icon">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
