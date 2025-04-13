import { useState } from "react";
import { Link } from "react-router-dom";

// import avatar from "../assets/img/avatar.jpg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="navbar is-transparent is-light has-background-white has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item  has-background-primaryy" to="/">
              <span className="title is-size-4 has-text-weight-bold has-text-whitee">
                Ja<span className="has-text-primary">nic</span>
              </span>
            </Link>
            <span
              className={"navbar-burger" + (navbarOpen ? " is-active" : " ")}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu has-text-centered" +
              (navbarOpen ? " is-active" : " ")
            }
          >
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <Link className="navbar-item has-text-weight-semibold" to="/">
                Track Order
              </Link>
              <Link
                className="navbar-item has-text-weight-semibold"
                to="/about"
              >
                About
              </Link>
              <Link
                className="navbar-item has-text-weight-semibold"
                to="/contact"
              >
                Contact
              </Link>

              {/* <span className="navbar-item has-text-weight-semibold is-hidden-mobile">
                |
              </span>
              <Link className="navbar-item has-text-weight-semibold" to="/consignments/create">
                Create Consignment
              </Link>

              <Link className="navbar-item has-text-weight-semibold" to="/consignments/user">
                Consignments
              </Link>
              <Link
                className="navbar-item has-text-weight-semibold"
                to="/login"
              >
                Sign In
              </Link> */}
              {/* <Link
                    className="navbar-item has-text-weight-semibold"
                    to="/signup"
                  >
                    Register
                  </Link> */}
              {/* <div className="navbar-item">
                <Link
                  className="button is-outlinedd is-primary is-fullwidth has-text-weight-semibold"
                  to="/signup"
                >
                  <span>Register</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
