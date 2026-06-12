import { Link } from "react-router-dom"
import MyFooter from "../components/MyFooter.jsx"
import AboutImg  from "../assets/img/ship-6794508_1280.jpg"
import PortImg   from "../assets/img/port-1845350_1280.jpg"
import DeliverySvg from "../assets/img/undraw_deliveries_2r4y.svg"

const P = "#7c3aed"
const DARK = "#1e293b"
const LIGHT = "#f8fafc"

const VALUES = [
  { icon:"fa-bullseye",  title:"Reliability First",   desc:"Our 99% on-time rate is a commitment backed by every operational decision we make — not a marketing figure." },
  { icon:"fa-eye",       title:"Full Transparency",   desc:"No surprises in billing, no mystery in tracking. You see exactly what is happening at every stage of the journey." },
  { icon:"fa-heart",     title:"People-Centred",      desc:"Logistics moves packages but it is really about people. We treat every shipment as if it belongs to someone we care about." },
  { icon:"fa-leaf",      title:"Sustainability",       desc:"We invest in electric delivery vehicles, carbon-offset programmes and reusable packaging to reduce our footprint." },
]

const TEAM = [
  { initials:"OA", name:"Obiora Adeyemi",  role:"Chief Executive Officer" },
  { initials:"NK", name:"Ngozi Kalu",      role:"Head of Operations"      },
  { initials:"TM", name:"Tunde Makinde",   role:"Head of Technology"      },
  { initials:"SC", name:"Sarah Chen",      role:"International Relations" },
]

const About = () => (
  <>
    {/* HERO */}
    <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"5rem 1.5rem 3.5rem", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"380px", height:"380px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="container">
        <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.75rem" }}>Our Story</p>
        <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2rem,5vw,3.6rem)", maxWidth:"680px", marginBottom:"1rem" }}>
          Built on the Belief That <span style={{ color:"#a78bfa" }}>Logistics Should Be Honest</span>
        </h1>
        <p style={{ color:"#94a3b8", maxWidth:"520px", lineHeight:"1.75", fontSize:"1rem" }}>
          Janic WorldWide began with a single van and a promise: no missed deliveries, no hidden fees, and a real human to answer the phone. Today we serve 80+ countries — that promise has never changed.
        </p>
      </div>
    </section>

    {/* STORY */}
    <section className="section" style={{ background:"#fff" }}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <img src={AboutImg} alt="About Janic WorldWide" style={{ borderRadius:"10px", width:"100%", display:"block", boxShadow:"0 8px 32px rgba(0,0,0,0.12)" }} />
          </div>
          <div className="column is-6 is-offset-1-desktop">
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Why Janic Express</p>
            <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.6rem)", marginBottom:"1.25rem" }}>
              A Decade of <span className="has-text-primary">Getting It Right</span>
            </h2>
            <p className="has-text-grey mb-4" style={{ lineHeight:"1.75", fontSize:"0.97rem" }}>
              We started with three motorcycles and a big idea: logistics companies should communicate clearly and deliver reliably. Ten years later, Janic WorldWide operates air, sea, and road freight across Africa, Europe, North America and Asia.
            </p>
            <p className="has-text-grey mb-5" style={{ lineHeight:"1.75", fontSize:"0.97rem" }}>
              Our technology team built a proprietary tracking platform that gives clients real-time visibility without phone calls. Our operations team runs 24 hours a day, 365 days a year — because shipments do not pause for weekends.
            </p>
            <div className="columns is-multiline">
              {[
                { val:"80+",   lbl:"Countries Served"   },
                { val:"500k+", lbl:"Packages Delivered"  },
                { val:"99%",   lbl:"On-Time Rate"        },
                { val:"10yrs", lbl:"In Operation"        },
              ].map(s => (
                <div key={s.lbl} className="column is-6">
                  <div style={{ background:LIGHT, padding:"1.25rem", borderRadius:"8px", borderTop:`3px solid ${P}` }}>
                    <div style={{ fontWeight:900, fontSize:"2rem", color:DARK, lineHeight:1 }}>{s.val}</div>
                    <div style={{ fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"1px", color:"#64748b" }}>{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section" style={{ background:LIGHT }}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Our Values</p>
            <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.6rem)", marginBottom:"1.5rem" }}>
              What We <span className="has-text-primary">Stand For</span>
            </h2>
            <img src={DeliverySvg} alt="Values" style={{ width:"100%", maxWidth:"280px", display:"block" }} />
          </div>
          <div className="column is-7 is-offset-1-desktop">
            {VALUES.map(v => (
              <div key={v.title} style={{ display:"flex", gap:"1rem", padding:"1.35rem", background:"#fff", borderRadius:"8px", borderLeft:`4px solid ${P}`, marginBottom:"1rem", boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ width:44, height:44, background:"#f3f0ff", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <i className={`fas ${v.icon} has-text-primary`} style={{ fontSize:"1.1rem" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight:800, fontSize:"0.95rem", textTransform:"uppercase", color:DARK, marginBottom:"0.3rem" }}>{v.title}</h4>
                  <p className="has-text-grey" style={{ fontSize:"0.88rem", lineHeight:"1.65" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PHOTO BANNER */}
    <div style={{ position:"relative", height:"260px", overflow:"hidden" }}>
      <img src={PortImg} alt="Port operations" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
      <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.72)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", textAlign:"center", padding:"1.5rem" }}>
        <h2 style={{ fontWeight:900, fontSize:"clamp(1.6rem,4vw,2.6rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.5rem" }}>
          Operating in <span style={{ color:"#a78bfa" }}>80+ Countries</span>
        </h2>
        <p style={{ color:"#94a3b8", maxWidth:"400px", fontSize:"0.97rem" }}>Air, sea, and road freight — one trusted partner for every logistics need.</p>
      </div>
    </div>

    {/* TEAM */}
    {/* <section className="section" style={{ background:"#fff" }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Meet the team</p>
          <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            The People Behind <span className="has-text-primary">Janic WorldWide</span>
          </h2>
        </div>
        <div className="columns is-centered is-multiline">
          {TEAM.map(t => (
            <div key={t.name} className="column is-3-desktop is-6-tablet is-12-mobile">
              <div style={{ textAlign:"center", padding:"1.5rem 1rem" }}>
                <div style={{ width:76, height:76, borderRadius:"50%", background:DARK, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem", fontWeight:900, fontSize:"1.5rem", color:"#a78bfa" }}>
                  {t.initials}
                </div>
                <h4 style={{ fontWeight:800, fontSize:"1rem", textTransform:"uppercase", color:DARK, marginBottom:"0.25rem" }}>{t.name}</h4>
                <span className="has-text-grey" style={{ fontSize:"0.85rem" }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* CTA */}
    <section style={{ background:P, padding:"4rem 1.5rem", textAlign:"center" }}>
      <div className="container">
        <h2 style={{ fontWeight:900, fontSize:"clamp(1.8rem,4vw,2.8rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.75rem" }}>Ship With Confidence</h2>
        <p style={{ color:"rgba(255,255,255,0.8)", fontSize:"1rem", maxWidth:"360px", margin:"0 auto 1.75rem" }}>Join 12,000+ businesses that trust Janic Express.</p>
        <Link to="/contact" className="button is-white is-medium has-text-weight-bold" style={{ color:P }}>Talk to Our Team</Link>
      </div>
    </section>

    <MyFooter />
  </>
)

export default About
