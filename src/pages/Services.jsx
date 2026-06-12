import { Link } from "react-router-dom"
import MyFooter from "../components/MyFooter.jsx"
import ShipImg   from "../assets/img/ship-6794508_1280.jpg"
import PortImg   from "../assets/img/port-1845350_1280.jpg"
import TruckSvg  from "../assets/img/undraw_delivery_truck_vt6p.svg"

const P = "#7c3aed"
const DARK = "#1e293b"
const LIGHT = "#f8fafc"

const SERVICES = [
  { icon:"fa-bolt",       title:"Express Courier",       sub:"Same-day & Next-day",
    features:["Same-day within city limits","Next-day nationwide","Real-time GPS tracking","Photo + signature proof","Fragile item handling"],
    price:"From $4" },
  { icon:"fa-plane",      title:"International Express", sub:"2–5 Business Days",
    features:["Door-to-door worldwide","Full customs clearance","DDP & DDU options","Priority airline handling","Dedicated account manager"],
    price:"From $20" },
  { icon:"fa-ship",       title:"Sea Freight",           sub:"FCL & LCL Options",
    features:["Full Container Load (FCL)","Less-than-Container (LCL)","Port-to-port or door-to-door","Cargo insurance included","Live vessel tracking"],
    price:"Quote on request" },
  { icon:"fa-warehouse",  title:"Consignment Storage",   sub:"Short & Long-Term",
    features:["Secure, CCTV-monitored","Temperature-controlled zones","Inventory management","Flexible batch release","Daily condition reports"],
    price:"From $3.50/day" },
  { icon:"fa-snowflake",  title:"Cold Chain Logistics",  sub:"Pharma & Perishables",
    features:["2°C–8°C pharma range","Frozen food transport","Temperature logging","Regulatory compliance docs","Specialist trained handlers"],
    price:"Quote on request" },
  { icon:"fa-building",   title:"B2B Bulk Dispatch",     sub:"Corporate Accounts",
    features:["Volume pricing discounts","Dedicated collection schedule","Monthly invoicing","API integration","Dedicated operations contact"],
    price:"Custom pricing" },
]

const PRICING = [
  { tier:"Starter",    price:"$0",   sub:"Pay as you go",  desc:"For individuals and small sellers.",
    features:[
      {t:"Express courier (pay-per-shipment)", ok:true},
      {t:"Basic online tracking",              ok:true},
      {t:"Email support",                      ok:true},
      {t:"Priority queue",                     ok:false},
      {t:"Dedicated account manager",          ok:false},
    ]},
  { tier:"Business",   price:"$29",  sub:"/ month", featured:true, desc:"For growing businesses shipping weekly.",
    features:[
      {t:"50 shipments/month included",        ok:true},
      {t:"Advanced tracking & notifications",  ok:true},
      {t:"Priority phone & chat support",      ok:true},
      {t:"Discounted international rates",     ok:true},
      {t:"Dedicated account manager",          ok:false},
    ]},
  { tier:"Enterprise", price:"Custom", sub:"pricing", desc:"For high-volume operations with custom needs.",
    features:[
      {t:"Unlimited shipments",                ok:true},
      {t:"Real-time API integration",          ok:true},
      {t:"24/7 dedicated support line",        ok:true},
      {t:"Custom SLA agreement",               ok:true},
      {t:"Dedicated account manager",          ok:true},
    ]},
]

