import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HOC = ({ children, title = "Re4Cash" }) => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
      <Footer />
    </>
  );
};

export default HOC;

import { Navbarmarketplace } from "./Navbar";

export const HOCmarketplace = ({ title, children }) => {
  return (
    <>
      <Navbarmarketplace />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div id="zeus-header" />
      {children}
      <Footer />
    </>
  );
};

export const HOCCheckout = ({ title, children }) => {
  return (
    <>
      <Navbarmarketplace />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div id="zeus-header" />
      {children}
    </>
  );
};

import { Navbardashboardpengelola } from "./Navbar";
import { Footerdashboardpengelola } from "./Footer";

export const HOCdashboardpengelola = ({ title, children }) => {
  return (
    <>
      {/* <Navbardashboardpengelola /> */}
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};
