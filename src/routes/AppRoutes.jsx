import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} /> 
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="booking" element={<Booking />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default AppRoutes;
