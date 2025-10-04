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
    <div className="min-h-screen bg-background">

      {/* Articles Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('tuned')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={article.videoUrl || "/placeholder.svg"}
                      alt={`Vidéo pour ${article.title}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 text-center">
                  <CardTitle className="text-2xl mb-3 line-clamp-2 ">{article.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{article.date}</p>
                  <p className="text-muted-foreground line-clamp-3">{article.description}</p>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-40 bg-red-800 hover:bg-black w-full" onClick={scrollToTop}>
                    <Link to={`/actualite/${article.slug}`}>Lire l'article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> 
    </div>
  )
}

export default sectionVideo
