import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from './Footer';


const HOC = ({children, title = "Re4Cash"}) => {
   return (
      <>
      <Navbar/>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         {children}
      <Footer/>
      </>
   )
} 

export default HOC

import { Navbarmarketplace } from "./Navbar"


export const HOCmarketplace = ({title, children}) => {
  return (
    <>
    <Navbarmarketplace/>
       <Helmet>
          <title>{title}</title>
       </Helmet>
       {children}
    <Footer/>
    </>
  )
}
