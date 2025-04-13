import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateConsignment from "./pages/CreateConsignment.jsx";
import ConsignmentDetails from "./pages/ConsignmentDetails.jsx";
import UserConsignment from "./pages/UserConsignment.jsx";

// Components
import Navbar from "./components/MyNav.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/consignments/create" element={<CreateConsignment />} />
          <Route path="/consignments/:id" element={<ConsignmentDetails />} />
          <Route path="/consignments/user" element={<UserConsignment />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
