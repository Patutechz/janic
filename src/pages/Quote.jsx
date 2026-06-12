import { useState } from "react"
import { Link } from "react-router-dom"
import MyFooter from "../components/MyFooter.jsx"

const P = "#7c3aed"
const DARK = "#1e293b"
const LIGHT = "#f8fafc"

const STEPS = ["Shipment Details","Sender & Receiver","Options & Pickup","Review & Confirm"]

const RATES = { "Express Courier":4,"International Express":20,"Sea Freight":15,"Consignment Storage":3.5,"Cold Chain Logistics":35 }

const iStyle = { display:"block", width:"100%", padding:"0.65rem 0.9rem", border:"2px solid #e2e8f0", borderRadius:"6px", fontFamily:"inherit", fontSize:"0.95rem", color:DARK, outline:"none", marginBottom:"1.1rem", boxSizing:"border-box", background:"#fff", transition:"border-color .2s" }
const lStyle = { display:"block", fontWeight:700, fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"1px", color:DARK, marginBottom:"0.35rem" }

const Quote = () => {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [ref] = useState("JAN-" + new Date().getFullYear() + "-" + String(Math.floor(Math.random()*900000)+100000))

  const [form, setForm] = useState({
    service:"", origin:"", destination:"", weight:"", length:"", width:"", height:"", description:"", value:"",
    senderName:"", senderPhone:"", senderAddress:"",
    receiverName:"", receiverPhone:"", receiverAddress:"",
    insurance:false, urgent:false, signature:false, pickupDate:"", pickupTime:"",
  })
  const s = (k,v) => setForm(f => ({ ...f, [k]:v }))
  const tog = k => setForm(f => ({ ...f, [k]:!f[k] }))

  const dimW = (form.length && form.width && form.height)
    ? ((+form.length * +form.width * +form.height)/5000).toFixed(2) : null
  const chargeable = dimW && form.weight ? Math.max(+form.weight,+dimW).toFixed(2) : (form.weight||"—")
  const base = RATES[form.service]||0
  const insF  = form.insurance ? +((+form.value||0)*0.015).toFixed(2) : 0
  const urgF  = form.urgent ? 5 : 0
  const sigF  = form.signature ? 0.5 : 0
  const total = (base+insF+urgF+sigF).toFixed(2)

  const canNext = () => {
    if (step===1) return form.service && form.origin && form.destination && form.weight
    if (step===2) return form.senderName && form.senderPhone && form.senderAddress && form.receiverName && form.receiverPhone && form.receiverAddress
    if (step===3) return form.pickupDate && form.pickupTime
    return true
  }

  if (done) return (
    <>
      <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, minHeight:"80vh", display:"flex", alignItems:"center" }}>
        <div className="container" style={{ textAlign:"center", padding:"4rem 1.5rem" }}>
          <div style={{ fontSize:"4.5rem", color:P, marginBottom:"1.5rem" }}><i className="fas fa-check-circle" /></div>
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.5rem" }}>Booking Confirmed</p>
          <h1 style={{ fontWeight:900, fontSize:"clamp(2rem,4vw,3rem)", textTransform:"uppercase", color:"#fff", marginBottom:"0.75rem" }}>
            Your Shipment is <span style={{ color:"#a78bfa" }}>Booked!</span>
          </h1>
          <p style={{ color:"#94a3b8", maxWidth:"420px", margin:"0 auto 1.75rem", lineHeight:"1.75" }}>
            Our team will contact you to confirm the pickup window.
          </p>
          <div style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(167,139,250,0.25)", borderRadius:"10px", padding:"1.5rem 2.5rem", display:"inline-block", marginBottom:"2rem" }}>
            <div style={{ fontSize:"0.68rem", letterSpacing:"2px", textTransform:"uppercase", color:"#475569", marginBottom:"0.35rem" }}>Your Tracking Reference</div>
            <div style={{ fontFamily:"monospace", fontSize:"1.9rem", fontWeight:900, color:"#a78bfa", letterSpacing:"2px" }}>{ref}</div>
          </div>
          <div className="buttons is-centered">
            <Link to="/track" className="button is-primary has-text-weight-bold is-medium">Track Shipment</Link>
            <button className="button is-outlined is-white has-text-weight-bold is-medium" onClick={() => { setDone(false); setStep(1) }}>Book Another</button>
          </div>
        </div>
      </section>
      <MyFooter />
    </>
  )

  return (
    <>
      {/* HERO */}
      <section style={{ background:`linear-gradient(135deg, ${DARK} 0%, #312e81 100%)`, padding:"3.5rem 1.5rem 2.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"300px", height:"300px", background:"rgba(139,92,246,0.1)", borderRadius:"50%", pointerEvents:"none" }} />
        <div className="container">
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#a78bfa", marginBottom:"0.5rem" }}>Online Booking</p>
          <h1 style={{ fontWeight:900, textTransform:"uppercase", color:"#fff", fontSize:"clamp(1.8rem,4vw,3rem)", marginBottom:"0.5rem" }}>
            Book a <span style={{ color:"#a78bfa" }}>Shipment</span>
          </h1>
          <p style={{ color:"#64748b", fontSize:"0.95rem" }}>Fill in the details below and we will handle the rest.</p>
        </div>
      </section>

      {/* STEPPER */}
      <div style={{ background:"#1e293b", borderBottom:"1px solid rgba(255,255,255,0.07)", padding:"1rem 1.5rem", overflowX:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minWidth:"max-content", margin:"0 auto", gap:"0.2rem" }}>
          {STEPS.map((label, i) => {
            const n=i+1, active=n===step, done2=n<step
            return (
              <span key={n} style={{ display:"flex", alignItems:"center", gap:"0.2rem" }}>
                <span style={{ display:"flex", alignItems:"center", gap:"0.5rem", padding:"0.4rem 0.75rem", borderRadius:"6px", background: active ? "rgba(124,58,237,0.2)" : "transparent" }}>
                  <span style={{ width:24, height:24, borderRadius:"50%", background: done2?"#4ade80":active?P:"#334155", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700, color:"#fff", flexShrink:0 }}>
                    {done2 ? <i className="fas fa-check" /> : n}
                  </span>
                  <span style={{ fontSize:"0.8rem", fontWeight:active?700:400, color:active?"#a78bfa":done2?"#86efac":"#475569", whiteSpace:"nowrap" }}>{label}</span>
                </span>
                {i < STEPS.length-1 && <span style={{ width:20, height:2, background:n<step?"#4ade80":"#334155", flexShrink:0 }} />}
              </span>
            )
          })}
        </div>
      </div>

      {/* FORM */}
      <section className="section" style={{ background:LIGHT }}>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-7-desktop is-10-tablet">
              <div style={{ background:"#fff", borderRadius:"10px", padding:"2.5rem", boxShadow:"0 2px 16px rgba(0,0,0,0.07)" }}>

                {/* STEP 1 */}
                {step===1 && <>
                  <h3 style={{ fontWeight:900, fontSize:"1.2rem", textTransform:"uppercase", color:DARK, marginBottom:"1.75rem" }}>Shipment Details</h3>
                  <label style={lStyle}>Service Type *</label>
                  <select style={iStyle} value={form.service} onChange={e=>s("service",e.target.value)}>
                    <option value="">Choose a service…</option>
                    {Object.keys(RATES).map(o=><option key={o}>{o}</option>)}
                  </select>
                  <div className="columns">
                    <div className="column">
                      <label style={lStyle}>Origin *</label>
                      <input style={iStyle} type="text" placeholder="e.g. Lagos, Nigeria" value={form.origin} onChange={e=>s("origin",e.target.value)} />
                    </div>
                    <div className="column">
                      <label style={lStyle}>Destination *</label>
                      <input style={iStyle} type="text" placeholder="e.g. London, UK" value={form.destination} onChange={e=>s("destination",e.target.value)} />
                    </div>
                  </div>
                  <label style={lStyle}>Actual Weight (kg) *</label>
                  <input style={iStyle} type="number" placeholder="e.g. 4.5" value={form.weight} onChange={e=>s("weight",e.target.value)} min="0.1" />
                  <label style={lStyle}>Dimensions (cm) — optional</label>
                  <div style={{ display:"flex", gap:"0.6rem", marginBottom:"1.1rem" }}>
                    {["length","width","height"].map(d => (
                      <input key={d} style={{ ...iStyle, flex:1, marginBottom:0 }} type="number" placeholder={d.charAt(0).toUpperCase()+d.slice(1)} value={form[d]} onChange={e=>s(d,e.target.value)} />
                    ))}
                  </div>
                  {dimW && <p style={{ fontSize:"0.78rem", color:"#64748b", marginBottom:"1rem" }}>Dim. weight: <strong>{dimW} kg</strong> — Chargeable: <strong>{chargeable} kg</strong></p>}
                  <label style={lStyle}>Contents Description</label>
                  <input style={iStyle} type="text" placeholder="e.g. Clothing items, electronics" value={form.description} onChange={e=>s("description",e.target.value)} />
                  <label style={lStyle}>Declared Value ($)</label>
                  <input style={iStyle} type="number" placeholder="e.g. 500" value={form.value} onChange={e=>s("value",e.target.value)} min="0" />
                </>}

                {/* STEP 2 */}
                {step===2 && <>
                  <h3 style={{ fontWeight:900, fontSize:"1.2rem", textTransform:"uppercase", color:DARK, marginBottom:"1.75rem" }}>Sender &amp; Receiver</h3>
                  <div style={{ fontSize:"0.68rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"2px", color:P, marginBottom:"0.85rem" }}>Sender</div>
                  <div className="columns">
                    <div className="column"><label style={lStyle}>Full Name *</label><input style={iStyle} type="text" placeholder="Sender name" value={form.senderName} onChange={e=>s("senderName",e.target.value)} /></div>
                    <div className="column"><label style={lStyle}>Phone *</label><input style={iStyle} type="tel" placeholder="+1 234 000 0000" value={form.senderPhone} onChange={e=>s("senderPhone",e.target.value)} /></div>
                  </div>
                  <label style={lStyle}>Pickup Address *</label>
                  <input style={iStyle} type="text" placeholder="Full pickup address" value={form.senderAddress} onChange={e=>s("senderAddress",e.target.value)} />
                  <hr style={{ border:"none", borderTop:"1px solid #e2e8f0", margin:"1.25rem 0" }} />
                  <div style={{ fontSize:"0.68rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"2px", color:P, marginBottom:"0.85rem" }}>Receiver</div>
                  <div className="columns">
                    <div className="column"><label style={lStyle}>Full Name *</label><input style={iStyle} type="text" placeholder="Receiver name" value={form.receiverName} onChange={e=>s("receiverName",e.target.value)} /></div>
                    <div className="column"><label style={lStyle}>Phone *</label><input style={iStyle} type="tel" placeholder="+44 20 0000 0000" value={form.receiverPhone} onChange={e=>s("receiverPhone",e.target.value)} /></div>
                  </div>
                  <label style={lStyle}>Delivery Address *</label>
                  <input style={iStyle} type="text" placeholder="Full delivery address" value={form.receiverAddress} onChange={e=>s("receiverAddress",e.target.value)} />
                </>}

                {/* STEP 3 */}
                {step===3 && <>
                  <h3 style={{ fontWeight:900, fontSize:"1.2rem", textTransform:"uppercase", color:DARK, marginBottom:"1.75rem" }}>Options &amp; Pickup Schedule</h3>
                  <label style={{ ...lStyle, marginBottom:"0.85rem" }}>Add-On Options</label>
                  {[
                    { key:"insurance", label:"Cargo Insurance",      sub:`Covers declared value (1.5%) = $${insF}`, icon:"fa-shield-alt" },
                    { key:"urgent",    label:"Urgent Handling",       sub:"Priority queue + dedicated handler — $5",  icon:"fa-bolt"     },
                    { key:"signature", label:"Signature on Delivery", sub:"Recipient must sign; photo proof — $0.50", icon:"fa-pen"      },
                  ].map(opt => (
                    <div key={opt.key} onClick={()=>tog(opt.key)}
                      style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem 1.1rem", border:`2px solid ${form[opt.key]?P:"#e2e8f0"}`, borderRadius:"8px", marginBottom:"0.75rem", cursor:"pointer", background:form[opt.key]?"#f3f0ff":"#fff", transition:"all .2s" }}>
                      <div style={{ width:38, height:38, background:form[opt.key]?P:LIGHT, borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all .2s" }}>
                        <i className={`fas ${opt.icon}`} style={{ color:form[opt.key]?"#fff":"#94a3b8", fontSize:"0.95rem" }} />
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:700, fontSize:"0.9rem", color:DARK }}>{opt.label}</div>
                        <div style={{ fontSize:"0.78rem", color:"#64748b" }}>{opt.sub}</div>
                      </div>
                      <div style={{ width:22, height:22, borderRadius:"50%", border:`2px solid ${form[opt.key]?P:"#cbd5e1"}`, background:form[opt.key]?P:"transparent", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        {form[opt.key] && <i className="fas fa-check" style={{ fontSize:"0.55rem", color:"#fff" }} />}
                      </div>
                    </div>
                  ))}
                  <hr style={{ border:"none", borderTop:"1px solid #e2e8f0", margin:"1.25rem 0" }} />
                  <label style={{ ...lStyle, marginBottom:"0.85rem" }}>Preferred Pickup Schedule *</label>
                  <div className="columns">
                    <div className="column">
                      <label style={lStyle}>Date *</label>
                      <input style={iStyle} type="date" value={form.pickupDate} onChange={e=>s("pickupDate",e.target.value)} min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div className="column">
                      <label style={lStyle}>Time Window *</label>
                      <select style={iStyle} value={form.pickupTime} onChange={e=>s("pickupTime",e.target.value)}>
                        <option value="">Select window…</option>
                        {["8:00 AM – 10:00 AM","10:00 AM – 12:00 PM","12:00 PM – 2:00 PM","2:00 PM – 4:00 PM","4:00 PM – 6:00 PM"].map(t=><option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </>}

                {/* STEP 4 */}
                {step===4 && <>
                  <h3 style={{ fontWeight:900, fontSize:"1.2rem", textTransform:"uppercase", color:DARK, marginBottom:"1.75rem" }}>Review &amp; Confirm</h3>
                  {[
                    { title:"Shipment", items:[["Service",form.service],["Route",`${form.origin} → ${form.destination}`],["Chargeable Weight",`${chargeable} kg`],["Contents",form.description||"—"],["Declared Value",form.value?`$${+form.value}`:"—"]] },
                    { title:"Sender",   items:[["Name",form.senderName],["Phone",form.senderPhone],["Address",form.senderAddress]] },
                    { title:"Receiver", items:[["Name",form.receiverName],["Phone",form.receiverPhone],["Address",form.receiverAddress]] },
                    { title:"Pickup",   items:[["Date",form.pickupDate],["Time",form.pickupTime],["Add-ons",[form.insurance&&"Insurance",form.urgent&&"Urgent",form.signature&&"Signature"].filter(Boolean).join(", ")||"None"]] },
                  ].map(sec => (
                    <div key={sec.title} style={{ background:LIGHT, borderRadius:"8px", padding:"1.1rem 1.35rem", marginBottom:"1rem" }}>
                      <div style={{ fontWeight:700, fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"2px", color:P, marginBottom:"0.65rem" }}>{sec.title}</div>
                      {sec.items.map(([k,v]) => (
                        <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"0.3rem 0", borderBottom:"1px solid #e2e8f0", fontSize:"0.87rem" }}>
                          <span style={{ color:"#64748b" }}>{k}</span>
                          <span style={{ color:DARK, fontWeight:500, textAlign:"right", maxWidth:"55%", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* cost */}
                  <div style={{ background:DARK, borderRadius:"8px", padding:"1.35rem 1.5rem" }}>
                    <div style={{ fontWeight:700, fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"2px", color:"#a78bfa", marginBottom:"0.75rem" }}>Estimated Cost</div>
                    {[["Base Rate",`$${base}`], form.insurance&&["Cargo Insurance",`$${insF}`], form.urgent&&["Urgent Handling","$5"], form.signature&&["Signature on Delivery","$0.50"]].filter(Boolean).map(([k,v])=>(
                      <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"0.3rem 0", borderBottom:"1px solid rgba(255,255,255,0.06)", fontSize:"0.86rem" }}>
                        <span style={{ color:"#475569" }}>{k}</span>
                        <span style={{ color:"#e2e8f0" }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ display:"flex", justifyContent:"space-between", paddingTop:"0.75rem", marginTop:"0.25rem", borderTop:"1px solid rgba(167,139,250,0.3)" }}>
                      <span style={{ fontWeight:800, fontSize:"0.95rem", textTransform:"uppercase", color:"#fff" }}>Total Estimate</span>
                      <span style={{ fontWeight:900, fontSize:"1.3rem", color:"#a78bfa" }}>${total}</span>
                    </div>
                    <p style={{ fontSize:"0.72rem", color:"#334155", marginTop:"0.5rem" }}>Final price confirmed after weighing at pickup. Customs duties billed separately for international routes.</p>
                  </div>
                </>}

                {/* NAV */}
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:"2rem", paddingTop:"1.5rem", borderTop:"1px solid #e2e8f0" }}>
                  <button onClick={()=>setStep(s=>s-1)} disabled={step===1}
                    style={{ background:"transparent", border:"2px solid #e2e8f0", color:"#64748b", fontFamily:"inherit", fontSize:"0.95rem", fontWeight:700, padding:"0.65rem 1.5rem", borderRadius:"6px", cursor:step===1?"not-allowed":"pointer", opacity:step===1?0.4:1, textTransform:"uppercase" }}>
                    <i className="fas fa-arrow-left" style={{ marginRight:"0.5rem" }} />Back
                  </button>
                  {step < 4
                    ? <button onClick={()=>setStep(s=>s+1)} disabled={!canNext()}
                        className="button is-primary has-text-weight-bold" style={{ opacity:canNext()?1:0.5 }}>
                        Next <i className="fas fa-arrow-right" style={{ marginLeft:"0.5rem" }} />
                      </button>
                    : <button className="button is-primary has-text-weight-bold" onClick={()=>setDone(true)}>
                        <i className="fas fa-check" style={{ marginRight:"0.5rem" }} />Confirm Booking
                      </button>}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="column is-3-desktop is-hidden-mobile is-hidden-tablet-only">
              <div style={{ position:"sticky", top:"90px" }}>
                <div style={{ background:DARK, borderRadius:"10px", padding:"1.5rem", border:"1px solid rgba(167,139,250,0.15)" }}>
                  <div style={{ fontWeight:700, fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"2px", color:"#a78bfa", marginBottom:"1rem" }}>Summary</div>
                  {[["Service",form.service||"—"],["From",form.origin||"—"],["To",form.destination||"—"],["Weight",form.weight?`${form.weight} kg`:"—"],["Pickup",form.pickupDate||"—"]].map(([k,v])=>(
                    <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"0.4rem 0", borderBottom:"1px solid rgba(255,255,255,0.05)", fontSize:"0.8rem" }}>
                      <span style={{ color:"#475569" }}>{k}</span>
                      <span style={{ color:"#e2e8f0", fontWeight:500, maxWidth:"55%", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", textAlign:"right" }}>{v}</span>
                    </div>
                  ))}
                  {base > 0 && (
                    <div style={{ marginTop:"1rem", paddingTop:"1rem", borderTop:"1px solid rgba(167,139,250,0.2)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontSize:"0.68rem", textTransform:"uppercase", color:"#475569", fontWeight:700 }}>Estimate</span>
                      <span style={{ fontWeight:900, fontSize:"1.2rem", color:"#a78bfa" }}>${total}</span>
                    </div>
                  )}
                </div>
                <div style={{ marginTop:"1rem", background:"rgba(124,58,237,0.07)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:"8px", padding:"1rem" }}>
                  <div style={{ fontSize:"0.78rem", fontWeight:700, color:P, marginBottom:"0.3rem" }}>
                    <i className="fas fa-headset" style={{ marginRight:"0.4rem" }} />Need Help?
                  </div>
                  <p style={{ fontSize:"0.76rem", color:"#64748b", lineHeight:"1.55" }}>Use the live chat button to speak to our booking team in real time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyFooter />
    </>
  )
}

export default Quote
