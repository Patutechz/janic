import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const linkCls = ({ isActive }) =>
    "navbar-item has-text-weight-semibold" + (isActive ? " has-text-primary" : "")

  return (
    <nav
      className="navbar is-transparent has-background-white has-shadow"
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" onClick={close}>
            <span className="has-text-weight-bold" style={{ fontSize: "1.25rem", letterSpacing: "-0.5px" }}>
              Janic<span className="has-text-primary">World</span>
              <span className="has-text-grey-dark" style={{ fontWeight: 400 }}>Wide</span>
            </span>
          </Link>
          <span
            className={"navbar-burger" + (open ? " is-active" : "")}
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          >
            <span /><span /><span />
          </span>
        </div>

        <div className={"navbar-menu" + (open ? " is-active" : "")}>
          <div className="navbar-start" />
          <div className="navbar-end" style={{ alignItems: "center" }}>
            {[
              { to: "/",        label: "Home",     end: true },
              { to: "/services",label: "Services"           },
              { to: "/track",   label: "Track"              },
              { to: "/about",   label: "About"              },
              { to: "/faq",     label: "FAQ"                },
              { to: "/contact", label: "Contact"            },
            ].map(({ to, label, end }) => (
              <NavLink key={to} className={linkCls} to={to} end={end} onClick={close}>
                {label}
              </NavLink>
            ))}
            <div className="navbar-item">
              <Link
                className="button is-primary has-text-weight-semibold"
                to="/quote"
                onClick={close}
                style={{ borderRadius: "6px" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