const Services = () => (
  <>
    {/* HERO */}
    <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"5rem 1.5rem 3.5rem", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"380px", height:"380px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6">
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.75rem" }}>What We Offer</p>
            <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2rem,5vw,3.6rem)", marginBottom:"1rem" }}>
              Every Service You Need <span style={{ color:"#a78bfa" }}>Under One Roof</span>
            </h1>
            <p style={{ color:"#94a3b8", maxWidth:"460px", lineHeight:"1.75" }}>
              From a single parcel to a full container — our logistics network is built to handle it all with precision and care.
            </p>
          </div>
          <div className="column is-5 is-offset-1 is-hidden-mobile">
            <img src={TruckSvg} alt="Truck" style={{ width:"100%", maxWidth:"360px", display:"block", margin:"0 auto" }} />
          </div>
        </div>
      </div>
    </section>

    {/* SERVICE CARDS */}
    <section className="section" style={{ background:LIGHT }}>
      <div className="container">
        <div className="columns is-multiline">
          {SERVICES.map(s => (
            <div key={s.title} className="column is-4-desktop is-6-tablet is-12-mobile">
              <div style={{ background:"#fff", borderRadius:"10px", overflow:"hidden", height:"100%", display:"flex", flexDirection:"column", boxShadow:"0 2px 10px rgba(0,0,0,0.06)" }}>
                <div style={{ background:DARK, padding:"1.6rem", display:"flex", alignItems:"center", gap:"1rem" }}>
                  <div style={{ width:48, height:48, background:"rgba(139,92,246,0.15)", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <i className={`fas ${s.icon} has-text-primary`} style={{ fontSize:"1.3rem" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:"1rem", textTransform:"uppercase", color:"#fff" }}>{s.title}</div>
                    <div style={{ fontSize:"0.78rem", color:"#7c3aed" }}>{s.sub}</div>
                  </div>
                </div>
                <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                  <ul style={{ listStyle:"none", padding:0, margin:"0 0 1.25rem" }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display:"flex", gap:"0.5rem", alignItems:"center", padding:"0.35rem 0", fontSize:"0.88rem", color:"#475569" }}>
                        <span style={{ width:7, height:7, borderRadius:"50%", background:P, flexShrink:0, display:"inline-block" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontWeight:700, fontSize:"0.82rem", color:P, textTransform:"uppercase", letterSpacing:"0.5px", borderTop:"1px solid #e2e8f0", paddingTop:"0.85rem" }}>{s.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PHOTO BANNER */}
    <div style={{ position:"relative", height:"240px", overflow:"hidden" }}>
      <img src={ShipImg} alt="Cargo ship" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
      <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.75)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", textAlign:"center", padding:"1.5rem" }}>
        <h2 style={{ fontWeight:900, fontSize:"clamp(1.6rem,4vw,2.6rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.5rem" }}>
          Sea, Air &amp; Road — <span style={{ color:"#a78bfa" }}>All Under One Roof</span>
        </h2>
      </div>
    </div>

    {/* PRICING */}
    <section className="section" style={{ background:"#fff" }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Account Plans</p>
          <h2 className="title" style={{ fontWeight:900, textTransform:"uppercase", fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
            Simple <span className="has-text-primary">Pricing</span>
          </h2>
        </div>
        <div className="columns is-centered">
          {PRICING.map(p => (
            <div key={p.tier} className="column is-4-desktop is-6-tablet is-12-mobile">
              <div style={{ border:`2px solid ${p.featured ? P : "#e2e8f0"}`, borderRadius:"10px", padding:"2rem", height:"100%", position:"relative", boxShadow: p.featured ? `0 8px 32px rgba(124,58,237,0.13)` : "none" }}>
                {p.featured && (
                  <div style={{ position:"absolute", top:"-1px", right:"1.5rem", background:P, color:"#fff", fontSize:"0.68rem", fontWeight:800, textTransform:"uppercase", letterSpacing:"1px", padding:"0.2rem 0.75rem", borderRadius:"0 0 6px 6px" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:P, marginBottom:"0.4rem" }}>{p.tier}</div>
                <div style={{ fontWeight:900, fontSize:"2.4rem", color:DARK, lineHeight:1, marginBottom:"0.25rem" }}>
                  {p.price} <span style={{ fontSize:"0.9rem", fontWeight:400, color:"#64748b" }}>{p.sub}</span>
                </div>
                <p className="has-text-grey" style={{ fontSize:"0.85rem", margin:"0.75rem 0 1.25rem", paddingBottom:"1.25rem", borderBottom:"1px solid #e2e8f0" }}>{p.desc}</p>
                <ul style={{ listStyle:"none", padding:0, margin:"0 0 1.75rem" }}>
                  {p.features.map(f => (
                    <li key={f.t} style={{ display:"flex", gap:"0.5rem", alignItems:"center", fontSize:"0.88rem", color:"#475569", padding:"0.35rem 0" }}>
                      <i className={`fas ${f.ok ? "fa-check has-text-success" : "fa-times has-text-danger"}`} style={{ fontSize:"0.8rem" }} />
                      {f.t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`button is-fullwidth has-text-weight-bold ${p.featured ? "is-primary" : "is-light"}`}>
                  {p.tier === "Enterprise" ? "Talk to Sales" : "Get Started"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PORT BANNER */}
    <div style={{ position:"relative", height:"200px", overflow:"hidden" }}>
      <img src={PortImg} alt="Port" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
      <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.72)", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"1rem" }}>
        <h2 style={{ fontWeight:900, fontSize:"clamp(1.4rem,3vw,2rem)", textTransform:"uppercase", color:"#fff" }}>
          Our Network Spans <span style={{ color:"#a78bfa" }}>6 Continents</span>
        </h2>
      </div>
    </div>

    {/* CTA */}
    <section style={{ background:P, padding:"4rem 1.5rem", textAlign:"center" }}>
      <div className="container">
        <h2 style={{ fontWeight:900, fontSize:"clamp(1.8rem,4vw,2.8rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.75rem" }}>Not Sure Which Plan?</h2>
        <p style={{ color:"rgba(255,255,255,0.8)", fontSize:"1rem", maxWidth:"360px", margin:"0 auto 1.75rem" }}>Our team will help you find the right fit for your volume and budget.</p>
        <Link to="/contact" className="button is-white is-medium has-text-weight-bold" style={{ color:P }}>Speak to an Expert</Link>
      </div>
    </section>

    <MyFooter />
  </>
)

export default Services
