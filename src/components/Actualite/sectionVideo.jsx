import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { getAllArticles } from "@/lib/articles"
import { useTranslation } from "react-i18next";

function sectionVideo() {
  const {t} = useTranslation()
  const articles = getAllArticles()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }; 
  return (
    <section className="bg-white py-20 ">
      <div className="container mx-auto px-4 md:px-32">
        <h2 className="text-3xl font-bold text-center mb-12">{t('tuned')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <video
                    src={article.videoUrl || "/placeholder.mp4"} // remplacer par placeholder vidéo si besoin
                    muted
                    playsInline // utile pour mobile
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

              <CardContent className="p-6 text-center">
                <CardTitle className="text-2xl mb-3 line-clamp-2 ">{t(`articles.${article.slug}.title`, { defaultValue: "" })}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4 text-[#b0c4d8]">{t(`articles.${article.slug}.date`, { defaultValue: "" })}</p>
                <p className="text-muted-foreground line-clamp-3">{t(`articles.${article.slug}.description`, { defaultValue: "" })}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-40 bg-red-800 hover:bg-black w-full" onClick={scrollToTop}>
                  <Link to={`/actualite/${article.slug}`}>{t("readmore")}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div> 
      </div>
    </section> 
  )
}

export default sectionVideo
