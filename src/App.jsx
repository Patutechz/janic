import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

// Landing pages
import Home    from "./pages/Home.jsx"
import About   from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Services from "./pages/Services.jsx"
import Track   from "./pages/Track.jsx"
import FAQ     from "./pages/FAQ.jsx"
import Quote   from "./pages/Quote.jsx"

// App pages (unchanged)
import Detail            from "./pages/Detail.jsx"
import Login             from "./pages/Login"
import Signup            from "./pages/Signup"
import CreateConsignment from "./pages/CreateConsignment.jsx"
import ConsignmentDetails from "./pages/ConsignmentDetails.jsx"
import UserConsignment   from "./pages/UserConsignment.jsx"

// Components
import Navbar from "./components/MyNav.jsx"

// ── Tawk.to Live Chat ──────────────────────────────────────────
// Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with your real IDs
// from: https://dashboard.tawk.to > Administration > Chat Widget
function TawkToChat() {
  useEffect(() => {
    if (document.getElementById("tawkto-script")) return
    const s1 = document.createElement("script")
    const s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.id = "tawkto-script"
    s1.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0.parentNode.insertBefore(s1, s0)
  }, [])
  return null
}

function App() {
  return (
    <>
      <TawkToChat />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Landing */}
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/contact"  element={<Contact />}  />
          <Route path="/services" element={<Services />} />
          <Route path="/track"    element={<Track />}    />
          <Route path="/faq"      element={<FAQ />}      />
          <Route path="/quote"    element={<Quote />}    />

          {/* App */}
          <Route path="/:id"                 element={<Detail />}             />
          <Route path="/login"               element={<Login />}              />
          <Route path="/signup"              element={<Signup />}             />
          <Route path="/consignments/create" element={<CreateConsignment />}  />
          <Route path="/consignments/:id"    element={<ConsignmentDetails />} />
          <Route path="/consignments/user"   element={<UserConsignment />}    />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
