import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import supabase from "../config/supabaseClient"
import Swal from "sweetalert2"
import MyFooter from "../components/MyFooter.jsx"

import HeroSvg       from "../assets/img/undraw_order_delivered_re_v4ab.svg"
import TrackSvg      from "../assets/img/undraw_location_tracking_re_n3ok.svg"
import DeliverySvg   from "../assets/img/undraw_deliveries_2r4y.svg"
import TruckSvg      from "../assets/img/undraw_delivery_truck_vt6p.svg"
import OnTheWaySvg   from "../assets/img/undraw_on_the_way_re_swjt.svg"
import ShipImg       from "../assets/img/ship-5810249_1280.jpg"
import PortImg       from "../assets/img/port-1845350_1280.jpg"

const STATS = [
  { val: "80+",   lbl: "Countries Served"  },
  { val: "500k+", lbl: "Packages Delivered" },
  { val: "99%",   lbl: "On-Time Rate"       },
  { val: "24/7",  lbl: "Live Support"       },
]

const SERVICES = [
  { icon: "fa-bolt",       title: "Express Courier",       desc: "Same-day and next-day delivery within city limits with full real-time tracking." },
  { icon: "fa-plane",      title: "International Freight", desc: "Door-to-door worldwide delivery across 80+ countries with customs clearance." },
  { icon: "fa-ship",       title: "Sea Freight",           desc: "Cost-effective FCL & LCL ocean freight with live vessel tracking." },
  { icon: "fa-warehouse",  title: "Consignment Storage",   desc: "Secure, climate-controlled warehousing for short and long-term storage." },
  { icon: "fa-snowflake",  title: "Cold Chain Logistics",  desc: "Temperature-controlled transport for pharmaceuticals and perishables." },
  { icon: "fa-route",      title: "Last-Mile Delivery",    desc: "Precision final-leg delivery with GPS tracking and proof of delivery." },
]

const HOW = [
  { n: "01", icon: "fa-box",          title: "Book Online",  desc: "Get an instant quote and book your pickup online in under 60 seconds." },
  { n: "02", icon: "fa-truck-pickup", title: "We Collect",   desc: "Our trained couriers collect from your door at your scheduled time." },
  { n: "03", icon: "fa-satellite",    title: "We Track It",  desc: "Full chain-of-custody visibility — tracked every step of the way." },
  { n: "04", icon: "fa-check-circle", title: "Delivered",    desc: "Recipient gets the package with photo confirmation. You're notified instantly." },
]

const TESTIMONIALS = [
  { name: "Adaeze Okonkwo", role: "Operations Manager, BoldRetail", text: "Janic World Wide transformed how we move stock. Reliable, transparent, and the tracking is excellent." },
  { name: "James Whitmore", role: "E-commerce Seller, Manchester",   text: "The only courier that consistently delivers on time. Live chat support is a lifesaver." },
  { name: "Dr. Kemi Ade",   role: "Export Director, PharmaPlus",     text: "Our cold chain consignments are always handled flawlessly. Temperature logs are spot on." },
]

// ── colour tokens matching the project's violet-600 primary ──
const P  = "#7c3aed"   // violet-600
const P2 = "#6d28d9"   // violet-700
const DARK = "#1e293b" // slate-800
const LIGHT = "#f8fafc"

const sectionEyebrow = (txt) => (
  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: P, marginBottom: "0.5rem" }}>
    {txt}
  </p>
)

