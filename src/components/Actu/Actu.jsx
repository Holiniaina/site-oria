import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllArticles } from "@/lib/articles";
import { useTranslation } from "react-i18next";

function Actu() {
  const { t } = useTranslation();
  const articles = getAllArticles().slice(0, 3); 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });  
  }; 
  if (!articles || articles.length === 0) return null;

  return (
    <section className="bg-white py-20 ">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title avec bouton en haut à droite */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
              {t("majActu")}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("news")}</h2>
            <p className="mt-1 text-[13px] lg:w-2/3 text-gray-400">
              {t("newsAbout")}
            </p>
          </div>

          <Link to="/actualite" onClick={scrollToTop}>
            <Button className="bg-[#000000] hover:bg-[#868686] text-white px-3 py-1 rounded-sm text-sm transition duration-300 ease-in-out whitespace-nowrap">
              {t("ViewArticle")}
            </Button> 
          </Link>
        </div>

        {/* Grid des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              {/* Vidéo compacte */}
              <CardHeader className="p-0">
                <div className="relative h-40 sm:h-48 lg:h-52 w-full">
                  <video
                    src={article.videoUrl || "/placeholder.mp4"} 
                    muted 
                    autoPlay
                    playsInline
                    loop
                    className="w-full h-full object-cover opacity-70" 
                  >
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-12 h-12 text-white opacity-80"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 2v20l18-10L4 2z" />
                  </svg>
                </div>
                </div>
              </CardHeader>
 
              {/* Contenu compact */}
              <CardContent className="p-2 flex-1 flex flex-col justify-between text-center">
                <div>
                  <CardTitle className="text-lg md:text-xl mb-1 line-clamp-2">{t(`articles.${article.slug}.title`, { defaultValue: "" })}</CardTitle>
                  <p className="text-[13px] text-muted-foreground mb-2 text-[#b0c4d8]">{t(`articles.${article.slug}.date`, { defaultValue: "" })}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{t(`articles.${article.slug}.description`, { defaultValue: "" })}</p>
                </div>
              </CardContent>

              {/* Footer bouton */}
              <CardFooter>
                <Button asChild className="w-full bg-red-800 hover:bg-black text-sm">
                  <Link to={`/actualite/${article.slug}`} onClick={scrollToTop}>{t("readmore")}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Actu;
