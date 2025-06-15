import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from "./Layout"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import Specialist from "./pages/Specialist"
import DemandedRoles from "./pages/DemandedRoles"
import SoftwareEng from "./pages/dir/SoftwareEng"
import SoftwareDev from "./pages/dir/SoftwareDev"
import DataAnlyst from "./pages/dir/DataAnlyst"
import BussinesAn from "./pages/dir/BussinesAn"
import CloudEngineer from "./pages/dir/CloudEngineer"
import DataSci from "./pages/dir/DataSci"
import Pyhton from "./pages/dir/Pyhton"
import JavaDev from "./pages/dir/JavaDev"
import Cyber from "./pages/dir/Cyber"
import Devops from "./pages/dir/Devops"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/specialist" element={<Specialist />} />
          <Route path="/dir" element={<DemandedRoles />} />
          <Route path="/Se" element={<SoftwareEng />} />
          <Route path="/Sd" element={<SoftwareDev />} />
          <Route path="/da" element={<DataAnlyst />} />
          <Route path="/ba" element={<BussinesAn />} />
          <Route path="/ce" element={<CloudEngineer />} />
          <Route path="/ds" element={<DataSci />} />
          <Route path="/jd" element={<JavaDev />} />
          <Route path="/pd" element={<Pyhton />} />
          <Route path="/do" element={<Devops />} />
          <Route path="/cs" element={<Cyber />} />
        </Route>
      </Routes>

    </>

  )
}

export default App