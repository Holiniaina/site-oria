export interface Article {
  id: number
  title: string
  date: string
  videoUrl: string
  description: string
  slug: string
  content: string
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
    title: "Les dernières innovations technologiques",
    date: "15 Mars 2024",
    videoUrl: "/technology-innovation-video-thumbnail.jpg",
    description: "Découvrez les avancées technologiques qui transforment notre quotidien.",
    slug: generateSlug("Les dernières innovations technologiques"),
    author: "Marie Dubois",
    readTime: "5 min",
    content: `
      <h2>L'intelligence artificielle au cœur de l'innovation</h2>
      <p>L'intelligence artificielle continue de révolutionner notre façon de travailler et de vivre. Des assistants virtuels aux voitures autonomes, ces technologies transforment radicalement notre quotidien.</p>
      
      <h3>Les secteurs les plus impactés</h3>
      <ul>
        <li><strong>Santé :</strong> Diagnostic médical assisté par IA</li>
        <li><strong>Transport :</strong> Véhicules autonomes et optimisation des trajets</li>
        <li><strong>Finance :</strong> Détection de fraudes et trading algorithmique</li>
        <li><strong>Éducation :</strong> Personnalisation de l'apprentissage</li>
      </ul>
      
      <h3>Les défis à relever</h3>
      <p>Malgré ces avancées prometteuses, plusieurs défis restent à surmonter : l'éthique de l'IA, la protection des données personnelles, et l'impact sur l'emploi.</p>
      
      <p>Les entreprises qui sauront intégrer ces technologies de manière responsable prendront une longueur d'avance sur leurs concurrents.</p>
    `,
  },
  {
    id: 2, 
    title: "Tendances du marché digital",
    date: "10 Mars 2024",
    videoUrl: "/digital-market-trends-video-thumbnail.jpg",
    description: "Analyse des tendances émergentes dans le secteur numérique.",
    slug: generateSlug("Tendances du marché digital"),
    author: "Pierre Martin",
    readTime: "7 min",
    content: `
      <h2>Le commerce électronique en pleine mutation</h2>
      <p>Le marché digital connaît une transformation sans précédent. Les habitudes de consommation évoluent rapidement, poussées par les nouvelles technologies et les changements sociétaux.</p>
      
      <h3>Les tendances clés de 2024</h3>
      <ul>
        <li><strong>Commerce social :</strong> Intégration des achats dans les réseaux sociaux</li>
        <li><strong>Réalité augmentée :</strong> Essayage virtuel et visualisation 3D</li>
        <li><strong>Personnalisation :</strong> Expériences sur-mesure basées sur l'IA</li>
        <li><strong>Durabilité :</strong> Consommation responsable et éco-conception</li>
      </ul>
      
      <h3>L'impact sur les entreprises</h3>
      <p>Les entreprises doivent repenser leur stratégie digitale pour rester compétitives. L'omnicanalité devient essentielle pour offrir une expérience client cohérente.</p>
      
      <p>Les données clients sont devenues l'or noir du digital, permettant une personnalisation poussée des offres et services.</p>
    `,
  },
  {
    id: 3,
    title: "Stratégies d'entreprise modernes",
    date: "5 Mars 2024",
    videoUrl: "/modern-business-strategy-video-thumbnail.jpg",
    description: "Comment les entreprises s'adaptent aux nouveaux défis du marché.",
    slug: generateSlug("Stratégies d'entreprise modernes"),
    author: "Sophie Leroy",
    readTime: "6 min",
    content: `
      <h2>L'agilité au cœur de la stratégie</h2>
      <p>Face à un environnement économique en constante évolution, les entreprises doivent adopter de nouvelles approches stratégiques pour rester compétitives.</p>
      
      <h3>Les piliers de la stratégie moderne</h3>
      <ul>
        <li><strong>Agilité organisationnelle :</strong> Capacité d'adaptation rapide</li>
        <li><strong>Innovation continue :</strong> Culture de l'expérimentation</li>
        <li><strong>Collaboration :</strong> Travail en équipes transversales</li>
        <li><strong>Durabilité :</strong> Responsabilité sociale et environnementale</li>
      </ul>
      
      <h3>La transformation digitale comme levier</h3>
      <p>La digitalisation n'est plus une option mais une nécessité. Elle permet d'optimiser les processus, d'améliorer l'expérience client et de créer de nouveaux modèles économiques.</p>
      
      <h3>L'importance du capital humain</h3>
      <p>Les entreprises qui réussissent sont celles qui investissent dans leurs collaborateurs, en développant leurs compétences et en favorisant l'innovation participative.</p>
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
