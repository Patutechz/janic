import { useState } from "react"
import { Link } from "react-router-dom"
import MyFooter from "../components/MyFooter.jsx"
import PackageSvg from "../assets/img/undraw_package_arrived_63rf.svg"

const P = "#7c3aed"
const DARK = "#1e293b"

const FAQS = [
  { q:"How do I get a tracking number?",             a:"Your tracking number is generated automatically when your shipment is booked and confirmed. You will receive it via email and SMS within 1 hour of pickup." },
  { q:"What countries do you deliver to?",           a:"Janic Express delivers to 80+ countries across Africa, Europe, North America, Asia, and the Middle East. Use our quote tool to check availability for your destination." },
  { q:"How are shipping costs calculated?",          a:"Costs are based on the higher of actual weight and dimensional (volumetric) weight, combined with origin-destination zone pricing. Get an instant quote on our Contact page." },
  { q:"What items cannot be shipped?",               a:"Prohibited items include firearms, illegal narcotics, live animals (without specialist handling), counterfeit goods, perishables without cold chain booking, and items restricted by destination customs laws." },
  { q:"Is my shipment insured?",                     a:"All shipments include basic coverage at no extra cost. We also offer enhanced insurance up to the full declared value of goods." },
  { q:"How long does international shipping take?",  a:"Express international: 2–5 business days. Standard: 7–14 business days. Sea freight: 20–45 days. Exact timelines are confirmed at booking." },
  { q:"Can I change the delivery address?",          a:"Address changes can be made before the package reaches the destination country's customs facility. Contact our support team immediately via live chat or phone." },
  { q:"What happens if my package is lost?",         a:"We investigate immediately and provide updates every 24 hours. If confirmed lost, we process your insurance claim within 5 business days." },
  { q:"Do you offer consignment storage?",           a:"Yes. Our secure facilities offer short and long-term consignment storage with climate-controlled options. Goods can be released in batches on your schedule." },
  { q:"How do I open a corporate account?",          a:"Contact our B2B team via the Contact page. Corporate accounts receive volume discounts, dedicated support, monthly invoicing, and API access." },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
      {/* HERO */}
      <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"5rem 1.5rem 3.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"380px", height:"380px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.75rem" }}>Help Centre</p>
              <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2rem,5vw,3.6rem)", marginBottom:"1rem" }}>
                Frequently Asked <span style={{ color:"#a78bfa" }}>Questions</span>
              </h1>
              <p style={{ color:"#94a3b8", maxWidth:"460px", lineHeight:"1.75" }}>
                Everything you need to know about shipping with Janic Express. Can't find your answer? Our live chat team is always on.
              </p>
            </div>
            <div className="column is-4 is-offset-2 is-hidden-mobile">
              <img src={PackageSvg} alt="Package" style={{ width:"100%", maxWidth:"300px", display:"block", margin:"0 auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="section" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-desktop">
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom:"1px solid #e2e8f0" }}>
                  <div
                    style={{ display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer", padding:"1.35rem 0", gap:"1rem" }}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span style={{ fontWeight:700, fontSize:"1rem", color:DARK, textTransform:"uppercase", letterSpacing:"0.3px" }}>{faq.q}</span>
                    <span className="has-text-primary" style={{ flexShrink:0, transition:"transform 0.25s", display:"inline-block", transform: open===i ? "rotate(180deg)" : "" }}>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </div>
                  <div style={{ overflow:"hidden", maxHeight: open===i ? "300px" : "0", transition:"max-height 0.35s ease", paddingBottom: open===i ? "1.25rem" : 0 }}>
                    <p className="has-text-grey" style={{ fontSize:"0.93rem", lineHeight:"1.75" }}>{faq.a}</p>
                  </div>
                </div>
              ))}

              {/* Support box */}
              <div style={{ textAlign:"center", marginTop:"3rem", padding:"2.5rem 2rem", background:"#fff", borderRadius:"10px", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize:"2.5rem", color:P, marginBottom:"1rem" }}><i className="fas fa-headset" /></div>
                <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Still need help?</p>
                <h3 className="title is-4" style={{ fontWeight:900, textTransform:"uppercase", marginBottom:"0.5rem" }}>Talk to a Real Person</h3>
                <p className="has-text-grey mb-5" style={{ fontSize:"0.92rem" }}>Our support team is live 24/7 via chat, phone, and email.</p>
                <Link to="/contact" className="button is-primary has-text-weight-semibold is-medium">
                  <span className="icon"><i className="fas fa-headset" /></span>
                  <span>Contact Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyFooter />
    </>
  )
}

export default FAQ
