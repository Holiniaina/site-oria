import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Filiale from "@/pages/Filiale"
import NotFound404 from "@/pages/NotFound404"
import About from "@/pages/About"
import MainLayout from "@/layout/MainLayout"  
import Contact from "@/pages/Contact"
import NosProjet from "@/pages/NosProjet"
import NosActualite from "@/pages/Actualite"
import ArticleDetail from "@/pages/ActualiteDetail"

function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/filiales" element={<Filiale/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<NosProjet/>}/>
          <Route path="/actualite" element={<NosActualite/>}/>
          <Route path="/actualite/:slug" element={<ArticleDetail />} />
          <Route path="*" element={<NotFound404/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
