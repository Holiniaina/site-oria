import { useRef, useState, React } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { getArticleBySlug } from "@/lib/articles";
import { useTranslation } from "react-i18next";

export default function ArticleDetail() {
  const videoRef = useRef(null);
  const { t } = useTranslation();
  const { slug } = useParams(); // récupère le slug depuis l’URL
  const navigate = useNavigate();
  const article = getArticleBySlug(slug); // récupère l’article correspondant

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2>Article introuvable</h2>
        <Button onClick={() => navigate(-1)}>Retour</Button>
      </div>
    );
  }

  return (
    <section className="bg-white py-20 ">
      <div className="container mx-auto px-4 md:px-32">
        <article className="max-w-4xl mx-auto px-4 py-8 items-center">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t(`articles.${article.slug}.title`, { defaultValue: "" })}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-[#b0c4d8]">{t(`articles.${article.slug}.date`, { defaultValue: "" })}</span>
              </div>
            {/*
            <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de lecture</span>
              </div>
              */} 
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(`articles.${article.slug}.description`, { defaultValue: "" })}
            </p>
          </header>

          {/* Video section */}
          <Card className="mb-8 overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <video
                  src={article.videoUrl || "/placeholder.mp4"}
                  
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
            </div>

            </CardHeader>
          </Card>

          {/* Article content */}
          <div
              className="whitespace-pre-wrap text-justify"
            dangerouslySetInnerHTML={{
              __html: t(`articles.${article.slug}.content`, { defaultValue: "" }),
            }}
          />

          {/* Call to action */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">{t("questionArticle")}</h3>
            <p className="text-muted-foreground mb-6">{t("Discover")}</p>
            <Button asChild>
              <Link to="/actualite">{t("ViewArticle")}</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>

  );
}
