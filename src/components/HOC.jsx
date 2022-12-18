import { Helmet } from "react-helmet-async";

const HOC = ({children, title = "Re4Cash"}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         {children}
      </>
   )
} 

export default HOC