const Home = () => {
  const navigate = useNavigate()
  const [tn, setTn] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!tn.trim()) return
    setLoading(true)
    const { data, error } = await supabase
      .from("consignments").select("*").eq("tracking_number", tn.trim()).single()
    setLoading(false)
    if (error || !data) {
      Swal.fire("Not Found", "No package found for that tracking number.", "error")
    } else {
      Swal.fire({ title: "Package Found!", icon: "success", timer: 1200, showConfirmButton: false })
      navigate(`/${data.id}`)
    }
  }

  const boxHover = (e, on) => {
    e.currentTarget.style.borderTopColor = on ? P : "transparent"
    e.currentTarget.style.transform      = on ? "translateY(-5px)" : ""
    e.currentTarget.style.boxShadow      = on ? `0 16px 40px rgba(124,58,237,0.13)` : ""
  }

  return (
    <>
      {/* ═══════════════════════════════════════ HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${DARK} 0%, #312e81 55%, #4c1d95 100%)`,
        minHeight: "90vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", padding: "4rem 1.5rem"
      }}>
        {/* decorative circles */}
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"500px", height:"500px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-80px", left:"-80px",  width:"380px", height:"380px", background:"rgba(139,92,246,0.07)", borderRadius:"50%", pointerEvents:"none" }} />

        <div className="container">
          <div className="columns is-vcentered">
            {/* left */}
            <div className="column is-6">
              <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"1rem" }}>
                ✦ Courier &amp; Consignment
              </div>
              <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2.4rem,5vw,4rem)", marginBottom:"1.25rem" }}>
                Move Anything.<br />
                <span style={{ color:"#a78bfa" }}>Anywhere.</span><br />
                On Time.
              </h1>
              <p style={{ color:"#cbd5e1", lineHeight:"1.75", fontSize:"1.05rem", maxWidth:"460px", marginBottom:"2rem" }}>
                From express city deliveries to international freight and secure consignment storage — Janic World Wide keeps your supply chain moving with full visibility.
              </p>

              {/* track bar */}
              <form onSubmit={handleSearch} style={{ marginBottom:"1.5rem" }}>
                <div className="field has-addons" style={{ maxWidth:"500px" }}>
                  <div className="control is-expanded">
                    <input className="input is-medium" type="text"
                      placeholder="Enter your tracking number…"
                      value={tn} onChange={e => setTn(e.target.value)}
                      style={{ borderRadius:"6px 0 0 6px", border:"none", fontSize:"0.95rem" }} />
                  </div>
                  <div className="control">
                    <button className="button is-primary is-mediumm has-text-weight-bold"
                      style={{ borderRadius:"0 6px 6px 0" }} disabled={loading}>
                      {loading
                        ? <span className="icon"><i className="fas fa-spinner fa-spin" /></span>
                        : <><span className="icon"><i className="fas fa-search" /></span><span>Track</span></>}
                    </button>
                  </div>
                </div>
              </form>

              <div className="buttons">
                <Link to="/services" className="button is-outlined has-text-weight-semibold"
                  style={{ borderColor:"rgba(255,255,255,0.3)", borderRadius:"6px" }}>
                  Our Services
                </Link>
                <Link to="/quote" className="button is-primary has-text-weight-semibold"
                  style={{ borderRadius:"6px" }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* right – illustration card */}
            <div className="column is-5 is-offset-1 is-hidden-mobile">
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(167,139,250,0.2)", borderRadius:"16px", padding:"2.5rem", backdropFilter:"blur(4px)" }}>
                <img src={HeroSvg} alt="Delivery illustration" style={{ width:"100%", display:"block", marginBottom:"2rem" }} />
                {[
                  { icon:"fa-check-circle", color:"#4ade80", text:"Real-Time Tracking"  },
                  { icon:"fa-shield-alt",   color:"#a78bfa", text:"Fully Insured"        },
                  // { icon:"fa-headset",      color:"#60a5fa", text:"24/7 Live Support"    },
                ].map(b => (
                  <div key={b.text} style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.6rem 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                    <i className={`fas ${b.icon}`} style={{ color:b.color, fontSize:"1.1rem", width:"20px", textAlign:"center" }} />
                    <span style={{ color:"#e2e8f0", fontSize:"0.92rem" }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ STATS BAR */}
      <div style={{ background:P, padding:"1.25rem 1.5rem" }}>
        <div className="container">
          <div style={{ display:"flex", justifyContent:"center", gap:"3rem", flexWrap:"wrap" }}>
            {STATS.map(s => (
              <div key={s.lbl} style={{ textAlign:"center" }}>
                <div style={{ fontWeight:900, fontSize:"2rem", color:"#fff", lineHeight:1 }}>{s.val}</div>
                <div style={{ fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"1.5px", color:"#ddd6fe", marginTop:"0.25rem" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════ SERVICES */}
      <section className="section" style={{ background:LIGHT }}>
        <div className="container">
          <div className="has-text-centered mb-6">
            {sectionEyebrow("What we offer")}
            <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
              Logistics Built <span className="has-text-primary">for Scale</span>
            </h2>
          </div>
          <div className="columns is-multiline">
            {SERVICES.map(s => (
              <div key={s.title} className="column is-4-desktop is-6-tablet is-12-mobile">
                <div className="box" style={{ height:"100%", borderTop:"3px solid transparent", transition:"all .25s", cursor:"default" }}
                  onMouseEnter={e => boxHover(e,true)} onMouseLeave={e => boxHover(e,false)}>
                  <div style={{ width:48, height:48, background:"#f3f0ff", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.1rem" }}>
                    <i className={`fas ${s.icon} has-text-primary`} style={{ fontSize:"1.3rem" }} />
                  </div>
                  <h3 className="title is-5 mb-2" style={{ textTransform:"uppercase" }}>{s.title}</h3>
                  <p className="has-text-grey" style={{ fontSize:"0.9rem", lineHeight:"1.65" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="has-text-centered mt-5">
            <Link to="/services" className="button is-primary is-medium has-text-weight-semibold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ FEATURE SPLIT – Track */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-hidden-mobile">
              <img src={TrackSvg} alt="Tracking" style={{ width:"100%", maxWidth:"420px", display:"block", margin:"0 auto" }} />
            </div>
            <div className="column is-6 is-offset-1-desktop">
              {sectionEyebrow("Live Visibility")}
              <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.6rem)", marginBottom:"1.25rem" }}>
                Track Your Package <span className="has-text-primary">In Real Time</span>
              </h2>
              <p className="has-text-grey mb-5" style={{ lineHeight:"1.75", fontSize:"0.97rem" }}>
                Every shipment gets a unique tracking number the moment it is picked up. Follow its entire journey from our depot to your recipient's door with timestamped location updates.
              </p>
              {["Timestamped location events","SMS & email notifications","Estimated delivery window","Proof of delivery (photo + signature)"].map(f => (
                <div key={f} style={{ display:"flex", gap:"0.6rem", alignItems:"center", marginBottom:"0.6rem" }}>
                  <i className="fas fa-check-circle has-text-primary" />
                  <span className="has-text-grey-dark" style={{ fontSize:"0.92rem" }}>{f}</span>
                </div>
              ))}
              <div className="buttons mt-5">
                <Link to="/track" className="button is-primary has-text-weight-semibold">Track a Shipment</Link>
                <Link to="/about" className="button is-light has-text-weight-semibold">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PHOTO BANNER 1 */}
      <div style={{ position:"relative", height:"320px", overflow:"hidden" }}>
        <img src={ShipImg} alt="Cargo ship" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.7)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", textAlign:"center", padding:"1.5rem" }}>
          <h2 style={{ fontWeight:900, fontSize:"clamp(1.8rem,4vw,3rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.75rem" }}>
            Trusted by <span style={{ color:"#a78bfa" }}>12,000+</span> Businesses Worldwide
          </h2>
          <p style={{ color:"#94a3b8", maxWidth:"460px", fontSize:"1rem" }}>
            From small e-commerce sellers to global corporations — Janic WorldWide delivers.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════ HOW IT WORKS */}
      <section className="section" style={{ background: DARK }}>
        <div className="container">
          <div className="has-text-centered mb-6">
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.5rem" }}>Simple process</p>
            <h2 style={{ fontWeight:900, textTransform:"uppercase", color:"#fff", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
              How <span style={{ color:"#a78bfa" }}>Janic WorldWide</span> Works
            </h2>
          </div>
          <div className="columns is-multiline">
            {HOW.map((step, i) => (
              <div key={step.n} className="column is-3-desktop is-6-tablet is-12-mobile">
                <div style={{ textAlign:"center", padding:"1.5rem 1rem", position:"relative" }}>
                  {/* connector line */}
                  {i < HOW.length - 1 && (
                    <div className="is-hidden-mobile is-hidden-tablet-only" style={{ position:"absolute", top:"40px", left:"calc(50% + 40px)", width:"calc(100% - 80px)", height:"2px", background:"rgba(139,92,246,0.25)" }} />
                  )}
                  <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(139,92,246,0.15)", border:"2px solid rgba(139,92,246,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.1rem" }}>
                    <i className={`fas ${step.icon} has-text-primary`} style={{ fontSize:"1.5rem" }} />
                  </div>
                  <div style={{ fontWeight:800, fontSize:"0.68rem", letterSpacing:"2px", textTransform:"uppercase", color:"#7c3aed", marginBottom:"0.4rem" }}>Step {step.n}</div>
                  <h4 style={{ fontWeight:800, fontSize:"1.05rem", textTransform:"uppercase", color:"#fff", marginBottom:"0.5rem" }}>{step.title}</h4>
                  <p style={{ fontSize:"0.88rem", color:"#94a3b8", lineHeight:"1.65" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ FEATURE SPLIT – Delivery */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              {sectionEyebrow("Why choose us")}
              <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.6rem)", marginBottom:"1.25rem" }}>
                Reliability You Can <span className="has-text-primary">Count On</span>
              </h2>
              <p className="has-text-grey mb-5" style={{ lineHeight:"1.75", fontSize:"0.97rem" }}>
                We have spent a decade building the infrastructure, partnerships, and technology to make sure your goods arrive on time, every time. Our 99% on-time rate is not a marketing claim — it is a guarantee.
              </p>
              <div className="columns is-multiline">
                {[
                  { val:"80+",   lbl:"Countries" },
                  { val:"500k+", lbl:"Deliveries" },
                  { val:"99%",   lbl:"On-Time"    },
                  { val:"10yrs", lbl:"Experience"  },
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
            <div className="column is-5 is-offset-1 is-hidden-mobile">
              <img src={DeliverySvg} alt="Deliveries" style={{ width:"100%", maxWidth:"420px", display:"block", margin:"0 auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PHOTO BANNER 2 */}
      <div style={{ position:"relative", height:"260px", overflow:"hidden" }}>
        <img src={PortImg} alt="Port" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.72)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", textAlign:"center", padding:"1.5rem" }}>
          <h2 style={{ fontWeight:900, fontSize:"clamp(1.6rem,3.5vw,2.4rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.5rem" }}>
            Sea, Air &amp; Road — <span style={{ color:"#a78bfa" }}>All Under One Roof</span>
          </h2>
          <p style={{ color:"#94a3b8", maxWidth:"400px", fontSize:"0.97rem" }}>
            One trusted partner for every leg of your logistics journey.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════ TESTIMONIALS */}
      <section className="section" style={{ background:LIGHT }}>
        <div className="container">
          <div className="has-text-centered mb-6">
            {sectionEyebrow("Client stories")}
            <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
              What Our <span className="has-text-primary">Clients Say</span>
            </h2>
          </div>
          <div className="columns is-multiline">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="column is-4-desktop is-12-mobile">
                <div className="box" style={{ height:"100%", position:"relative" }}>
                  <div style={{ fontSize:"4.5rem", lineHeight:1, color:"#ede9fe", position:"absolute", top:"0.5rem", left:"1.25rem", fontFamily:"Georgia,serif" }}>"</div>
                  <div style={{ paddingTop:"2rem" }}>
                    <div style={{ marginBottom:"0.5rem" }}>
                      {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star" style={{ color:"#f59e0b", fontSize:"0.85rem" }} />)}
                    </div>
                    <p className="has-text-grey mb-4" style={{ fontSize:"0.92rem", lineHeight:"1.7" }}>{t.text}</p>
                    <strong style={{ display:"block", color:DARK, fontSize:"0.9rem" }}>{t.name}</strong>
                    <span className="has-text-grey" style={{ fontSize:"0.8rem" }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CTA BANNER */}
      <section style={{ background:P, padding:"4.5rem 1.5rem", textAlign:"center" }}>
        <div className="container">
          <h2 style={{ fontWeight:900, fontSize:"clamp(1.8rem,4vw,3rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.75rem" }}>
            Ready to Ship?
          </h2>
          <p style={{ color:"rgba(255,255,255,0.8)", fontSize:"1.05rem", maxWidth:"380px", margin:"0 auto 2rem" }}>
            Get a free quote in under 60 seconds. No hidden fees, ever.
          </p>
          <div className="buttons is-centered">
            <Link to="/quote"   className="button is-white is-medium has-text-weight-bold" style={{ color:P }}>Get a Free Quote</Link>
            <Link to="/contact" className="button is-outlined is-white is-medium has-text-weight-bold">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      <MyFooter />
    </>
  )
}

export default Home
