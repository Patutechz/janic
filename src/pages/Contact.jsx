import { useState } from "react"
import { Link } from "react-router-dom"
import MyFooter from "../components/MyFooter.jsx"
import ShipImg from "../assets/img/ship-5810249_1280.jpg"

const P = "#7c3aed"
const DARK = "#1e293b"

const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" })
  const [sent, setSent] = useState(false)
  const set = (k,v) => setForm(f => ({ ...f, [k]:v }))

  return (
    <>
      {/* HERO */}
      <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"5rem 1.5rem 3.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"350px", height:"350px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
        <div className="container">
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.75rem" }}>Get in Touch</p>
          <h1 style={{ fontWeight:900, lineHeight:1.05, textTransform:"uppercase", color:"#fff", fontSize:"clamp(2rem,5vw,3.6rem)", marginBottom:"1rem" }}>
            Let's Talk <span style={{ color:"#a78bfa" }}>Logistics</span>
          </h1>
          <p style={{ color:"#94a3b8", maxWidth:"480px", lineHeight:"1.75" }}>
            Whether it is a quote, a shipment question, or a business enquiry — our team responds fast.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section" style={{ background:"#f8fafc" }}>
        <div className="container">
          <div className="columns">

            {/* INFO */}
            <div className="column is-4">
              <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Our Details</p>
              <h2 className="title is-4 mb-5" style={{ fontWeight:900, textTransform:"uppercase" }}>
                Reach <span className="has-text-primary">Us Here</span>
              </h2>

              {[
                // { icon:"fa-map-marker-alt", title:"Head Office",  text:"14 Harbor Drive, Lagos, Nigeria" },
                // { icon:"fa-phone",          title:"Phone",        text:"+1 (314) 333 7456\n+44 20 7946 0001 (UK)" },
                { icon:"fa-envelope",       title:"Email",        text:"contact@janicworldwide.com" },
                { icon:"fa-clock",          title:"Hours",        text:"Mon–Fri: 8:00 AM – 8:00 PM\nSat–Sun: 9:00 AM – 5:00 PM" },
              ].map(c => (
                <div key={c.title} style={{ display:"flex", gap:"0.85rem", alignItems:"flex-start", padding:"1.1rem 1.25rem", background:"#fff", borderRadius:"8px", marginBottom:"0.85rem", boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ width:40, height:40, background:DARK, borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <i className={`fas ${c.icon} has-text-primary`} style={{ fontSize:"0.95rem" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.5px", color:DARK, marginBottom:"0.2rem" }}>{c.title}</div>
                    <p className="has-text-grey" style={{ fontSize:"0.85rem", lineHeight:"1.6", whiteSpace:"pre-line" }}>{c.text}</p>
                  </div>
                </div>
              ))}

              {/* live chat hint */}
              <div className="is-hidden" style={{ padding:"1.1rem 1.25rem", background:DARK, borderRadius:"8px", border:"1px solid rgba(167,139,250,0.2)", marginTop:"0.5rem" }}>
                <div style={{ fontWeight:700, fontSize:"0.85rem", color:"#fff", marginBottom:"0.3rem" }}>
                  <i className="fas fa-comment has-text-primary" style={{ marginRight:"0.5rem" }} />Live Chat Available
                </div>
                <p style={{ fontSize:"0.8rem", color:"#94a3b8", lineHeight:"1.5" }}>
                  Use the chat button at the bottom right to talk to our team in real time.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="column is-7 is-offset-1-desktop">
              <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:P, marginBottom:"0.5rem" }}>Send a Message</p>
              <h2 className="title is-4 mb-5" style={{ fontWeight:900, textTransform:"uppercase" }}>
                Get a <span className="has-text-primary">Free Quote</span>
              </h2>

              {sent ? (
                <div style={{ textAlign:"center", padding:"3rem 2rem", background:"#fff", borderRadius:"10px", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize:"3.5rem", color:P, marginBottom:"1rem" }}><i className="fas fa-check-circle" /></div>
                  <h3 className="title is-4" style={{ fontWeight:900, textTransform:"uppercase" }}>Message Sent!</h3>
                  <p className="has-text-grey mb-4" style={{ fontSize:"0.92rem" }}>
                    Thanks {form.name}! We will get back to you at {form.email} within 2 business hours.
                  </p>
                  <button className="button is-primary has-text-weight-semibold"
                    onClick={() => { setSent(false); setForm({ name:"",email:"",phone:"",service:"",message:"" }) }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div style={{ background:"#fff", borderRadius:"10px", padding:"2.25rem", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label" style={{ fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"1px", fontWeight:700 }}>Full Name *</label>
                        <div className="control">
                          <input className="input" type="text" placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)} required />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label" style={{ fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"1px", fontWeight:700 }}>Email Address *</label>
                        <div className="control">
                          <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e=>set("email",e.target.value)} required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label" style={{ fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"1px", fontWeight:700 }}>Phone Number</label>
                        <div className="control">
                          <input className="input" type="tel" placeholder="+1 234 000 0000" value={form.phone} onChange={e=>set("phone",e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label" style={{ fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"1px", fontWeight:700 }}>Service Needed</label>
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select value={form.service} onChange={e=>set("service",e.target.value)}>
                              <option value="">Select a service…</option>
                              {["Express Courier","International Shipping","Sea Freight","Consignment Storage","Cold Chain Logistics","Corporate / B2B Account","Other"].map(s=><option key={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" style={{ fontSize:"0.75rem", textTransform:"uppercase", letterSpacing:"1px", fontWeight:700 }}>Message *</label>
                    <div className="control">
                      <textarea className="textarea" rows="5"
                        placeholder="Tell us about your shipment, route, weight, and any special requirements…"
                        value={form.message} onChange={e=>set("message",e.target.value)} required />
                    </div>
                  </div>
                  <button
                    className="button is-primary is-medium is-fullwidth has-text-weight-bold"
                    onClick={() => { if (form.name && form.email && form.message) setSent(true) }}
                    style={{ marginTop:"0.5rem" }}>
                    <span className="icon"><i className="fas fa-paper-plane" /></span>
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BANNER */}
      <div style={{ position:"relative", height:"200px", overflow:"hidden" }}>
        <img src={ShipImg} alt="Ship" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.72)", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"1rem" }}>
          <h2 style={{ fontWeight:900, fontSize:"clamp(1.4rem,3vw,2rem)", textTransform:"uppercase", color:"#fff" }}>
            We Respond Within <span style={{ color:"#a78bfa" }}>2 Business Hours</span>
          </h2>
        </div>
      </div>

      <MyFooter />
    </>
  )
}

export default Contact
