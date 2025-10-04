import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Clients from "@/components/NosCliensts/Clients"
import { useLocation } from "react-router-dom";

function MainLayout({children}) {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isProjectPage = location.pathname === "/projects";
  const isActuPage = location.pathname === "/actualite";
  const isDetailPage = location.pathname.startsWith("/actualite/");

    return (
      <>
        <Navbar/>
          <main>
            {children}
          </main>
          {!(isContactPage || isProjectPage || isActuPage || isDetailPage) && <Clients />}
        <Footer/>
      </>
    )
  }

export default MainLayout