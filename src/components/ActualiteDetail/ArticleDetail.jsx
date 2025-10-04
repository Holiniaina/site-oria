import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getArticleBySlug } from "@/lib/articles";
import { useTranslation } from "react-i18next";

export default function ArticleDetail() {
  const {t} = useTranslation()
  const { slug } = useParams();            // récupère le slug depuis l’URL
  const navigate = useNavigate();
  const article = getArticleBySlug(slug);  // récupère l’article correspondant

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2>Article introuvable</h2>
        <Button onClick={() => navigate(-1)}>Retour</Button>
      </div> 
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 py-8 items-center">
          <header className="mb-8 text-center"> {/* ✅ centrer tout le texte */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-6"> {/* ✅ centrer la ligne */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
          </header>

        {/* Video section */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative aspect-video">
              <img
                src={article.videoUrl || "/placeholder.svg"}
                alt={`Vidéo pour ${article.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Article content */}
        <div
          className="
            prose prose-lg md:prose-xl prose-neutral 
            max-w-3xl mx-auto    /* ✅ centré avec largeur limitée */
            leading-relaxed      /* ✅ meilleure lisibilité */
            prose-headings:text-foreground 
            prose-p:text-muted-foreground 
            prose-strong:text-foreground 
            prose-a:text-primary hover:prose-a:underline 
            prose-img:rounded-xl prose-img:shadow-lg  /* ✅ images stylées */
            prose-ul:text-muted-foreground prose-li:marker:text-primary
            space-y-6            /* ✅ plus d’espace entre les blocs */
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Call to action */}
        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">{t('questionArticle')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('Discover')}
          </p>
          <Button asChild> 
            <Link to="/actualite">{t('ViewArticle')}</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
