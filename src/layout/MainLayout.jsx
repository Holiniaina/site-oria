import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Clients from "@/components/NosCliensts/Clients"
import { useLocation } from "react-router-dom";

function MainLayout({children}) {
  const location = useLocation();
const isContactPage = location.pathname === "/contact";
const isProjectPage = location.pathname === "/projects";
  return (
    <>
      <Navbar/>
        <main>
          {children}
        </main>
        {!(isContactPage || isProjectPage) && <Clients />}
      <Footer/>
    </>
  )
}

export default MainLayout