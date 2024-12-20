import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import { Contact } from "../pages/Contact";
import ScrollToTop from "../components/ScroolTop";
function index() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default index;
