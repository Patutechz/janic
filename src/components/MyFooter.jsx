import { Link } from "react-router-dom";
const MyFooter = () => {
  return (
    <>
      <footer
        className="footer has-background-black-ter has-text-white"
        style={{ padding: "4rem 1.5rem 2rem" }}
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* CTA strip */}
          <div
            className="level mb-6 pb-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="level-left">
              <div>
                <h2 className="title is-4 has-text-white mb-1">
                  Got Questions?
                </h2>
                <p
                  className="has-text-grey-lighter"
                  style={{ fontSize: "0.95rem" }}
                >
                  Our support team is here 24/7 to guide you.
                </p>
              </div>
            </div>
            <div className="level-right mt-4-mobile">
              <div className="buttons">
                <Link
                  to="/contact"
                  className="button is-primary has-text-weight-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  to="/contact"
                  className="button is-white is-outlined has-text-weight-semibold"
                >
                  Chat with Us
                </Link>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {/* Brand */}
            <div className="column is-12-mobile is-5-tablet is-4-desktop">
              <h3 className="title is-5 has-text-white mb-3">
                Ja<span className="has-text-primary">nic</span> WorldWide
              </h3>
              <p
                className="has-text-grey-lighter mb-4"
                style={{
                  lineHeight: "1.75",
                  maxWidth: "280px",
                  fontSize: "0.9rem",
                }}
              >
                Reliable courier and consignment solutions worldwide. Your
                shipment is our priority — every single time.
              </p>
              <div className="buttons">
                {[
                  { icon: "fa-facebook-f", href: "https://facebook.com" },
                  { icon: "fa-instagram", href: "https://instagram.com" },
                  { icon: "fa-whatsapp", href: "#" },
                  { icon: "fa-twitter", href: "#" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="button is-small is-light is-outlined"
                    style={{
                      borderRadius: "9999px",
                      width: "36px",
                      height: "36px",
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="icon is-small">
                      <i className={`fab ${s.icon}`} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="column is-6-mobile is-3-tablet is-2-desktop">
              <h4
                className="has-text-white has-text-weight-bold mb-3"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/faq", label: "FAQ" },
                  { to: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.to} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to={l.to}
                      className="has-text-grey-lighter"
                      style={{
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                      onMouseLeave={(e) => (e.target.style.color = "")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="column is-6-mobile is-3-tablet is-3-desktop">
              <h4
                className="has-text-white has-text-weight-bold mb-3"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Express Courier",
                  "International Freight",
                  "Sea Freight",
                  "Consignment Storage",
                  "Cold Chain Logistics",
                ].map((s) => (
                  <li key={s} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/services"
                      className="has-text-grey-lighter"
                      style={{ fontSize: "0.9rem", textDecoration: "none" }}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="column is-12-mobile is-6-tablet is-3-desktop">
              <h4
                className="has-text-white has-text-weight-bold mb-3"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                Contact
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  // { icon: "fa-phone", text: "+1 (314) 333 7456" },
                  { icon: "fa-envelope", text: "contact@janicworldwide.com" },
                  { icon: "fa-clock", text: "Mon–Fri: 8am – 8pm" },
                  { icon: "fa-map-marker-alt", text: "Available Worldwide" },
                ].map((c) => (
                  <li
                    key={c.text}
                    style={{
                      marginBottom: "0.65rem",
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className={`fas ${c.icon} has-text-primary`}
                      style={{
                        marginTop: "3px",
                        fontSize: "0.85rem",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="has-text-grey-lighter"
                      style={{ fontSize: "0.88rem" }}
                    >
                      {c.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <p className="has-text-grey" style={{ fontSize: "0.82rem" }}>
              © {new Date().getFullYear()} Janic WorldWide Ltd. All rights
              reserved.
            </p>
            <p className="has-text-grey" style={{ fontSize: "0.82rem" }}>
              Built for reliable logistics
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
