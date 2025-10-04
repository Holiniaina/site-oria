import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { getAllArticles } from "@/lib/articles";
import { useTranslation } from "react-i18next";

function Actu() {
  const { t } = useTranslation();
  const articles = getAllArticles().slice(0, 3); // On prend les 3 premiers
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }; 
  if (!articles || articles.length === 0) return null;

  const [firstArticle, ...otherArticles] = articles;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            {t("majActu")}
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">{t("news")}</h2>
          <p className="mt-2 text-[15px] lg:w-2/3 text-gray-400">
            {t("newsAbout")}
          </p>
        </div>

        {/* Articles section */} 
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Premier article avec texte et bouton centrés */}
          <div
            className="project-bg flex-1 h-[300px] text-white rounded-sm flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: `url(${firstArticle.videoUrl || "/placeholder.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-[13px] mb-2">{firstArticle.category || "Actualité"}</p>
            <h4 className="text-xl font-semibold mb-4">{firstArticle.title}</h4>
             <Link to="/actualite" onClick={scrollToTop}>
                <Button className="shadow-4xl mt-6 bg-[#000000] hover:bg-[#868686] text-white px-4 py-2 rounded-sm transition duration-300 ease-in-out">
                   {t("ViewArticle")}
                </Button>
              </Link>
          </div> 

          {/* Les deux autres articles sans bouton */}
          <div className="flex-1 grid grid-rows-2 gap-6">
            {otherArticles.map((article) => (
              <div
                key={article.slug}
                className="project-bg h-[140px] text-white p-4 rounded-sm flex flex-col justify-center"
                style={{
                  backgroundImage: `url(${article.videoUrl || "/placeholder.svg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-[13px] mb-2">{article.category || "Actualité"}</p>
                <h4 className="text-lg font-semibold">{article.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Actu;
