import { Helmet } from "react-helmet-async";
import Navbar, { NavbarAkunProfile,Navbarmarketplace } from "./Navbar";
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
      <NavbarAkunProfile />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div id="zeus-header-akun" />
      {children}
    </>
  );
};


export const HOCdashboardpengelola = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export const HOCAkunProfile = ({ title, children }) => {
  return (
    <>
      <NavbarAkunProfile />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div id="zeus-header-akun" />
      {children}
      <Footer />
    </>
  );
};
