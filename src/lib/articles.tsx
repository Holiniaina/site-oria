export interface Article {
  id: number
  //title: string
 // date: string
  videoUrl: string
 // description: string
  slug: string
 // content: string
  author: string
  readTime: string 
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export const articles: Article[] = [ 
   {
    id: 1, 
    videoUrl: "https://res.cloudinary.com/dknbojzhe/video/upload/v1762163630/Oria_Group_V2_o8htsr.mp4",
    slug: generateSlug("oria-groupe"),
    author: "Pierre Martin",
    readTime: "7 min",
   
  },
  {
    id: 2,
    videoUrl: "https://res.cloudinary.com/dknbojzhe/video/upload/v1759819392/DJI_0632_ev6ljj.mp4",
    slug: generateSlug("immeuble-edonia"),
    author: "Marie Dubois",
    readTime: "5 min"
  },
 /*
  {
    id: 3,
    videoUrl: "https://res.cloudinary.com/dknbojzhe/video/upload/v1759819392/DJI_0632_ev6ljj.mp4",
    slug: generateSlug("strategies-dentreprise-modernes"),
    author: "Sophie Leroy",
    readTime: "6 min",
    
  },{
    id: 4,
    videoUrl: "https://res.cloudinary.com/dknbojzhe/video/upload/v1759819392/DJI_0632_ev6ljj.mp4",
    slug: generateSlug("strategies-dentreprise-modernes"),
    author: "Sophie Leroy",
    readTime: "6 min",
    
  }*/
]

export function getArticleBySlug(slug: string): Article | undefined {

  return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
