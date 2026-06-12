import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import Swal from "sweetalert2"
import MyFooter from "../components/MyFooter.jsx"
import TrackSvg from "../assets/img/undraw_location_tracking_re_n3ok.svg"
import OnTheWaySvg from "../assets/img/undraw_on_the_way_re_swjt.svg"

const P = "#7c3aed"
const DARK = "#1e293b"

const CHECKPOINTS = [
  { icon:"fa-box",              color:"#4ade80", title:"Package Received",    desc:"Package collected and scanned into our system at origin facility." },
  { icon:"fa-building",         color:"#a78bfa", title:"At Origin Hub",       desc:"Sorted and prepared for dispatch at our origin logistics hub." },
  { icon:"fa-plane-departure",  color:"#60a5fa", title:"In Transit",          desc:"Shipment is on the move through our logistics network." },
  { icon:"fa-map-marker-alt",   color:"#f59e0b", title:"At Destination Hub",  desc:"Arrived at destination facility, undergoing customs clearance." },
  { icon:"fa-truck",            color:"#f97316", title:"Out for Delivery",    desc:"Package loaded onto a delivery vehicle and heading to you." },
  { icon:"fa-check-circle",     color:"#4ade80", title:"Delivered",           desc:"Package delivered. Proof of delivery recorded." },
]

const Track = () => {
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
      Swal.fire({ title:"Not Found", text:"No package found for that tracking number. Please check and try again.", icon:"error" })
    } else {
      navigate(`/${data.id}`)
    }
  }

  return (
    <>
      {/* HERO */}
      <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"5rem 1.5rem 3.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"380px", height:"380px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.75rem" }}>Track Your Package</p>
              <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2rem,5vw,3.6rem)", marginBottom:"1.1rem" }}>
                Where Is Your <span style={{ color:"#a78bfa" }}>Shipment?</span>
              </h1>
              <p style={{ color:"#94a3b8", maxWidth:"460px", lineHeight:"1.75", marginBottom:"2rem" }}>
                Enter your Janic Express tracking number for real-time status, location history, and estimated delivery.
              </p>
              <form onSubmit={handleSearch}>
                <div className="field has-addons" style={{ maxWidth:"520px" }}>
                  <div className="control is-expanded">
                    <input className="input is-large" type="text"
                      placeholder="e.g. JAN-2024-001234"
                      value={tn} onChange={e=>setTn(e.target.value)}
                      style={{ borderRadius:"6px 0 0 6px", border:"none" }} />
                  </div>
                  <div className="control">
                    <button className="button is-primary is-large has-text-weight-bold"
                      style={{ borderRadius:"0 6px 6px 0" }} disabled={loading}>
                      {loading
                        ? <span className="icon"><i className="fas fa-spinner fa-spin" /></span>
                        : <><span className="icon"><i className="fas fa-search" /></span><span>Track</span></>}
                    </button>
                  </div>
                </div>
              </form>
              <p style={{ fontSize:"0.8rem", color:"#475569", marginTop:"0.75rem" }}>
                <i className="fas fa-info-circle has-text-primary" style={{ marginRight:"0.4rem" }} />
                Tracking numbers are assigned within 2 hours of pickup.
              </p>
            </div>
            <div className="column is-5 is-offset-1 is-hidden-mobile">
              <img src={TrackSvg} alt="Tracking illustration" style={{ width:"100%", maxWidth:"360px", display:"block", margin:"0 auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="section" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Need Help?</p>
              <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.6rem,3.5vw,2.4rem)", marginBottom:"1.1rem" }}>
                Can't Find Your <span className="has-text-primary">Shipment?</span>
              </h2>
              <p className="has-text-grey mb-5" style={{ lineHeight:"1.75", fontSize:"0.97rem" }}>
                Tracking numbers appear within 2 hours of pickup. For missing numbers or older shipments, our support team can locate your package immediately.
              </p>
              {[
                { icon:"fa-comment",  label:"Live Chat",     sub:"Talk to a human right now"     },
                { icon:"fa-phone",    label:"Call Us",       sub:"+1 (314) 333 7456"              },
                { icon:"fa-envelope", label:"Email Support", sub:"support@janicexpress.com"       },
              ].map(c => (
                <div key={c.label} style={{ display:"flex", gap:"0.85rem", alignItems:"center", background:"#fff", padding:"1rem 1.25rem", borderRadius:"8px", boxShadow:"0 1px 4px rgba(0,0,0,0.05)", marginBottom:"0.75rem" }}>
                  <div style={{ width:40, height:40, background:DARK, borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <i className={`fas ${c.icon} has-text-primary`} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.9rem", color:DARK }}>{c.label}</div>
                    <div className="has-text-grey" style={{ fontSize:"0.82rem" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="column is-5 is-offset-1-desktop">
              {/* Number guide */}
              <div style={{ background:DARK, borderRadius:"10px", padding:"2rem", border:"1px solid rgba(167,139,250,0.2)", marginBottom:"1.25rem" }}>
                <h3 style={{ fontWeight:800, fontSize:"1rem", textTransform:"uppercase", color:"#fff", marginBottom:"1.25rem" }}>Tracking Number Format</h3>
                {[
                  { label:"Format",         val:"JAN-YYYY-XXXXXX"               },
                  { label:"Example",        val:"JAN-2024-001234"               },
                  { label:"Where to find",  val:"Booking email / SMS"           },
                ].map(r => (
                  <div key={r.label} style={{ display:"flex", justifyContent:"space-between", padding:"0.5rem 0", borderBottom:"1px solid rgba(255,255,255,0.07)", fontSize:"0.88rem" }}>
                    <span style={{ color:"#64748b" }}>{r.label}</span>
                    <span style={{ color:"#e2e8f0", fontWeight:500 }}>{r.val}</span>
                  </div>
                ))}
              </div>
              <img src={OnTheWaySvg} alt="On the way" style={{ width:"100%", maxWidth:"320px", display:"block", margin:"0 auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CHECKPOINTS */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <div className="has-text-centered mb-6">
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Transparency</p>
            <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
              Tracking <span className="has-text-primary">Checkpoints</span>
            </h2>
          </div>
          <div className="columns is-multiline">
            {CHECKPOINTS.map(cp => (
              <div key={cp.title} className="column is-4-desktop is-6-tablet is-12-mobile">
                <div style={{ display:"flex", gap:"0.85rem", padding:"1.1rem 1.25rem", borderRadius:"8px", background:"#f8fafc", marginBottom:"0.5rem" }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:DARK, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <i className={`fas ${cp.icon}`} style={{ color:cp.color, fontSize:"1rem" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:"0.88rem", textTransform:"uppercase", color:DARK, marginBottom:"0.2rem" }}>{cp.title}</div>
                    <p className="has-text-grey" style={{ fontSize:"0.82rem", lineHeight:"1.55" }}>{cp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MyFooter />
    </>
  )
}

export default Track
