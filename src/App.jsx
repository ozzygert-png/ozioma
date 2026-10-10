import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpages from "./Pages/Landingpages";
import Aboutus from "./Pages/Aboutus";  
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpages />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
     export default App 
